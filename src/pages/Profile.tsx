import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { 
  User, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Link as LinkIcon, 
  Plus,
  X,
  Save,
  Edit3,
  Camera
} from "lucide-react";

interface ProfileData {
  first_name?: string;
  last_name?: string;
  email?: string;
  bio?: string;
  current_company?: string;
  job_title?: string;
  institution?: string;
  graduation_year?: number;
  skills?: string[];
  linkedin_url?: string;
  avatar_url?: string;
  role?: string;
}

const Profile = () => {
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const [profileData, setProfileData] = useState<ProfileData>({});
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setSaving] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error && error.code !== 'PGRST116') {
      toast({
        title: "Error",
        description: "Failed to fetch profile data",
        variant: "destructive",
      });
    } else if (data) {
      setProfileData(data);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    
    setSaving(true);
    
    const { error } = await supabase
      .from('profiles')
      .update(profileData)
      .eq('user_id', user.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update profile",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Profile updated successfully",
      });
      setIsEditing(false);
    }
    
    setSaving(false);
  };

  const addSkill = () => {
    if (newSkill.trim() && !profileData.skills?.includes(newSkill.trim())) {
      setProfileData(prev => ({
        ...prev,
        skills: [...(prev.skills || []), newSkill.trim()]
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills?.filter(skill => skill !== skillToRemove) || []
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">My Profile</h1>
          <p className="text-muted-foreground text-lg">Manage your professional information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="card-premium">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={profileData.avatar_url} />
                      <AvatarFallback className="text-2xl bg-gradient-to-r from-primary to-accent text-white">
                        {profileData.first_name?.[0]}{profileData.last_name?.[0]}
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button
                        size="sm"
                        variant="secondary"
                        className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-foreground mb-1">
                    {profileData.first_name} {profileData.last_name}
                  </h2>
                  
                  <Badge variant="secondary" className="mb-4 capitalize">
                    {profileData.role}
                  </Badge>
                  
                  {profileData.job_title && (
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Briefcase className="w-4 h-4 mr-2" />
                      <span>{profileData.job_title}</span>
                    </div>
                  )}
                  
                  {profileData.current_company && (
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{profileData.current_company}</span>
                    </div>
                  )}
                  
                  {profileData.institution && (
                    <div className="flex items-center text-muted-foreground mb-4">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span>{profileData.institution} ({profileData.graduation_year})</span>
                    </div>
                  )}
                  
                  <Button
                    onClick={() => setIsEditing(!isEditing)}
                    variant={isEditing ? "outline" : "default"}
                    className="w-full"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profileData.first_name || ""}
                      onChange={(e) => setProfileData(prev => ({ ...prev, first_name: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profileData.last_name || ""}
                      onChange={(e) => setProfileData(prev => ({ ...prev, last_name: e.target.value }))}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={profileData.email || ""}
                    disabled
                    className="bg-muted"
                  />
                </div>
                
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profileData.bio || ""}
                    onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                    disabled={!isEditing}
                    rows={3}
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Professional Information */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  Professional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      value={profileData.job_title || ""}
                      onChange={(e) => setProfileData(prev => ({ ...prev, job_title: e.target.value }))}
                      disabled={!isEditing}
                      placeholder="e.g. Software Engineer"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Current Company</Label>
                    <Input
                      id="company"
                      value={profileData.current_company || ""}
                      onChange={(e) => setProfileData(prev => ({ ...prev, current_company: e.target.value }))}
                      disabled={!isEditing}
                      placeholder="e.g. Google Inc."
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 bg-muted border border-r-0 rounded-l-md">
                      <LinkIcon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <Input
                      id="linkedin"
                      value={profileData.linkedin_url || ""}
                      onChange={(e) => setProfileData(prev => ({ ...prev, linkedin_url: e.target.value }))}
                      disabled={!isEditing}
                      className="rounded-l-none"
                      placeholder="linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle>Skills & Expertise</CardTitle>
                <CardDescription>Add your technical and professional skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {isEditing && (
                    <div className="flex gap-2">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a skill..."
                        onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <Button onClick={addSkill} size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills?.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {skill}
                        {isEditing && (
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 hover:text-destructive"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </Badge>
                    )) || <p className="text-muted-foreground">No skills added yet</p>}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="card-premium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="institution">Institution</Label>
                    <Input
                      id="institution"
                      value={profileData.institution || ""}
                      onChange={(e) => setProfileData(prev => ({ ...prev, institution: e.target.value }))}
                      disabled={!isEditing}
                      placeholder="e.g. IIT Delhi"
                    />
                  </div>
                  <div>
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Input
                      id="graduationYear"
                      type="number"
                      value={profileData.graduation_year || ""}
                      onChange={(e) => setProfileData(prev => ({ ...prev, graduation_year: parseInt(e.target.value) }))}
                      disabled={!isEditing}
                      placeholder="2020"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            {isEditing && (
              <div className="flex justify-end">
                <Button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="btn-premium btn-glow"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSaving ? "Saving..." : "Save Profile"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Building2, Briefcase, GraduationCap, Plus, X, ArrowRight } from "lucide-react";

const AlumniOnboarding = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    graduationYear: "",
    institution: "",
    currentCompany: "",
    jobTitle: "",
    bio: "",
    linkedinUrl: "",
    skills: [] as string[],
  });
  
  const [skillInput, setSkillInput] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    // Check if user already has a complete profile
    checkExistingProfile();
  }, [user, navigate]);

  const checkExistingProfile = async () => {
    if (!user) return;

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (profile && profile.current_company && profile.job_title) {
      navigate('/dashboard/alumni');
    }
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()]
      }));
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.graduationYear || !formData.institution) {
        toast({
          title: "Missing Information",
          description: "Please fill in your graduation year and institution.",
          variant: "destructive",
        });
        return;
      }
    }
    setStep(step + 1);
  };

  const handleComplete = async () => {
    if (!user) return;
    if (!formData.currentCompany || !formData.jobTitle) {
      toast({
        title: "Missing Information", 
        description: "Please fill in your current company and job title.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          graduation_year: parseInt(formData.graduationYear),
          institution: formData.institution,
          current_company: formData.currentCompany,
          job_title: formData.jobTitle,
          bio: formData.bio,
          linkedin_url: formData.linkedinUrl,
          skills: formData.skills,
        })
        .eq('user_id', user.id);

      if (error) throw error;

      toast({
        title: "Profile Completed!",
        description: "Welcome to AlumniConnect. Let's start networking!",
      });

      navigate('/dashboard/alumni');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <Card className="card-premium border-0">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4">
          <GraduationCap className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-2xl">Education Background</CardTitle>
        <CardDescription>Tell us about your educational journey</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="graduationYear">Graduation Year *</Label>
          <Input
            id="graduationYear"
            type="number"
            placeholder="2020"
            value={formData.graduationYear}
            onChange={(e) => setFormData(prev => ({ ...prev, graduationYear: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="institution">Institution *</Label>
          <Input
            id="institution"
            placeholder="e.g., IIT Delhi, NIT Trichy, Delhi University"
            value={formData.institution}
            onChange={(e) => setFormData(prev => ({ ...prev, institution: e.target.value }))}
          />
        </div>
        <Button onClick={handleNext} className="w-full" size="lg">
          Continue <ArrowRight className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );

  const renderStep2 = () => (
    <Card className="card-premium border-0">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4">
          <Briefcase className="w-8 h-8 text-accent" />
        </div>
        <CardTitle className="text-2xl">Professional Information</CardTitle>
        <CardDescription>Share your current professional status</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="currentCompany">Current Company *</Label>
          <Input
            id="currentCompany"
            placeholder="e.g., Microsoft, TCS, Startup, Self-employed"
            value={formData.currentCompany}
            onChange={(e) => setFormData(prev => ({ ...prev, currentCompany: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="jobTitle">Job Title *</Label>
          <Input
            id="jobTitle"
            placeholder="e.g., Software Engineer, Product Manager, Entrepreneur"
            value={formData.jobTitle}
            onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="linkedinUrl">LinkedIn Profile (Optional)</Label>
          <Input
            id="linkedinUrl"
            placeholder="https://linkedin.com/in/yourprofile"
            value={formData.linkedinUrl}
            onChange={(e) => setFormData(prev => ({ ...prev, linkedinUrl: e.target.value }))}
          />
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
            Back
          </Button>
          <Button onClick={handleNext} className="flex-1">
            Continue <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep3 = () => (
    <Card className="card-premium border-0">
      <CardHeader className="text-center">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4">
          <Building2 className="w-8 h-8 text-success" />
        </div>
        <CardTitle className="text-2xl">Skills & Bio</CardTitle>
        <CardDescription>Help others find you by your expertise</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="skills">Skills</Label>
          <div className="flex gap-2 mb-3">
            <Input
              id="skills"
              placeholder="Add a skill (e.g., React, Leadership, Finance)"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={addSkill} size="sm">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground">
                {skill}
                <X className="w-3 h-3 ml-1" onClick={() => removeSkill(skill)} />
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <Label htmlFor="bio">Professional Bio (Optional)</Label>
          <Textarea
            id="bio"
            placeholder="Tell us about your professional journey, interests, and how you'd like to help fellow alumni..."
            rows={4}
            value={formData.bio}
            onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
          />
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
            Back
          </Button>
          <Button onClick={handleComplete} disabled={loading} className="flex-1">
            Complete Profile <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-6">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">AC</span>
            </div>
            <span className="text-2xl font-bold text-foreground">AlumniConnect</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Complete Your Profile</h1>
          <p className="text-muted-foreground">
            Help us personalize your AlumniConnect experience
          </p>
          <div className="flex justify-center mt-6 space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i <= step ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>
    </div>
  );
};

export default AlumniOnboarding;
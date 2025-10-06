import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { User, Briefcase, Calendar, Users, Search, MapPin, GraduationCap, Building2, Mail, Phone, Edit, Plus, ExternalLink } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const AlumniDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching profile:', error);
      } else if (data) {
        setProfile(data);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-muted-foreground">Profile not found. Please complete your onboarding.</p>
          <Button onClick={() => navigate('/onboarding')} className="mt-4">
            Complete Profile
          </Button>
        </div>
      </div>
    );
  }

  const displayName = `${profile.first_name || ''} ${profile.last_name || ''}`.trim() || 'User';
  const profileData = {
    name: displayName,
    batch: profile.graduation_year || 'N/A',
    degree: 'Alumni', // We can enhance this later with more detailed education info
    institution: profile.institution || profile.institution_name || 'Institution',
    currentJob: profile.job_title || 'Professional',
    company: profile.current_company || 'Company',
    location: 'India', // We can add location to profile later
    email: profile.email || user.email,
    phone: '+91 XXXXX XXXXX', // Privacy - don't show real phone
    skills: profile.skills || [],
    bio: profile.bio || 'Alumni member of ReconnectX'
  };
  const upcomingEvents = [{
    id: 1,
    title: "IIT Delhi Alumni Meet 2025",
    date: "March 15, 2025",
    location: "New Delhi",
    type: "Networking",
    attendees: 250,
    status: "registered"
  }, {
    id: 2,
    title: "Tech Innovation Summit",
    date: "April 22, 2025",
    location: "Bangalore",
    type: "Conference",
    attendees: 500,
    status: "interested"
  }, {
    id: 3,
    title: "Alumni Startup Pitch Day",
    date: "May 10, 2025",
    location: "Mumbai",
    type: "Competition",
    attendees: 150,
    status: "not_registered"
  }];
  const jobListings = [{
    id: 1,
    title: "Frontend Developer Intern",
    company: "TCS Innovation Labs",
    location: "Pune",
    type: "Internship",
    postedBy: "Priya Patel (Batch 2020)",
    postedDate: "2 days ago",
    applicants: 45
  }, {
    id: 2,
    title: "Data Scientist",
    company: "Flipkart",
    location: "Bangalore",
    type: "Full-time",
    postedBy: "Arjun Singh (Batch 2019)",
    postedDate: "1 week ago",
    applicants: 78
  }, {
    id: 3,
    title: "Product Manager",
    company: "Zomato",
    location: "Gurgaon",
    type: "Full-time",
    postedBy: "Ananya Gupta (Batch 2017)",
    postedDate: "3 days ago",
    applicants: 32
  }];
  const recentAlumni = [{
    name: "Sneha Reddy",
    batch: "2019",
    company: "Google",
    role: "SWE"
  }, {
    name: "Vikash Kumar",
    batch: "2020",
    company: "Amazon",
    role: "PM"
  }, {
    name: "Meera Joshi",
    batch: "2018",
    company: "Uber",
    role: "DS"
  }, {
    name: "Rohit Agarwal",
    batch: "2021",
    company: "Swiggy",
    role: "SDE"
  }];
  return <div className="container mx-auto px-6 py-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {profileData.name}!
              </h1>
              <p className="text-white/90 text-lg">
                {profileData.batch} • {profileData.institution} • {profileData.currentJob} @ {profileData.company}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button variant="secondary" size="sm" onClick={() => navigate('/profile')}>
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm" className="border-white text-white bg-white/10">
                <ExternalLink className="w-4 h-4 mr-2" />
                Public Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Profile & Search */}
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <Card className="card-elevated">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <CardTitle className="text-lg">{profileData.name}</CardTitle>
                  <CardDescription>{profileData.currentJob}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 text-sm">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-muted-foreground" />
                  <span>{profileData.degree} • {profileData.batch}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                  <span>{profileData.company}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs">{profileData.email}</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Skills</p>
                <div className="flex flex-wrap gap-1">
                  {profileData.skills.length > 0 ? profileData.skills.map((skill, index) => 
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ) : (
                    <p className="text-xs text-muted-foreground">No skills added yet</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Search Alumni */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-lg">Find Alumni</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Search by name, batch, company..." className="pl-9" />
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <Users className="w-4 h-4 mr-2" />
                Browse Alumni Directory
              </Button>
            </CardContent>
          </Card>

          {/* Recent Alumni */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-lg">Recently Active</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAlumni.map((alumni, index) => <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary/50 transition-smooth">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white text-xs font-semibold">
                      {alumni.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{alumni.name}</p>
                      <p className="text-xs text-muted-foreground">{alumni.role} @ {alumni.company} • {alumni.batch}</p>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Events & Jobs */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2" onClick={() => navigate('/profile')}>
              <User className="w-6 h-6 text-primary" />
              <span>Update Profile</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2" onClick={() => navigate('/page-in-progress')}>
              <Users className="w-6 h-6 text-accent" />
              <span>Find Mentor</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2" onClick={() => navigate('/jobs')}>
              <Plus className="w-6 h-6 text-success" />
              <span>Post a Job</span>
            </Button>
          </div>

          {/* Upcoming Events */}
          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Upcoming Events</CardTitle>
                <CardDescription>Connect with fellow alumni at these events</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map(event => <div key={event.id} className="border border-border rounded-lg p-4 hover:bg-secondary/50 transition-smooth">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <p className="text-muted-foreground">{event.date} • {event.location}</p>
                      </div>
                      <Badge variant={event.status === 'registered' ? 'default' : event.status === 'interested' ? 'secondary' : 'outline'}>
                        {event.status === 'registered' ? 'Registered' : event.status === 'interested' ? 'Interested' : 'Available'}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{event.attendees} attendees</span>
                        <span>•</span>
                        <span>{event.type}</span>
                      </div>
                      <Button size="sm" variant={event.status === 'registered' ? 'secondary' : 'default'}>
                        {event.status === 'registered' ? 'View Details' : 'RSVP'}
                      </Button>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* Job Board */}
          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl">Job Board</CardTitle>
                <CardDescription>Opportunities posted by fellow alumni</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Briefcase className="w-4 h-4 mr-2" />
                View All Jobs
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobListings.map(job => <div key={job.id} className="border border-border rounded-lg p-4 hover:bg-secondary/50 transition-smooth">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <p className="text-muted-foreground">{job.company} • {job.location}</p>
                      </div>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Posted by {job.postedBy} • {job.postedDate}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {job.applicants} applicants
                      </span>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default AlumniDashboard;
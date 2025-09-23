import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Building2, 
  Search, 
  Filter,
  Plus,
  BookmarkPlus,
  ExternalLink,
  GraduationCap,
  DollarSign,
  Users,
  Calendar,
  Star,
  TrendingUp
} from "lucide-react";

const Jobs = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [userProfile, setUserProfile] = useState<any>(null);

  // Fetch user profile to check role
  const fetchUserProfile = async () => {
    if (!user) return;
    
    const { supabase } = await import('@/integrations/supabase/client');
    const { data } = await supabase
      .from('profiles')
      .select('role')
      .eq('user_id', user.id)
      .single();
    
    if (data) {
      setUserProfile(data);
    }
  };

  // Fetch profile on component mount
  useEffect(() => {
    if (user) {
      fetchUserProfile();
    }
  }, [user]);

  // Check if user can post jobs (not students)
  const canPostJob = userProfile?.role !== 'student';

  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Microsoft India",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹15-25 LPA",
      postedBy: "Rahul Sharma",
      postedByBatch: "Batch 2018, IIT Delhi",
      postedDate: "2 days ago",
      applicants: 45,
      description: "Join our team to build next-generation web applications using React, TypeScript, and modern frontend technologies.",
      skills: ["React", "TypeScript", "JavaScript", "CSS", "Node.js"],
      category: "Technology",
      urgent: true,
      verified: true,
      remote: true
    },
    {
      id: 2,
      title: "Product Marketing Manager",
      company: "Flipkart",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹12-20 LPA",
      postedBy: "Priya Patel",
      postedByBatch: "Batch 2020, NIT Trichy",
      postedDate: "1 week ago",
      applicants: 78,
      description: "Lead product marketing initiatives for our e-commerce platform, focusing on customer acquisition and retention strategies.",
      skills: ["Marketing", "Analytics", "Communication", "Strategy", "MBA"],
      category: "Marketing",
      urgent: false,
      verified: true,
      remote: false
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Zomato",
      location: "Gurgaon, Haryana",
      type: "Internship",
      experience: "0-1 years",
      salary: "₹40-50K/month",
      postedBy: "Ananya Gupta",
      postedByBatch: "Batch 2017, BITS Pilani",
      postedDate: "3 days ago",
      applicants: 32,
      description: "Work on machine learning models for food recommendation systems and customer behavior analysis.",
      skills: ["Python", "Machine Learning", "SQL", "Statistics", "Pandas"],
      category: "Technology",
      urgent: false,
      verified: true,
      remote: false
    },
    {
      id: 4,
      title: "Business Analyst",
      company: "Accenture",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹8-12 LPA",
      postedBy: "Vikash Kumar",
      postedByBatch: "Batch 2019, IIT Bombay",
      postedDate: "5 days ago",
      applicants: 67,
      description: "Analyze business processes and provide insights to improve operational efficiency across various client projects.",
      skills: ["Analytics", "Excel", "SQL", "PowerBI", "Communication"],
      category: "Consulting",
      urgent: false,
      verified: true,
      remote: true
    },
    {
      id: 5,
      title: "Mobile App Developer",
      company: "Swiggy",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹18-28 LPA",
      postedBy: "Arjun Singh",
      postedByBatch: "Batch 2019, NIT Warangal",
      postedDate: "1 day ago",
      applicants: 23,
      description: "Develop and maintain mobile applications for food delivery platform using React Native and native technologies.",
      skills: ["React Native", "iOS", "Android", "JavaScript", "API Integration"],
      category: "Technology",
      urgent: true,
      verified: true,
      remote: false
    },
    {
      id: 6,
      title: "Financial Analyst Intern",
      company: "HDFC Bank",
      location: "Chennai, Tamil Nadu",
      type: "Internship",
      experience: "0-1 years",
      salary: "₹35K/month",
      postedBy: "Meera Joshi",
      postedByBatch: "Batch 2021, IIM Calcutta",
      postedDate: "1 week ago",
      applicants: 89,
      description: "Support financial planning and analysis activities, including budgeting, forecasting, and variance analysis.",
      skills: ["Finance", "Excel", "Financial Modeling", "Analytics", "Communication"],
      category: "Finance",
      urgent: false,
      verified: true,
      remote: false
    }
  ];

  const recentApplications = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Google India",
      appliedDate: "2 days ago",
      status: "Under Review",
      statusColor: "text-accent"
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Amazon",
      appliedDate: "1 week ago",
      status: "Interview Scheduled",
      statusColor: "text-success"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Uber",
      appliedDate: "2 weeks ago",
      status: "Application Submitted",
      statusColor: "text-primary"
    }
  ];

  const trendingCompanies = [
    { name: "Microsoft", openings: 23, logo: "MS" },
    { name: "Google", openings: 18, logo: "GO" },
    { name: "Amazon", openings: 31, logo: "AM" },
    { name: "Flipkart", openings: 15, logo: "FK" },
    { name: "Zomato", openings: 12, logo: "ZO" }
  ];

  const jobTypes = [
    { id: "all", name: "All Jobs", count: jobListings.length },
    { id: "full-time", name: "Full-time", count: jobListings.filter(j => j.type === 'Full-time').length },
    { id: "internship", name: "Internship", count: jobListings.filter(j => j.type === 'Internship').length },
    { id: "remote", name: "Remote", count: jobListings.filter(j => j.remote).length }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = selectedType === "all" || 
                       (selectedType === "full-time" && job.type === "Full-time") ||
                       (selectedType === "internship" && job.type === "Internship") ||
                       (selectedType === "remote" && job.remote);
    
    const matchesLocation = selectedLocation === "all" || 
                           job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Career Opportunities</h1>
            <p className="text-muted-foreground">
              Discover opportunities posted by fellow alumni and industry partners
            </p>
          </div>
          {canPostJob && (
            <Button variant="cta" className="mt-4 md:mt-0">
              <Plus className="w-4 h-4 mr-2" />
              Post a Job
            </Button>
          )}
          {!canPostJob && userProfile && (
            <div className="mt-4 md:mt-0 text-sm text-muted-foreground bg-muted/50 px-3 py-2 rounded-lg">
              Students can browse jobs but cannot post opportunities
            </div>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Search */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-lg">Search Jobs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Job title, company, skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Job Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Location</label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="bangalore">Bangalore</SelectItem>
                    <SelectItem value="hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="mumbai">Mumbai</SelectItem>
                    <SelectItem value="delhi">Delhi/NCR</SelectItem>
                    <SelectItem value="chennai">Chennai</SelectItem>
                    <SelectItem value="pune">Pune</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Job Type Filters */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-lg">Job Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {jobTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={selectedType === type.id ? "default" : "ghost"}
                    className="w-full justify-between"
                    onClick={() => setSelectedType(type.id)}
                  >
                    <span>{type.name}</span>
                    <span className="text-muted-foreground">{type.count}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Applications */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-lg">Your Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentApplications.map((app) => (
                  <div key={app.id} className="p-3 border border-border rounded-lg">
                    <h4 className="font-medium text-sm">{app.title}</h4>
                    <p className="text-xs text-muted-foreground">{app.company}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">{app.appliedDate}</span>
                      <span className={`text-xs font-medium ${app.statusColor}`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Applications
              </Button>
            </CardContent>
          </Card>

          {/* Trending Companies */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending Companies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {trendingCompanies.map((company, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary/50 transition-smooth cursor-pointer">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      {company.logo}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{company.name}</p>
                      <p className="text-xs text-muted-foreground">{company.openings} openings</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="lg:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing {filteredJobs.length} opportunities
            </p>
            <Select defaultValue="recent">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="salary">Highest Salary</SelectItem>
                <SelectItem value="company">Company A-Z</SelectItem>
                <SelectItem value="experience">Experience Level</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="card-elevated hover:border-primary/30 transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        {job.urgent && (
                          <Badge variant="destructive" className="text-xs">Urgent</Badge>
                        )}
                        {job.verified && (
                          <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                            Verified
                          </Badge>
                        )}
                        {job.remote && (
                          <Badge variant="outline" className="text-xs">Remote</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Building2 className="w-4 h-4" />
                          <span>{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-lg text-success">{job.salary}</p>
                      <p className="text-sm text-muted-foreground">{job.experience}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{job.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="w-4 h-4" />
                        <span>Posted by {job.postedBy}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.postedDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{job.applicants} applicants</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <BookmarkPlus className="w-4 h-4 mr-1" />
                        Save
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Details
                      </Button>
                      <Button size="sm">
                        Apply Now
                      </Button>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    Alumni Contact: {job.postedByBatch} • 
                    <span className="text-primary cursor-pointer hover:underline ml-1">
                      View Profile
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or filters
              </p>
              <Button variant="outline">Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Building2, 
  Calendar, 
  Briefcase, 
  TrendingUp, 
  Plus, 
  Download,
  Upload,
  Settings,
  Eye,
  Edit,
  Trash2,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Alumni", value: "50,245", change: "+12%", icon: Users, color: "text-primary" },
    { title: "Partner Institutions", value: "247", change: "+5%", icon: Building2, color: "text-accent" },
    { title: "Active Events", value: "38", change: "+23%", icon: Calendar, color: "text-success" },
    { title: "Job Postings", value: "1,247", change: "+8%", icon: Briefcase, color: "text-orange-500" }
  ];

  const alumniByYear = [
    { year: "2024", count: 2500 },
    { year: "2023", count: 4200 },
    { year: "2022", count: 3800 },
    { year: "2021", count: 3200 },
    { year: "2020", count: 4100 },
    { year: "2019", count: 3900 }
  ];

  const industryDistribution = [
    { industry: "Technology", percentage: 35, count: 17586 },
    { industry: "Finance", percentage: 22, count: 11054 },
    { industry: "Healthcare", percentage: 15, count: 7537 },
    { industry: "Education", percentage: 12, count: 6029 },
    { industry: "Consulting", percentage: 10, count: 5025 },
    { industry: "Others", percentage: 6, count: 3014 }
  ];

  const recentActivities = [
    {
      type: "event",
      action: "New event created",
      details: "IIT Delhi Alumni Tech Summit 2025",
      time: "2 hours ago",
      user: "Admin Team"
    },
    {
      type: "alumni",
      action: "Bulk alumni import",
      details: "247 new alumni profiles added from NIT Trichy",
      time: "1 day ago",
      user: "Dr. Raghavan"
    },
    {
      type: "job",
      action: "Job posting approved",
      details: "Senior Developer position at Microsoft",
      time: "2 days ago",
      user: "System Admin"
    },
    {
      type: "verification",
      action: "Institution verified",
      details: "BITS Pilani Goa campus credentials verified",
      time: "3 days ago",
      user: "Verification Team"
    }
  ];

  const pendingApprovals = [
    {
      id: 1,
      type: "Institution Registration",
      name: "Indian Institute of Science, Bangalore",
      submittedBy: "Prof. K. Natarajan",
      date: "2025-01-15",
      status: "pending"
    },
    {
      id: 2,
      type: "Event Approval",
      name: "National Alumni Conclave 2025",
      submittedBy: "Event Committee",
      date: "2025-01-14",
      status: "under_review"
    },
    {
      id: 3,
      type: "Job Posting",
      name: "AI Research Internship - IIT Bombay",
      submittedBy: "Dr. Amit Sharma",
      date: "2025-01-13",
      status: "pending"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Institution Dashboard</h1>
            <p className="text-muted-foreground">
              Empowering institutions with centralized data and alumni-driven opportunities
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button variant="cta">
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-success text-sm font-medium">{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-full bg-secondary`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Analytics */}
        <div className="lg:col-span-2 space-y-6">
          {/* Alumni Distribution by Year */}
          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Alumni Count by Graduation Year
                </CardTitle>
                <CardDescription>Total registered alumni distribution</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alumniByYear.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{item.year}</span>
                    <div className="flex items-center space-x-4 flex-1 ml-4">
                      <Progress 
                        value={(item.count / 4200) * 100} 
                        className="flex-1"
                      />
                      <span className="text-sm font-medium w-16 text-right">{item.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Industry Distribution */}
          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <PieChart className="w-5 h-5 mr-2" />
                  Alumni Distribution by Industry
                </CardTitle>
                <CardDescription>Current employment sectors</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                View Trends
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {industryDistribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-smooth">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{item.industry}</span>
                        <span className="text-sm font-semibold">{item.percentage}%</span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                    <span className="ml-4 text-sm text-muted-foreground w-16 text-right">
                      {item.count.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Management Actions */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Quick Management Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Upload className="w-6 h-6 text-primary" />
                  <span>Bulk Alumni Import</span>
                  <span className="text-xs text-muted-foreground">CSV/Excel upload</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Calendar className="w-6 h-6 text-accent" />
                  <span>Create Event Invitation</span>
                  <span className="text-xs text-muted-foreground">Host alumni meet</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Briefcase className="w-6 h-6 text-success" />
                  <span>Post Job/Internship</span>
                  <span className="text-xs text-muted-foreground">Alumni hiring</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Users className="w-6 h-6 text-orange-500" />
                  <span>Manage Alumni Records</span>
                  <span className="text-xs text-muted-foreground">Add/Edit/Delete</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Activities & Approvals */}
        <div className="space-y-6">
          {/* Pending Approvals */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Pending Approvals
              </CardTitle>
              <CardDescription>Items requiring your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="border border-border rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.type}</p>
                      </div>
                      <Badge variant={
                        item.status === 'pending' ? 'destructive' : 
                        item.status === 'under_review' ? 'secondary' : 'default'
                      } className="text-xs">
                        {item.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">
                      By {item.submittedBy} • {item.date}
                    </p>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="default" className="text-xs h-7">
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest platform updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                        activity.type === 'event' ? 'bg-primary/20 text-primary' :
                        activity.type === 'alumni' ? 'bg-accent/20 text-accent' :
                        activity.type === 'job' ? 'bg-success/20 text-success' :
                        'bg-secondary text-secondary-foreground'
                      }`}>
                        {activity.type === 'event' ? 'E' :
                         activity.type === 'alumni' ? 'A' :
                         activity.type === 'job' ? 'J' : 'V'}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground truncate">{activity.details}</p>
                      <p className="text-xs text-muted-foreground">{activity.time} • {activity.user}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Health */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>System Health</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Database</span>
                  <Badge variant="secondary" className="text-success">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">API Services</span>
                  <Badge variant="secondary" className="text-success">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Email Service</span>
                  <Badge variant="secondary" className="text-success">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Storage</span>
                  <Badge variant="secondary" className="text-orange-500">85% Used</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
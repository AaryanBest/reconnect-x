import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Users, Calendar, Target, Award, ArrowUp, ArrowDown, Eye, UserPlus, MessageCircle } from "lucide-react";

const Analytics = () => {
  // Mock analytics data
  const stats = [
    {
      title: "Total Profile Views",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "text-primary"
    },
    {
      title: "Network Connections",
      value: "156",
      change: "+8.2%",
      trend: "up", 
      icon: UserPlus,
      color: "text-success"
    },
    {
      title: "Event Participation",
      value: "23",
      change: "+4.1%",
      trend: "up",
      icon: Calendar,
      color: "text-accent"
    },
    {
      title: "Job Applications",
      value: "8",
      change: "-2.3%",
      trend: "down",
      icon: Target,
      color: "text-orange-500"
    }
  ];

  const monthlyActivity = [
    { month: "Jan", views: 120, connections: 15, events: 2 },
    { month: "Feb", views: 180, connections: 22, events: 1 },
    { month: "Mar", views: 240, connections: 18, events: 3 },
    { month: "Apr", views: 320, connections: 25, events: 2 },
    { month: "May", views: 280, connections: 20, events: 4 },
    { month: "Jun", views: 380, connections: 28, events: 3 }
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Track your professional growth and network engagement
        </p>
        
        {/* Under Construction Notice */}
        <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl">
          <div className="flex items-center space-x-2 mb-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-primary">Page Under Construction</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            We're building advanced analytics features to help you track your professional journey. 
            Here's a preview of what's coming:
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center space-x-1 mt-2">
                      {stat.trend === 'up' ? (
                        <ArrowUp className="w-3 h-3 text-success" />
                      ) : (
                        <ArrowDown className="w-3 h-3 text-destructive" />
                      )}
                      <span className={`text-xs font-medium ${
                        stat.trend === 'up' ? 'text-success' : 'text-destructive'
                      }`}>
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl bg-secondary/50`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Profile Performance */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5" />
              <span>Profile Performance</span>
            </CardTitle>
            <CardDescription>Your profile engagement over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-32 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Interactive chart coming soon</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">847</p>
                  <p className="text-xs text-muted-foreground">This Month</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-success">124</p>
                  <p className="text-xs text-muted-foreground">New Views</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">28</p>
                  <p className="text-xs text-muted-foreground">Connections</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Network Growth */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Network Growth</span>
            </CardTitle>
            <CardDescription>How your network is expanding</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-32 bg-gradient-to-r from-success/5 to-primary/5 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Network visualization coming soon</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Alumni Connections</span>
                  <Badge variant="secondary">89</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Industry Professionals</span>
                  <Badge variant="secondary">45</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Mentors & Mentees</span>
                  <Badge variant="secondary">22</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Timeline */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>Your latest platform interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Attended Alumni Tech Conference", time: "2 days ago", type: "event" },
                { action: "Updated profile skills", time: "1 week ago", type: "profile" },
                { action: "Connected with 5 new alumni", time: "2 weeks ago", type: "network" },
                { action: "Applied to Software Engineer role", time: "3 weeks ago", type: "job" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary/50 transition-smooth">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'event' ? 'bg-primary' :
                    activity.type === 'profile' ? 'bg-success' :
                    activity.type === 'network' ? 'bg-accent' : 'bg-orange-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievement Badges */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Achievements</span>
            </CardTitle>
            <CardDescription>Milestones and recognition</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Super Connector", desc: "Connected with 50+ alumni", earned: true },
                { title: "Event Enthusiast", desc: "Attended 10+ events", earned: true },
                { title: "Skill Sharer", desc: "Complete profile", earned: false },
                { title: "Mentor", desc: "Help 5+ junior alumni", earned: false }
              ].map((badge, index) => (
                <div key={index} className={`p-3 rounded-lg border ${
                  badge.earned ? 'border-primary bg-primary/5' : 'border-muted bg-muted/20'
                }`}>
                  <div className="text-center">
                    <Award className={`w-8 h-8 mx-auto mb-2 ${
                      badge.earned ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <h4 className={`font-semibold text-xs ${
                      badge.earned ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {badge.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Coming Soon Features */}
      <Card className="card-elevated mt-8">
        <CardHeader>
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>Features we're working on to enhance your analytics experience</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Industry Insights", desc: "Compare your growth with industry benchmarks" },
              { title: "Skill Analytics", desc: "Track which skills are trending in your network" },
              { title: "Event ROI", desc: "Measure the impact of events on your career growth" }
            ].map((feature, index) => (
              <div key={index} className="p-4 border border-dashed border-primary/30 rounded-lg text-center">
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
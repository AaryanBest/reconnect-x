import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Network, Briefcase, TrendingUp, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Centralized Alumni Database",
      description: "All alumni profiles in one secure, government-backed platform with verified credentials and real-time updates.",
      color: "text-primary"
    },
    {
      icon: Network,
      title: "Networking & Engagement",
      description: "Foster meaningful connections through mentorship programs, alumni events, and collaborative fundraising initiatives.",
      color: "text-accent"
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Alumni-driven job postings, internship opportunities, and career guidance for current students and recent graduates.",
      color: "text-success"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Registered Alumni" },
    { number: "200+", label: "Partner Institutions" },
    { number: "10,000+", label: "Job Opportunities" },
    { number: "500+", label: "Events Hosted" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer @ Microsoft",
      batch: "Batch 2020, IIT Delhi",
      content: "AlumniConnect helped me find my dream job through a senior alumnus. The networking opportunities are incredible!",
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      role: "Startup Founder",
      batch: "Batch 2018, NIT Trichy",
      content: "As an entrepreneur, I love giving back by posting internship opportunities. The platform makes it so easy to connect with bright students.",
      avatar: "RK"
    },
    {
      name: "Dr. Anita Desai",
      role: "Research Scientist",
      batch: "Batch 2015, BITS Pilani",
      content: "The mentorship program through AlumniConnect transformed my career path. Now I mentor 5 students every semester.",
      avatar: "AD"
    }
  ];

  const scrollToLogin = () => {
    document.getElementById('login-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
              <CheckCircle className="w-4 h-4 mr-2" />
              Government of India Initiative
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
              <span className="gradient-text">Connecting Alumni.</span><br />
              <span className="text-foreground">Empowering Students.</span><br />
              <span className="text-foreground">Strengthening Institutions.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              A single digital platform to manage alumni data and foster engagement across India's educational ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button variant="hero" size="xl" onClick={scrollToLogin}>
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Link to="/future-scope">
                <Button variant="outline" size="xl">
                  View Roadmap
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Alumni Management</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Designed to bridge the gap between alumni, current students, and institutions through 
              innovative technology and government-backed security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="card-elevated border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from our alumni community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elevated border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.batch}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-4">"{testimonial.content}"</p>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="login-section" className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Connect?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of alumni and students already benefiting from our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90">
                Login to Your Account
              </Button>
            </Link>
            <Link to="/login?tab=signup">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                Create New Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Government Initiative Badge */}
      <section className="py-12 bg-card border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8 text-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🇮🇳</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Digital India Initiative</h3>
                <p className="text-sm text-muted-foreground">Empowering education through technology</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Developed for Smart India Hackathon 2025 • Scalable for nationwide adoption
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
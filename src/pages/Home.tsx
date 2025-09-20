import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Network, Briefcase, TrendingUp, ArrowRight, CheckCircle, Star, Play, Rocket, Phone } from "lucide-react";
import { Link } from "react-router-dom";
const Home = () => {
  const features = [{
    icon: Users,
    title: "Centralized Alumni Database",
    description: "All alumni profiles in one secure, government-backed platform with verified credentials and real-time updates.",
    color: "text-primary"
  }, {
    icon: Network,
    title: "Networking & Engagement",
    description: "Foster meaningful connections through mentorship programs, alumni events, and collaborative fundraising initiatives.",
    color: "text-accent"
  }, {
    icon: Briefcase,
    title: "Career Opportunities",
    description: "Alumni-driven job postings, internship opportunities, and career guidance for current students and recent graduates.",
    color: "text-success"
  }];
  const stats = [{
    number: "50,000+",
    label: "Registered Alumni"
  }, {
    number: "200+",
    label: "Partner Institutions"
  }, {
    number: "10,000+",
    label: "Job Opportunities"
  }, {
    number: "500+",
    label: "Events Hosted"
  }];
  const testimonials = [{
    name: "Priya Sharma",
    role: "Software Engineer @ Microsoft",
    institution: "IIT Delhi",
    content: "AlumniConnect helped me find my dream job through a senior alumnus. The networking opportunities are incredible!"
  }, {
    name: "Rajesh Kumar",
    role: "Startup Founder",
    institution: "NIT Trichy",
    content: "As an entrepreneur, I love giving back by posting internship opportunities. The platform makes it so easy to connect with bright students."
  }, {
    name: "Dr. Anita Desai",
    role: "Research Scientist",
    institution: "BITS Pilani",
    content: "The mentorship program through AlumniConnect transformed my career path. Now I mentor 5 students every semester."
  }];
  const scrollToLogin = () => {
    document.getElementById('login-section')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative section-spacing overflow-hidden">
        <div className="container-premium">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-primary-light border border-primary/20 text-primary rounded-full text-sm font-semibold mb-8 animate-slide-in-up shadow-md">
              <CheckCircle className="w-4 h-4 mr-2" />
              Government of India Initiative
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 animate-slide-in-up text-premium leading-tight" style={{
            animationDelay: '0.1s'
          }}>
              <span className="gradient-text">Connecting Alumni.</span><br />
              <span className="text-foreground">Empowering Students.</span><br />
              <span className="text-foreground">Strengthening Institutions.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-slide-in-up leading-relaxed" style={{
            animationDelay: '0.2s'
          }}>
              A single digital platform to manage alumni data and foster engagement across India's educational ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-in-up mb-16" style={{
            animationDelay: '0.3s'
          }}>
              <Button variant="hero" size="xl" onClick={scrollToLogin} className="btn-premium btn-glow">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="xl" className="btn-premium">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-in-up" style={{
            animationDelay: '0.4s'
          }}>
              {stats.map((stat, index) => <div key={index} className="text-center p-6 card-premium">
                  <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 text-premium">{stat.number}</div>
                  <div className="text-muted-foreground font-semibold">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float hidden lg:block" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-success/10 rounded-full animate-float hidden lg:block" style={{
        animationDelay: '2s'
      }} />
      </section>

      {/* Features Section */}
      <section className="section-spacing bg-secondary/30">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-premium">Comprehensive Alumni Management</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Designed to bridge the gap between alumni, current students, and institutions through 
              innovative technology and government-backed security.
            </p>
          </div>
          
          <div className="grid-responsive">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <Card key={index} className="card-premium border-0 bg-card/80 backdrop-blur-sm group h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-10 h-10 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-2xl text-premium">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-lg leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing">
        <div className="container-premium">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-premium">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our thriving alumni community
            </p>
          </div>
          
          <div className="grid-responsive">
            {testimonials.map((testimonial, index) => <Card key={index} className="card-premium border-0 h-full">
                <CardContent className="pt-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center text-primary font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg text-premium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground font-semibold">{testimonial.role}</p>
                      <p className="text-xs text-primary font-semibold">{testimonial.institution}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="login-section" className="section-spacing bg-gradient-to-r from-primary via-primary-hover to-accent text-primary-foreground">
        <div className="container-premium text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-premium">Ready to Transform Your Network?</h2>
          <p className="text-xl lg:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of alumni and students already benefiting from our government-backed platform
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/login">
              <Button variant="glass" size="xl" className="btn-premium text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Rocket className="w-5 h-5" />
                Login to Your Account
              </Button>
            </Link>
            <Link to="/login?tab=signup">
              <Button variant="outline" size="xl" className="btn-premium border-primary-foreground/30 text-primary-foreground bg-white/10">
                <Phone className="w-5 h-5" />
                Create New Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Government Initiative Badge */}
      <section className="py-16 bg-card/50 border-t border-border/50">
        <div className="container-premium">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12 text-center">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">🇮🇳</span>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-foreground text-xl text-premium">Digital India Initiative</h3>
                <p className="text-muted-foreground font-semibold">Empowering education through technology</p>
              </div>
            </div>
            <div className="text-muted-foreground font-semibold">
              Developed for Smart India Hackathon 2025 • Scalable for nationwide adoption
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;
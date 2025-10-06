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
    content: "ReconnectX helped me find my dream job through a senior alumnus. The networking opportunities are incredible!"
  }, {
    name: "Rajesh Kumar",
    role: "Startup Founder",
    institution: "NIT Trichy",
    content: "As an entrepreneur, I love giving back by posting internship opportunities. The platform makes it so easy to connect with bright students."
  }, {
    name: "Dr. Anita Desai",
    role: "Research Scientist",
    institution: "BITS Pilani",
    content: "The mentorship program through ReconnectX transformed my career path. Now I mentor 5 students every semester."
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
            
            {/* Interactive Demo Preview */}
            <div className="animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-card via-secondary/50 to-card rounded-3xl p-8 border border-border/50 shadow-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Experience the Platform</h3>
                    <p className="text-muted-foreground">See how ReconnectX transforms educational networking</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="group cursor-pointer">
                      <div className="bg-primary/10 rounded-2xl p-6 hover:bg-primary/20 transition-all duration-300 border border-primary/20">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">Connect Instantly</h4>
                        <p className="text-sm text-muted-foreground">Find alumni by company, skills, or location with advanced search filters</p>
                        <div className="mt-4 text-xs text-primary font-medium">25,000+ Active Alumni →</div>
                      </div>
                    </div>
                    
                    <div className="group cursor-pointer">
                      <div className="bg-accent/10 rounded-2xl p-6 hover:bg-accent/20 transition-all duration-300 border border-accent/20">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Briefcase className="w-6 h-6 text-accent" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">Career Growth</h4>
                        <p className="text-sm text-muted-foreground">Access exclusive job openings posted by fellow alumni</p>
                        <div className="mt-4 text-xs text-accent font-medium">5,000+ Opportunities →</div>
                      </div>
                    </div>
                    
                    <div className="group cursor-pointer">
                      <div className="bg-success/10 rounded-2xl p-6 hover:bg-success/20 transition-all duration-300 border border-success/20">
                        <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <TrendingUp className="w-6 h-6 text-success" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">Mentorship</h4>
                        <p className="text-sm text-muted-foreground">Get guidance from industry leaders in your field</p>
                        <div className="mt-4 text-xs text-success font-medium">1,000+ Mentors →</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        
        
        
      </section>

      {/* Features Section */}
      <section className="section-spacing relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-5 py-2 bg-secondary/80 border border-border/50 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 mr-2 text-primary" />
              Comprehensive Platform Features
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-premium leading-tight">
              Everything You Need in
              <span className="gradient-text block mt-2">One Powerful Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Seamlessly connect alumni, students, and institutions with cutting-edge technology 
              backed by government-grade security and reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-success opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-all duration-500"></div>
                  
                  <Card className="relative card-premium border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 h-full overflow-hidden">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardHeader className="pb-6 pt-8">
                      <div className="relative mb-6">
                        {/* Icon background glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500"></div>
                        
                        <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-border/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Icon className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-500`} />
                        </div>
                      </div>
                      
                      <CardTitle className="text-2xl text-premium text-center group-hover:gradient-text transition-all duration-300">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="text-center px-6 pb-8">
                      <CardDescription className="text-base leading-relaxed text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                      
                      {/* Subtle CTA */}
                      <div className="mt-6 flex items-center justify-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                        Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                    
                    {/* Bottom gradient accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-secondary/20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-success/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container-premium relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-5 py-2 bg-card/80 border border-border/50 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 mr-2 text-accent fill-accent" />
              Trusted by Thousands
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-premium leading-tight">
              Real Stories from Our
              <span className="gradient-text block mt-2">Thriving Community</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover how ReconnectX has transformed careers and created lasting connections
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Card className="card-premium border-border/50 bg-card/90 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 h-full relative overflow-hidden">
                  {/* Quote decoration */}
                  <div className="absolute top-6 right-6 text-6xl text-primary/5 font-serif">"</div>
                  
                  <CardContent className="pt-8 pb-8 px-8 relative z-10">
                    {/* Profile section */}
                    <div className="flex items-start mb-6">
                      <div className="relative">
                        {/* Avatar glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        
                        <div className="relative w-14 h-14 bg-gradient-to-br from-primary via-primary-hover to-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <h4 className="font-bold text-foreground text-lg text-premium mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground font-semibold mb-1">
                          {testimonial.role}
                        </p>
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          <p className="text-xs text-primary font-semibold">
                            {testimonial.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial text */}
                    <div className="relative mb-6">
                      <p className="text-muted-foreground text-base leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </div>
                    
                    {/* Star rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-accent fill-accent"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                      <span className="ml-2 text-sm font-semibold text-muted-foreground">5.0</span>
                    </div>
                  </CardContent>
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground font-semibold mb-6">Recognized by leading institutions across India</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
              {stats.slice(0, 4).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-foreground text-premium">{stat.number}</div>
                  <div className="text-xs text-muted-foreground font-semibold mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="login-section" className="section-spacing relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-hover to-accent"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/50 via-transparent to-primary/50 animate-pulse-glow"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container-premium text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm text-white">
            <Rocket className="w-4 h-4 mr-2" />
            Join the Future of Alumni Networking
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white text-premium leading-tight">
            Ready to Transform
            <span className="block mt-2">Your Network?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of alumni and students already benefiting from our government-backed platform. 
            Start building meaningful connections today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to="/login">
              <Button 
                size="xl" 
                className="btn-premium bg-white text-primary hover:bg-white/90 border-0 shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
              >
                <Rocket className="w-5 h-5" />
                Login to Your Account
              </Button>
            </Link>
            <Link to="/login?tab=signup">
              <Button 
                size="xl" 
                className="btn-premium border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-xl hover:scale-105 transition-all duration-300 font-bold"
              >
                <Phone className="w-5 h-5" />
                Create New Account
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm font-semibold">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              100% Secure
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Government Verified
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Free to Join
            </div>
          </div>
        </div>
      </section>

      {/* Government Initiative Badge */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background border-t border-border/50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
        
        <div className="container-premium relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Badge and info */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center space-x-6 mb-8 bg-card/50 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-lg">
                  <div className="relative">
                    {/* Flag glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl blur-lg opacity-50"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-4xl">🇮🇳</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-foreground text-2xl text-premium mb-2">Digital India</h3>
                    <p className="text-muted-foreground font-semibold text-sm">Initiative 2025</p>
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground text-premium mb-4 leading-tight">
                  Empowering Education Through Technology
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  A government-backed initiative designed to revolutionize alumni engagement 
                  and strengthen India's educational ecosystem.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <div className="px-5 py-3 bg-primary/10 text-primary text-sm rounded-xl font-semibold border border-primary/20 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    Government Verified
                  </div>
                  <div className="px-5 py-3 bg-success/10 text-success text-sm rounded-xl font-semibold border border-success/20 backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    Nationwide Platform
                  </div>
                </div>
              </div>
              
              {/* Right side - Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-foreground text-premium mb-2 group-hover:gradient-text transition-all duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-semibold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom tagline */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground font-semibold text-lg">
                Built for <span className="text-primary font-bold">Smart India Hackathon 2025</span> • Scalable for nationwide adoption
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;
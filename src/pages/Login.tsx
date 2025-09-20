import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Building2, Shield, ArrowRight, CheckCircle } from "lucide-react";

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("alumni");
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "signup") {
      setIsSignup(true);
    }
  }, [searchParams]);

  const handleLogin = (role: string) => {
    // Navigate to appropriate dashboard
    if (role === "alumni") {
      navigate("/dashboard/alumni");
    } else if (role === "institution" || role === "admin") {
      navigate("/dashboard/admin");
    }
  };

  const roles = [
    {
      id: "alumni",
      title: "Alumni",
      icon: Users,
      description: "Connect with your alma mater and fellow graduates",
      color: "text-primary"
    },
    {
      id: "institution",
      title: "Institution",
      icon: Building2,
      description: "Manage your alumni network and institutional data",
      color: "text-accent"
    },
    {
      id: "admin",
      title: "Admin",
      icon: Shield,
      description: "System administration and platform management",
      color: "text-success"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">AC</span>
            </div>
            <span className="text-2xl font-bold text-foreground">AlumniConnect</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">
            {isSignup ? "Join the Network" : "Welcome Back"}
          </h1>
          <p className="text-muted-foreground">
            {isSignup 
              ? "Create your account to get started" 
              : "Sign in to your account to continue"
            }
          </p>
        </div>

        <Card className="card-elevated border-0">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Button
                variant={!isSignup ? "default" : "outline"}
                onClick={() => setIsSignup(false)}
                size="sm"
              >
                Login
              </Button>
              <Button
                variant={isSignup ? "default" : "outline"}
                onClick={() => setIsSignup(true)}
                size="sm"
              >
                Sign Up
              </Button>
            </div>
            <CardDescription className="text-center">
              Role-based access ensures secure and organized data flow
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                {roles.map((role) => (
                  <TabsTrigger key={role.id} value={role.id} className="text-xs">
                    {role.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <TabsContent key={role.id} value={role.id} className="mt-6">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-3">
                          <Icon className={`w-8 h-8 ${role.color}`} />
                        </div>
                        <h3 className="font-semibold text-lg">{role.title} {isSignup ? "Registration" : "Login"}</h3>
                        <p className="text-sm text-muted-foreground">{role.description}</p>
                      </div>

                      <div className="space-y-4">
                        {isSignup && (
                          <>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="firstName">First Name</Label>
                                <Input id="firstName" placeholder="John" />
                              </div>
                              <div>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input id="lastName" placeholder="Doe" />
                              </div>
                            </div>
                          </>
                        )}

                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder={
                              role.id === "alumni" ? "your.email@domain.com" :
                              role.id === "institution" ? "admin@institution.edu" :
                              "admin@alumniconnect.gov.in"
                            }
                          />
                        </div>

                        {role.id === "institution" && (
                          <div>
                            <Label htmlFor="institutionCode">Institution Code</Label>
                            <Input 
                              id="institutionCode" 
                              placeholder="e.g., IIT001, NIT002" 
                            />
                          </div>
                        )}

                        {role.id === "admin" && (
                          <div>
                            <Label htmlFor="adminPin">Secure PIN</Label>
                            <Input 
                              id="adminPin" 
                              type="password"
                              placeholder="Enter your admin PIN" 
                            />
                          </div>
                        )}

                        <div>
                          <Label htmlFor="password">Password</Label>
                          <Input id="password" type="password" />
                        </div>

                        {isSignup && role.id === "alumni" && (
                          <>
                            <div>
                              <Label htmlFor="graduationYear">Graduation Year</Label>
                              <Input id="graduationYear" placeholder="2020" />
                            </div>
                            <div>
                              <Label htmlFor="institution">Institution</Label>
                              <Input id="institution" placeholder="e.g., IIT Delhi, NIT Trichy" />
                            </div>
                          </>
                        )}

                        <Button 
                          className="w-full" 
                          size="lg"
                          onClick={() => handleLogin(role.id)}
                        >
                          {isSignup ? "Create Account" : "Sign In"}
                          <ArrowRight className="w-4 h-4" />
                        </Button>

                        {role.id === "alumni" && (
                          <div className="text-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 inline mr-1" />
                            Your credentials will be verified with your institution
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Need help? Contact our{" "}
            <a href="#" className="text-primary hover:underline">support team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
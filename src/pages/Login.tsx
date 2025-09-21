import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Building2, Shield, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, signIn, signUp } = useAuth();
  const [activeTab, setActiveTab] = useState("alumni");
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "", 
    email: "",
    password: "",
    institutionCode: "",
    adminPin: "",
    graduationYear: "",
    institution: "",
  });

  useEffect(() => {
    // Redirect if already logged in
    if (user) {
      navigate("/dashboard/alumni");
    }

    const tab = searchParams.get("tab");
    if (tab === "signup") {
      setIsSignup(true);
    }
  }, [searchParams, user, navigate]);

  const handleSubmit = async (role: string) => {
    if (!formData.email || !formData.password) return;
    
    setLoading(true);
    
    try {
      if (isSignup) {
        const metadata = {
          first_name: formData.firstName,
          last_name: formData.lastName,
          role: role,
          institution_code: role === 'institution' ? formData.institutionCode : null,
          graduation_year: role === 'alumni' ? formData.graduationYear : null,
          institution: role === 'alumni' ? formData.institution : null,
        };
        
        const { error } = await signUp(formData.email, formData.password, metadata);
        if (!error) {
          // Success message already shown in useAuth
        }
      } else {
        const { error } = await signIn(formData.email, formData.password);
        if (!error) {
          if (role === "alumni") {
            navigate("/onboarding");
          } else {
            navigate("/dashboard/admin");
          }
        }
      }
    } finally {
      setLoading(false);
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
                                <Input 
                                  id="firstName" 
                                  placeholder="John" 
                                  value={formData.firstName}
                                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                                />
                              </div>
                              <div>
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input 
                                  id="lastName" 
                                  placeholder="Doe"
                                  value={formData.lastName}
                                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                                />
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
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          />
                          {role.id === "institution" && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Must use institutional email (.edu domain)
                            </p>
                          )}
                          {role.id === "admin" && (
                            <p className="text-xs text-muted-foreground mt-1">
                              Must use government email (.gov.in domain)
                            </p>
                          )}
                        </div>

                        {role.id === "institution" && (
                          <div>
                            <Label htmlFor="institutionCode">Institution Code</Label>
                            <Input 
                              id="institutionCode" 
                              placeholder="e.g., IIT001, NIT002"
                              value={formData.institutionCode}
                              onChange={(e) => setFormData(prev => ({ ...prev, institutionCode: e.target.value }))}
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
                              value={formData.adminPin}
                              onChange={(e) => setFormData(prev => ({ ...prev, adminPin: e.target.value }))}
                            />
                          </div>
                        )}

                        <div>
                          <Label htmlFor="password">Password</Label>
                          <Input 
                            id="password" 
                            type="password"
                            value={formData.password}
                            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                          />
                        </div>

                        {isSignup && role.id === "alumni" && (
                          <>
                            <div>
                              <Label htmlFor="graduationYear">Graduation Year</Label>
                              <Input 
                                id="graduationYear" 
                                placeholder="2020"
                                value={formData.graduationYear}
                                onChange={(e) => setFormData(prev => ({ ...prev, graduationYear: e.target.value }))}
                              />
                            </div>
                            <div>
                              <Label htmlFor="institution">Institution</Label>
                              <Input 
                                id="institution" 
                                placeholder="e.g., IIT Delhi, NIT Trichy"
                                value={formData.institution}
                                onChange={(e) => setFormData(prev => ({ ...prev, institution: e.target.value }))}
                              />
                            </div>
                          </>
                        )}

                        <Button 
                          className="w-full" 
                          size="lg"
                          onClick={() => handleSubmit(role.id)}
                          disabled={loading}
                        >
                          {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                          {isSignup ? "Create Account" : "Sign In"}
                          {!loading && <ArrowRight className="w-4 h-4" />}
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
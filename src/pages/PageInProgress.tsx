import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Wrench, Zap, Rocket } from "lucide-react";

const PageInProgress = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-6">
      <Card className="card-premium max-w-2xl w-full text-center">
        <CardHeader className="pb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <Wrench className="w-10 h-10 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold gradient-text mb-4">
            Feature In Development
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            This exciting feature is currently under construction. Our team is working hard to bring you something amazing!
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 rounded-lg bg-primary-light">
              <Zap className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-primary mb-2">High Performance</h3>
              <p className="text-sm text-muted-foreground text-center">
                Built with cutting-edge technology for optimal speed
              </p>
            </div>
            
            <div className="flex flex-col items-center p-4 rounded-lg bg-accent-light">
              <Rocket className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold text-accent mb-2">Modern Design</h3>
              <p className="text-sm text-muted-foreground text-center">
                Sleek, intuitive interface following the latest design trends
              </p>
            </div>
            
            <div className="flex flex-col items-center p-4 rounded-lg bg-success-light">
              <Wrench className="w-8 h-8 text-success mb-3" />
              <h3 className="font-semibold text-success mb-2">User-Focused</h3>
              <p className="text-sm text-muted-foreground text-center">
                Designed with your needs and feedback in mind
              </p>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
            <h4 className="font-semibold text-foreground mb-2">Coming Soon</h4>
            <p className="text-muted-foreground">
              We're putting the finishing touches on this feature. Stay tuned for updates, and thank you for your patience!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="btn-premium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
            <Button
              onClick={() => navigate("/")}
              className="btn-premium btn-glow"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PageInProgress;
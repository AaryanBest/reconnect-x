import { Navigation } from "./Navigation";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Soft Yellow Glow Background */}
      <div className="glow-background">
        <div className="absolute inset-0 z-0" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className={cn("relative z-10 pt-nav", className)}>
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-card border-t border-border mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AC</span>
                </div>
                <span className="text-xl font-bold text-foreground">AlumniConnect</span>
              </div>
              <p className="text-muted-foreground mb-4">
                A government-backed centralized platform connecting alumni, empowering students, 
                and strengthening institutions through networking, mentorship, and career opportunities.
              </p>
              <div className="flex space-x-4">
                <div className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                  Government Initiative
                </div>
                <div className="px-3 py-1 bg-success/10 text-success text-sm rounded-full font-medium">
                  Nationwide Platform
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Status</a></li>
                <li><a href="#" className="hover:text-foreground transition-smooth">Feedback</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 AlumniConnect. A Government of India Initiative.
            </p>
            <p className="text-muted-foreground text-sm mt-2 sm:mt-0">
              Built for Smart India Hackathon 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
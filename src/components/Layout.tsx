import { Navigation } from "./Navigation";
import { ProfileNavigation } from "./ProfileNavigation";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  const { user, loading } = useAuth();

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative bg-background">
      {/* Premium Background Glow */}
      <div className="glow-background">
        <div className="absolute inset-0 z-0" />
      </div>

      {/* Navigation - conditional based on auth status */}
      {user ? <ProfileNavigation /> : <Navigation />}

      {/* Main Content */}
      <main className={cn("relative z-10 pt-nav", className)}>
        <div className="min-h-[calc(100vh-4.5rem)]">
          {children}
        </div>
      </main>

      {/* Premium Footer */}
      <footer className="relative z-10 bg-card/50 border-t border-border/50 mt-24 backdrop-blur-sm">
        <div className="container-premium py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary via-primary-hover to-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-bold text-lg">RX</span>
                </div>
                <span className="text-2xl font-bold text-foreground text-premium">ReconnectX</span>
              </div>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                A government-backed centralized platform connecting alumni, empowering students, 
                and strengthening institutions through networking, mentorship, and career opportunities.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-primary-light text-primary text-sm rounded-full font-semibold border border-primary/20">
                  Government Initiative
                </div>
                <div className="px-4 py-2 bg-success-light text-success text-sm rounded-full font-semibold border border-success/20">
                  Nationwide Platform
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-foreground mb-4 text-lg">Platform</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth font-medium">About</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth font-medium">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth font-medium">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth font-medium">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-foreground mb-4 text-lg">Support</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth font-medium">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth font-medium">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth font-medium">Status</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth font-medium">Feedback</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground font-medium">
              © 2025 ReconnectX. A Government of India Initiative.
            </p>
            <p className="text-muted-foreground font-medium mt-2 sm:mt-0">
              Built for Smart India Hackathon 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
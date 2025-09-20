import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, BarChart3, Calendar, Briefcase, TrendingUp, Rocket, LogIn } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Dashboard", path: "/dashboard", icon: BarChart3 },
    { name: "Events", path: "/events", icon: Calendar },
    { name: "Jobs", path: "/jobs", icon: Briefcase },
    { name: "Analytics", path: "/analytics", icon: TrendingUp },
    { name: "Future Scope", path: "/future-scope", icon: Rocket },
  ];

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleJoinClick = () => {
    navigate("/login?tab=signup");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/90 nav-sticky transition-smooth",
        isScrolled ? "h-nav-compact shadow-lg" : "h-nav"
      )}
    >
      <div className="container mx-auto px-6">
        <div className={cn(
          "flex items-center justify-between transition-smooth",
          isScrolled ? "py-3" : "py-4"
        )}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AC</span>
            </div>
            <span className="text-xl font-bold text-foreground group-hover:gradient-text transition-smooth">
              AlumniConnect
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || 
                (item.path === "/dashboard" && location.pathname.startsWith("/dashboard"));
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth group",
                    isActive
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <Icon className={cn(
                    "w-4 h-4 transition-smooth",
                    isActive ? "text-primary" : "group-hover:text-primary"
                  )} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLoginClick}
              className="hidden sm:flex"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Button>
            <Button
              variant="cta"
              size="sm"
              onClick={handleJoinClick}
              className="animate-glow"
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
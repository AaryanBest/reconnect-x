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
        "fixed top-0 left-0 right-0 z-50 nav-premium transition-smooth",
        isScrolled && "nav-scrolled h-nav-compact"
      )}
    >
      <div className="container-premium">
        <div className={cn(
          "flex items-center justify-between transition-smooth",
          isScrolled ? "py-4" : "py-5"
        )}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary-hover to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-primary-foreground font-bold text-base">AC</span>
            </div>
            <span className="text-2xl font-bold text-foreground group-hover:gradient-text transition-smooth text-premium">
              AlumniConnect
            </span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || 
                (item.path === "/dashboard" && location.pathname.startsWith("/dashboard"));
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-smooth group relative",
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  )}
                >
                  <Icon className={cn(
                    "w-4 h-4 transition-smooth",
                    isActive ? "text-primary-foreground" : "group-hover:text-primary"
                  )} />
                  <span className="font-semibold text-sm">{item.name}</span>
                  {isActive && (
                    <div className="absolute inset-0 bg-primary rounded-xl opacity-10 animate-pulse-glow" />
                  )}
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
              className="hidden sm:flex btn-premium font-semibold"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Button>
            <Button
              variant="cta"
              size="sm"
              onClick={handleJoinClick}
              className="btn-premium btn-glow font-semibold shadow-lg"
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
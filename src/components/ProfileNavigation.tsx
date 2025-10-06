import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Home, BarChart3, Calendar, Briefcase, TrendingUp, Rocket, User, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

export const ProfileNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .maybeSingle();

    if (error) {
      console.error('Error fetching profile:', error);
    } else if (data) {
      setProfileData(data);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Dashboard", path: "/dashboard", icon: BarChart3 },
    { name: "Events", path: "/events", icon: Calendar },
    { name: "Jobs", path: "/jobs", icon: Briefcase },
    { name: "Analytics", path: "/analytics", icon: TrendingUp },
    { name: "Future Scope", path: "/future-scope", icon: Rocket },
  ];

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
              <span className="text-primary-foreground font-bold text-base">RX</span>
            </div>
            <span className="text-2xl font-bold text-foreground group-hover:gradient-text transition-smooth text-premium">
              ReconnectX
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
                  to={item.path === "/future-scope" ? "/page-in-progress" : item.path}
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

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={profileData?.avatar_url} />
                    <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white font-semibold">
                      {profileData?.first_name?.[0]}{profileData?.last_name?.[0]}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex flex-col space-y-1 p-2">
                  <p className="text-sm font-medium leading-none">
                    {profileData?.first_name} {profileData?.last_name}
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {profileData?.email}
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings")}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
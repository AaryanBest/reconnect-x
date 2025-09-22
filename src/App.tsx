import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AuthProvider } from "./hooks/useAuth";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import AlumniDashboard from "./pages/AlumniDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AlumniOnboarding from "./pages/AlumniOnboarding";
import Events from "./pages/Events";
import Jobs from "./pages/Jobs";
import FutureScope from "./pages/FutureScope";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import PageInProgress from "./pages/PageInProgress";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/onboarding" element={<AlumniOnboarding />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/dashboard/alumni" element={<AlumniDashboard />} />
              <Route path="/dashboard/admin" element={<AdminDashboard />} />
              <Route path="/dashboard" element={<AlumniDashboard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/analytics" element={<AdminDashboard />} />
              <Route path="/future-scope" element={<FutureScope />} />
              <Route path="/page-in-progress" element={<PageInProgress />} />
              <Route path="/settings" element={<PageInProgress />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

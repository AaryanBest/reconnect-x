import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Search, 
  Filter,
  Plus,
  Share2,
  Heart,
  ExternalLink,
  Ticket
} from "lucide-react";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const upcomingEvents = [
    {
      id: 1,
      title: "Alumni Tech Conference 2025",
      description: "Join us for the biggest tech conference bringing together alumni from top engineering institutions across India.",
      date: "March 22, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "India Habitat Centre, New Delhi",
      category: "conference",
      attendees: 850,
      maxAttendees: 1000,
      price: "₹2,500",
      organizer: "IIT Alumni Association",
      image: "tech-conf",
      tags: ["Technology", "Networking", "Innovation"],
      featured: true,
      registrationDeadline: "March 15, 2025"
    },
    {
      id: 2,
      title: "Startup Networking Meet",
      description: "Connect with alumni entrepreneurs, investors, and mentors. Perfect for aspiring entrepreneurs and early-stage startups.",
      date: "April 5, 2025",
      time: "2:00 PM - 8:00 PM", 
      location: "Bangalore International Centre, Bangalore",
      category: "networking",
      attendees: 245,
      maxAttendees: 300,
      price: "Free",
      organizer: "NIT Startup Network",
      image: "startup-meet",
      tags: ["Startups", "Entrepreneurship", "Investment"],
      featured: false,
      registrationDeadline: "April 1, 2025"
    },
    {
      id: 3,
      title: "Annual Alumni Gala Night",
      description: "A night of celebration, awards, and networking. Celebrating achievements of distinguished alumni with dinner and cultural performances.",
      date: "April 15, 2025",
      time: "7:00 PM - 11:00 PM",
      location: "The Taj Palace, Mumbai",
      category: "social",
      attendees: 420,
      maxAttendees: 500,
      price: "₹3,500",
      organizer: "BITS Alumni Global Network",
      image: "gala-night",
      tags: ["Celebration", "Awards", "Networking"],
      featured: true,
      registrationDeadline: "April 10, 2025"
    },
    {
      id: 4,
      title: "Women in Tech Leadership Summit",
      description: "Empowering women alumni in technology leadership roles. Panel discussions, workshops, and mentorship opportunities.",
      date: "May 12, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Hyderabad International Convention Centre",
      category: "workshop",
      attendees: 180,
      maxAttendees: 250,
      price: "₹1,500",
      organizer: "Women Alumni Network",
      image: "women-tech",
      tags: ["Leadership", "Women", "Technology"],
      featured: false,
      registrationDeadline: "May 8, 2025"
    },
    {
      id: 5,
      title: "Global Alumni Reunion",
      description: "International alumni gathering with attendees from 50+ countries. Three days of networking, cultural exchange, and collaboration.",
      date: "June 18-20, 2025",
      time: "All Day Event",
      location: "Goa Convention Centre, Goa",
      category: "reunion",
      attendees: 1200,
      maxAttendees: 1500,
      price: "₹8,500",
      organizer: "Global Alumni Council",
      image: "global-reunion",
      tags: ["International", "Reunion", "Cultural"],
      featured: true,
      registrationDeadline: "June 10, 2025"
    },
    {
      id: 6,
      title: "Career Mentorship Workshop",
      description: "Interactive workshop connecting students with alumni mentors. Resume reviews, mock interviews, and career guidance sessions.",
      date: "February 28, 2025",
      time: "1:00 PM - 6:00 PM",
      location: "Various Campuses (Hybrid)",
      category: "workshop",
      attendees: 350,
      maxAttendees: 400,
      price: "Free",
      organizer: "Career Services Network",
      image: "mentorship",
      tags: ["Mentorship", "Career", "Students"],
      featured: false,
      registrationDeadline: "February 25, 2025"
    }
  ];

  const pastEvents = [
    {
      id: 101,
      title: "Digital Innovation Summit 2024",
      date: "December 15, 2024",
      location: "Chennai",
      attendees: 750,
      category: "conference",
      rating: 4.8,
      highlights: ["AI & ML Sessions", "Startup Pitches", "Networking Dinner"]
    },
    {
      id: 102,
      title: "Alumni Sports Meet 2024",
      date: "November 10, 2024",
      location: "Pune",
      attendees: 400,
      category: "social",
      rating: 4.9,
      highlights: ["Cricket Tournament", "Football Match", "Awards Ceremony"]
    },
    {
      id: 103,
      title: "Finance & Investment Conclave",
      date: "October 22, 2024",
      location: "Mumbai",
      attendees: 300,
      category: "workshop",
      rating: 4.7,
      highlights: ["Market Analysis", "Investment Strategies", "Expert Panels"]
    }
  ];

  const categories = [
    { id: "all", name: "All Events", count: upcomingEvents.length },
    { id: "conference", name: "Conferences", count: upcomingEvents.filter(e => e.category === 'conference').length },
    { id: "networking", name: "Networking", count: upcomingEvents.filter(e => e.category === 'networking').length },
    { id: "workshop", name: "Workshops", count: upcomingEvents.filter(e => e.category === 'workshop').length },
    { id: "social", name: "Social Events", count: upcomingEvents.filter(e => e.category === 'social').length },
    { id: "reunion", name: "Reunions", count: upcomingEvents.filter(e => e.category === 'reunion').length }
  ];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Alumni Events</h1>
            <p className="text-muted-foreground">
              Connect, network, and grow with fellow alumni at exclusive events
            </p>
          </div>
          <Button variant="cta" className="mt-4 md:mt-0">
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search events by title, description, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="text-sm"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Events Tabs */}
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          {/* Featured Events */}
          {filteredEvents.filter(event => event.featured).length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {filteredEvents.filter(event => event.featured).map((event) => (
                  <Card key={event.id} className="card-elevated border-primary/20 bg-gradient-to-br from-card to-primary/5">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="text-base">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{event.attendees}/{event.maxAttendees}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {event.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <p className="font-semibold text-lg">{event.price}</p>
                          <p className="text-sm text-muted-foreground">
                            Register by {event.registrationDeadline}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                          <Button size="sm">
                            <Ticket className="w-4 h-4 mr-2" />
                            Register
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Events */}
          <div>
            <h2 className="text-2xl font-bold mb-4">All Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="card-elevated hover:border-primary/30 transition-smooth">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        variant="outline" 
                        className={
                          event.category === 'conference' ? 'border-primary text-primary' :
                          event.category === 'networking' ? 'border-accent text-accent' :
                          event.category === 'workshop' ? 'border-success text-success' :
                          event.category === 'social' ? 'border-orange-500 text-orange-500' :
                          'border-purple-500 text-purple-500'
                        }
                      >
                        {event.category}
                      </Badge>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-semibold">{event.price}</span>
                      <Button size="sm">
                        RSVP
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="card-elevated">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">Past Event</Badge>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-medium">{event.rating}</span>
                      <span className="text-accent">★</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{event.attendees} attended</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Highlights:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    View Photos & Videos
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Events;
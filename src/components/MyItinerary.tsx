import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Clock, Trash2, Edit, Share2 } from "lucide-react";

interface Itinerary {
  id: string;
  title: string;
  destination: string;
  duration: string;
  createdAt: string;
  status: "planned" | "ongoing" | "completed";
  budget: string;
  days: {
    day: number;
    date: string;
    activities: {
      time: string;
      activity: string;
      location: string;
      type: "activity" | "food" | "accommodation";
    }[];
  }[];
}

// Mock data for demonstration
const mockItineraries: Itinerary[] = [
  {
    id: "1",
    title: "3-Day Solo Trip to Himachal",
    destination: "Himachal Pradesh",
    duration: "3 days",
    createdAt: "2024-01-15",
    status: "planned",
    budget: "₹15,000",
    days: [
      {
        day: 1,
        date: "2024-02-01",
        activities: [
          { time: "9:00 AM", activity: "Arrive in Manali", location: "Manali Bus Stand", type: "activity" },
          { time: "11:00 AM", activity: "Check-in Hotel", location: "Hotel Snow Valley", type: "accommodation" },
          { time: "1:00 PM", activity: "Local Food", location: "Cafe 1947", type: "food" },
          { time: "3:00 PM", activity: "Mall Road Walk", location: "Mall Road", type: "activity" },
        ]
      },
      {
        day: 2,
        date: "2024-02-02",
        activities: [
          { time: "7:00 AM", activity: "Trekking to Jogini Falls", location: "Jogini Falls", type: "activity" },
          { time: "12:00 PM", activity: "Lunch", location: "Local Dhaba", type: "food" },
          { time: "4:00 PM", activity: "Hadimba Temple Visit", location: "Hadimba Temple", type: "activity" },
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Weekend Gateway to Goa",
    destination: "Goa",
    duration: "2 days",
    createdAt: "2024-01-10",
    status: "completed",
    budget: "₹8,000",
    days: [
      {
        day: 1,
        date: "2024-01-20",
        activities: [
          { time: "10:00 AM", activity: "Beach Time", location: "Baga Beach", type: "activity" },
          { time: "1:00 PM", activity: "Seafood Lunch", location: "Fisherman's Wharf", type: "food" },
          { time: "7:00 PM", activity: "Sunset at Anjuna", location: "Anjuna Beach", type: "activity" },
        ]
      }
    ]
  }
];

const MyItinerary = () => {
  const [itineraries] = useState<Itinerary[]>(mockItineraries);
  const [selectedItinerary, setSelectedItinerary] = useState<Itinerary | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "planned": return "bg-blue-100 text-blue-800";
      case "ongoing": return "bg-green-100 text-green-800";
      case "completed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "food": return "🍽️";
      case "accommodation": return "🏨";
      default: return "📍";
    }
  };

  if (selectedItinerary) {
    return (
      <div className="flex-1 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setSelectedItinerary(null)}
            className="mb-4"
          >
            ← Back to All Itineraries
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">{selectedItinerary.title}</h1>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {selectedItinerary.destination}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {selectedItinerary.duration}
              </div>
              <Badge className={getStatusColor(selectedItinerary.status)}>
                {selectedItinerary.status}
              </Badge>
            </div>
          </div>

          {/* Day-wise Breakdown */}
          <div className="space-y-6">
            {selectedItinerary.days.map((day) => (
              <Card key={day.day} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {day.day}
                    </span>
                    Day {day.day} - {day.date}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {day.activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-2 min-w-[80px]">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{activity.time}</span>
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{getActivityIcon(activity.type)}</span>
                            <span className="font-medium">{activity.activity}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {activity.location}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">My Itineraries</h1>
        <p className="text-muted-foreground">
          Manage your planned, ongoing, and completed trips
        </p>
      </div>

      {itineraries.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <div className="space-y-4">
              <div className="text-6xl">🗺️</div>
              <h3 className="text-xl font-semibold">No itineraries yet</h3>
              <p className="text-muted-foreground">
                Start planning your first trip to see your itineraries here
              </p>
              <Button className="mt-4">Plan Your First Trip</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {itineraries.map((itinerary) => (
            <Card key={itinerary.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {itinerary.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {itinerary.destination}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(itinerary.status)}>
                    {itinerary.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {itinerary.duration}
                    </div>
                    <span className="font-medium text-primary">{itinerary.budget}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedItinerary(itinerary)}
                      className="flex-1 mr-2"
                    >
                      View Details
                    </Button>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyItinerary;
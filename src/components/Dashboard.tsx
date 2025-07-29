import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, Search, Plane, Clock, MapPin, Star } from "lucide-react";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isPlanning, setIsPlanning] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);

  const handlePlanTrip = async () => {
    if (!searchQuery.trim()) return;
    
    setIsPlanning(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsPlanning(false);
    setShowItinerary(true);
  };

  const sampleItinerary = [
    {
      day: 1,
      title: "Arrival & Local Exploration",
      activities: [
        { time: "Morning", activity: "Check-in at Mountain View Resort", location: "Manali", icon: "🏨" },
        { time: "Afternoon", activity: "Explore Mall Road & Local Markets", location: "Manali", icon: "🛍️" },
        { time: "Evening", activity: "Sunset at Solang Valley", location: "Solang Valley", icon: "🌅" }
      ]
    },
    {
      day: 2,
      title: "Adventure & Trekking",
      activities: [
        { time: "Morning", activity: "Beas Kund Trek Start", location: "Solang Valley", icon: "🥾" },
        { time: "Afternoon", activity: "Mountain Lunch & Photography", location: "Beas Kund", icon: "📸" },
        { time: "Evening", activity: "Local Himachali Dinner", location: "Manali", icon: "🍽️" }
      ]
    },
    {
      day: 3,
      title: "Culture & Departure",
      activities: [
        { time: "Morning", activity: "Visit Hadimba Temple", location: "Manali", icon: "🏛️" },
        { time: "Afternoon", activity: "Local Food Tour", location: "Old Manali", icon: "🥘" },
        { time: "Evening", activity: "Departure to Delhi", location: "Manali Bus Stand", icon: "🚌" }
      ]
    }
  ];

  return (
    <div className="flex-1 p-6 space-y-6 sky-gradient min-h-screen">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-travel-gradient bg-clip-text text-transparent">
              Plan Your Perfect
            </span>
            <br />
            <span className="text-primary">Adventure</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let AI create personalized travel itineraries with local insights, 
            budget-friendly options, and hidden gems just for you.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Input
              placeholder="Plan my 3-day solo trip to Himachal with trekking and budget food"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 pl-12 pr-20 text-base bg-white/90 backdrop-blur-sm border-white/30 shadow-travel"
              onKeyPress={(e) => e.key === 'Enter' && handlePlanTrip()}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="h-10 w-10 hover:bg-primary/10"
                title="Voice Input"
              >
                <Mic className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <Button
            onClick={handlePlanTrip}
            disabled={!searchQuery.trim() || isPlanning}
            variant="travel"
            size="lg"
            className="mt-4"
          >
            {isPlanning ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                Planning Your Trip...
              </>
            ) : (
              <>
                <Plane className="h-5 w-5" />
                Plan My Trip
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Quick Suggestions */}
      {!showItinerary && (
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Popular Trip Ideas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Weekend Goa Beach", duration: "2 days", type: "Beach", icon: "🏖️" },
              { title: "Himalayan Trek", duration: "5 days", type: "Adventure", icon: "⛰️" },
              { title: "Rajasthan Heritage", duration: "7 days", type: "Culture", icon: "🏰" }
            ].map((trip, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-travel travel-transition hover:scale-105 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">{trip.icon}</div>
                  <h3 className="font-semibold mb-1">{trip.title}</h3>
                  <p className="text-sm text-muted-foreground">{trip.duration} • {trip.type}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Generated Itinerary */}
      {showItinerary && (
        <div className="max-w-4xl mx-auto animate-fade-in-card">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Your Himachal Adventure</h2>
            <p className="text-muted-foreground">3 days of trekking, culture, and budget-friendly experiences</p>
          </div>

          <div className="space-y-6">
            {sampleItinerary.map((day, dayIndex) => (
              <Card key={dayIndex} className="bg-white/90 backdrop-blur-sm shadow-travel">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-travel-gradient rounded-full flex items-center justify-center text-white font-bold">
                      {day.day}
                    </div>
                    <div>
                      <h3 className="text-xl">Day {day.day}</h3>
                      <p className="text-sm text-muted-foreground font-normal">{day.title}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {day.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="flex items-center gap-4 p-4 bg-card-gradient rounded-lg">
                        <div className="text-2xl">{activity.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="font-medium text-primary">{activity.time}</span>
                          </div>
                          <h4 className="font-semibold">{activity.activity}</h4>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {activity.location}
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Star className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button variant="travel" size="lg">
              <MapPin className="h-5 w-5" />
              View on Map
            </Button>
            <Button variant="outline" size="lg">
              Save Itinerary
            </Button>
            <Button variant="accent" size="lg">
              Share Trip
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
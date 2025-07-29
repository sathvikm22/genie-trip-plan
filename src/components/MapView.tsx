import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Layers, Satellite, Map as MapIcon } from "lucide-react";

const MapView = () => {
  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Explore on Map</h1>
          <p className="text-muted-foreground">Interactive travel planning with real-time insights</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Satellite className="h-4 w-4" />
            Satellite
          </Button>
          <Button variant="outline" size="sm">
            <Layers className="h-4 w-4" />
            Terrain
          </Button>
          <Button variant="travel" size="sm">
            <MapIcon className="h-4 w-4" />
            Standard
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-12rem)]">
        {/* Map Controls */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Map Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Navigation className="h-4 w-4" />
                Find My Location
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="h-4 w-4" />
                Add Waypoint
              </Button>
              <Button variant="travel" className="w-full justify-start">
                <Navigation className="h-4 w-4" />
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Nearby Places</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Manali Bus Stand", type: "Transport", distance: "0.5 km" },
                { name: "Mall Road", type: "Shopping", distance: "0.8 km" },
                { name: "Hadimba Temple", type: "Culture", distance: "2.1 km" },
                { name: "Solang Valley", type: "Adventure", distance: "14 km" }
              ].map((place, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-card-gradient rounded-lg">
                  <div>
                    <h4 className="font-medium text-sm">{place.name}</h4>
                    <p className="text-xs text-muted-foreground">{place.type}</p>
                  </div>
                  <span className="text-xs text-primary font-medium">{place.distance}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Map Container */}
        <div className="lg:col-span-3">
          <Card className="h-full bg-white/90 backdrop-blur-sm shadow-travel">
            <CardContent className="p-0 h-full">
              <div className="h-full bg-sky-gradient rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Placeholder Map */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200">
                  <div className="absolute inset-0 opacity-20 bg-white/5"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-travel-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <MapIcon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-6 max-w-md">
                    Google Maps integration coming soon. Explore destinations, 
                    find routes, and discover hidden gems.
                  </p>
                  
                  {/* Sample map markers */}
                  <div className="absolute top-1/4 left-1/3 animate-bounce">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-1/4 animate-bounce delay-300">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-1/3 left-1/2 animate-bounce delay-700">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <MapPin className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MapView;
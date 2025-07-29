import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, MapPin, Check, Heart, Plane } from "lucide-react";

const Globe3D = () => {
  const visitedPlaces = [
    { name: "Paris, France", coordinates: [48.8566, 2.3522], category: "Culture" },
    { name: "Tokyo, Japan", coordinates: [35.6762, 139.6503], category: "Urban" },
    { name: "Bali, Indonesia", coordinates: [-8.3405, 115.0920], category: "Beach" },
  ];

  const wishlistPlaces = [
    { name: "Santorini, Greece", coordinates: [36.3932, 25.4615], category: "Beach" },
    { name: "Machu Picchu, Peru", coordinates: [-13.1631, -72.5450], category: "Adventure" },
    { name: "Iceland", coordinates: [64.9631, -19.0208], category: "Nature" },
  ];

  return (
    <div className="h-full p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">3D Globe Explorer</h1>
          <p className="text-muted-foreground">Track your travels and explore the world in 3D</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="travel" size="sm">
            <Plane className="h-4 w-4" />
            Plan Route
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-12rem)]">
        {/* Travel Stats */}
        <div className="space-y-4">
          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Travel Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{visitedPlaces.length}</div>
                <p className="text-sm text-muted-foreground">Countries Visited</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{wishlistPlaces.length}</div>
                <p className="text-sm text-muted-foreground">Wishlist Places</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                Visited Places
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {visitedPlaces.map((place, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <div>
                    <h4 className="font-medium text-sm">{place.name}</h4>
                    <Badge variant="secondary" className="text-xs">{place.category}</Badge>
                  </div>
                  <Check className="h-4 w-4 text-green-500" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                Wishlist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {wishlistPlaces.map((place, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                  <div>
                    <h4 className="font-medium text-sm">{place.name}</h4>
                    <Badge variant="secondary" className="text-xs">{place.category}</Badge>
                  </div>
                  <Heart className="h-4 w-4 text-red-500" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 3D Globe Container */}
        <div className="lg:col-span-3">
          <Card className="h-full bg-white/90 backdrop-blur-sm shadow-travel">
            <CardContent className="p-0 h-full">
              <div className="h-full bg-gradient-to-br from-blue-900 via-purple-900 to-black rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Starfield background */}
                <div className="absolute inset-0">
                  {[...Array(50)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  ))}
                </div>
                
                {/* 3D Globe placeholder */}
                <div className="relative z-10 text-center">
                  <div className="relative">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl animate-pulse-glow">
                      <Globe className="h-32 w-32 text-white animate-float" />
                      
                      {/* Visited markers */}
                      <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-green-500 rounded-full shadow-lg animate-pulse">
                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                      </div>
                      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-green-500 rounded-full shadow-lg animate-pulse">
                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                      </div>
                      
                      {/* Wishlist markers */}
                      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-red-500 rounded-full shadow-lg animate-bounce">
                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
                      </div>
                      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full shadow-lg animate-bounce">
                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Interactive 3D Globe</h3>
                  <p className="text-white/80 mb-6 max-w-md">
                    CesiumJS integration coming soon. Visualize your travel journey 
                    with stunning 3D earth rendering.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button variant="glass" size="sm">
                      <MapPin className="h-4 w-4" />
                      Mark as Visited
                    </Button>
                    <Button variant="glass" size="sm">
                      <Heart className="h-4 w-4" />
                      Add to Wishlist
                    </Button>
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

export default Globe3D;
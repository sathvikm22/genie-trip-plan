import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  MapPin, 
  Calendar, 
  Map, 
  Globe, 
  Languages, 
  Settings,
  X
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const sidebarItems = [
  { id: "planner", label: "Trip Planner", icon: MapPin },
  { id: "itinerary", label: "My Itinerary", icon: Calendar },
  { id: "map", label: "Explore on Map", icon: Map },
  { id: "globe", label: "3D Globe", icon: Globe },
  { id: "languages", label: "Languages", icon: Languages },
  { id: "settings", label: "Settings", icon: Settings },
];

const Sidebar = ({ isOpen, onClose, activeTab, onTabChange }: SidebarProps) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white/90 backdrop-blur-lg border-r border-white/20 z-50 travel-shadow transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close button for mobile */}
        <div className="p-4 flex justify-between items-center lg:hidden">
          <h2 className="font-semibold text-lg">Navigation</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation items */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-12 text-left travel-transition",
                  isActive 
                    ? "bg-travel-gradient text-white shadow-travel" 
                    : "hover:bg-primary/5 hover:text-primary"
                )}
                onClick={() => {
                  onTabChange(item.id);
                  if (window.innerWidth < 1024) onClose();
                }}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Button>
            );
          })}
        </nav>

        {/* Bottom section with travel tips */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-card-gradient rounded-lg p-4 card-shadow">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">✨</span>
              <h3 className="font-medium text-sm">Travel Tip</h3>
            </div>
            <p className="text-xs text-muted-foreground">
              Use voice input to quickly plan your trip in any language!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
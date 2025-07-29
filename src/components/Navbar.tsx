import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Globe, User, Menu, X } from "lucide-react";

interface NavbarProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Navbar = ({ onMenuToggle, isMenuOpen }: NavbarProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "it", name: "Italiano" },
    { code: "pt", name: "Português" },
    { code: "ja", name: "日本語" },
    { code: "ko", name: "한국어" },
    { code: "zh", name: "中文" },
    { code: "hi", name: "हिंदी" },
  ];

  return (
    <nav className="h-16 bg-white/80 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50 travel-shadow">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between max-w-7xl mx-auto">
        {/* Left side - Logo and menu toggle */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuToggle}
            className="lg:hidden hover:bg-primary/10"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧳</span>
            <div>
              <h1 className="text-xl font-bold bg-travel-gradient bg-clip-text text-transparent">
                AI MAP GENIE
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Your Personal Travel Companion
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Language selector, My Trips, User avatar */}
        <div className="flex items-center gap-3">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden sm:flex gap-2">
                <Globe className="h-4 w-4" />
                <span className="hidden md:inline">{selectedLanguage}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white border-white/20 shadow-travel">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.name)}
                  className="cursor-pointer hover:bg-primary/5"
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* My Trips Button */}
          <Button variant="outline" size="sm" className="hidden md:flex">
            My Trips
          </Button>

          {/* User Avatar */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <div className="w-8 h-8 bg-travel-gradient rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-white border-white/20 shadow-travel">
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/5">
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/5">
                Travel Preferences
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/5">
                Saved Places
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-primary/5 text-destructive">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
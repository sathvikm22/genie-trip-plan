import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import MapView from "@/components/MapView";
import Globe3D from "@/components/Globe3D";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("planner");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "planner":
      case "itinerary":
        return <Dashboard />;
      case "map":
        return <MapView />;
      case "globe":
        return <Globe3D />;
      case "languages":
        return (
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🌐</div>
              <h1 className="text-3xl font-bold mb-2">Language Settings</h1>
              <p className="text-muted-foreground">Multilingual support coming soon</p>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="flex-1 p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">⚙️</div>
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-muted-foreground">Customize your travel preferences</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-sky-gradient">
      <Navbar onMenuToggle={toggleSidebar} isMenuOpen={isSidebarOpen} />
      
      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        <main className="flex-1 lg:ml-0">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;

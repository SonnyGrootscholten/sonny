import { SlideOutMenu } from "@/components/SlideOutMenu";
import { SearchBar } from "@/components/SearchBar";
import sonnyPortrait from "@/assets/sonny-portrait.jpg";
import sonnyLogo from "@/assets/sonny-logo.svg";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      <SearchBar />
      
      {/* Main Content Container */}
      <main className="flex flex-col items-center justify-center flex-1 w-full px-8 py-20">
        {/* Hero Portrait */}
        <div className="relative max-w-2xl w-full mb-16 animate-fade-in">
          <img
            src={sonnyPortrait}
            alt="SONNY"
            className="w-full h-auto object-contain"
            style={{ 
              maxHeight: "70vh",
              opacity: 0,
              animation: "fadeIn 1.2s ease-out forwards"
            }}
          />
        </div>

        {/* SONNY Logo - Bottom Center */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-end">
          <img 
            src={sonnyLogo} 
            alt="SONNY" 
            className="h-12 w-auto"
          />
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Index;

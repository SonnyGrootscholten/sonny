import { SlideOutMenu } from "@/components/SlideOutMenu";
import { SearchBar } from "@/components/SearchBar";
import sonnyPortrait from "@/assets/sonny-portrait.jpg";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";
import carousel5 from "@/assets/carousel-5.jpg";
import carousel6 from "@/assets/carousel-6.jpg";
import carousel7 from "@/assets/carousel-7.jpg";
import sonnyLogo from "@/assets/sonny-logo.png";

const Index = () => {
  const images = [
    sonnyPortrait,
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
    carousel7,
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <SlideOutMenu />
      <SearchBar />
      
      {/* Scrollable Photo Carousel */}
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {images.map((image, index) => (
          <section
            key={index}
            className="h-screen w-full snap-start snap-always flex items-center justify-center px-8"
          >
            <img
              src={image}
              alt="SONNY"
              className="w-full h-auto object-contain"
              style={{
                maxHeight: "70vh",
                opacity: 0,
                animation: "fadeIn 1.2s ease-out forwards"
              }}
            />
          </section>
        ))}
      </main>

      {/* SONNY Logo - Bottom Center */}
      <div className="fixed left-1/2 -translate-x-1/2 pointer-events-none" style={{
        bottom: "32px",
        zIndex: 50
      }}>
        <img 
          src={sonnyLogo} 
          alt="SONNY" 
          className="h-16 w-auto"
          style={{ display: "block" }}
        />
      </div>

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

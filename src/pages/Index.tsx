import { SlideOutMenu } from "@/components/SlideOutMenu";
import { SearchBar } from "@/components/SearchBar";
import { useEffect, useState, useRef } from "react";
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

  const [scrollProgress, setScrollProgress] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const scrollTop = mainRef.current.scrollTop;
        const scrollHeight = mainRef.current.scrollHeight - mainRef.current.clientHeight;
        const progress = scrollTop / scrollHeight;
        setScrollProgress(progress);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, []);


  const getImageOpacity = (index: number) => {
    const totalImages = images.length;
    const scrollPerImage = 1 / totalImages;
    const imageStart = index * scrollPerImage;
    const imageEnd = (index + 1) * scrollPerImage;
    const fadeZone = 0.15;

    if (scrollProgress < imageStart - fadeZone) return 0;
    if (scrollProgress > imageEnd + fadeZone) return 0;
    if (scrollProgress < imageStart) {
      return (scrollProgress - (imageStart - fadeZone)) / fadeZone;
    }
    if (scrollProgress > imageEnd) {
      return 1 - (scrollProgress - imageEnd) / fadeZone;
    }
    return 1;
  };

  const getImageScale = (index: number) => {
    const totalImages = images.length;
    const scrollPerImage = 1 / totalImages;
    const imageCenter = (index + 0.5) * scrollPerImage;
    const distance = Math.abs(scrollProgress - imageCenter);
    const scale = 1 - distance * 0.15;
    return Math.max(0.85, Math.min(1.05, scale));
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <SlideOutMenu />
      <SearchBar />
      
      {/* Layered Flowing Carousel */}
      <main ref={mainRef} className="h-screen overflow-y-scroll scroll-smooth">
        {/* Scroll trigger sections */}
        <div className="relative">
          {images.map((_, index) => (
            <div key={`trigger-${index}`} className="h-screen w-full" />
          ))}
        </div>
        
        {/* Fixed overlay images */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
          {images.map((image, index) => {
            const opacity = getImageOpacity(index);
            const scale = getImageScale(index);
            const parallaxSpeed = 0.5 + (index % 3) * 0.2;
            const yOffset = scrollProgress * parallaxSpeed * 200;
            const zIndex = images.length - Math.abs(Math.floor(scrollProgress * images.length) - index);

            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center px-8 transition-all duration-500 pointer-events-auto"
                style={{
                  opacity,
                  zIndex,
                  pointerEvents: opacity > 0.3 ? 'auto' : 'none'
                }}
              >
                <div
                  className="relative w-full h-full flex items-center justify-center group cursor-pointer"
                  style={{
                    transform: `translateY(${yOffset}px) scale(${scale})`,
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <img
                    src={image}
                    alt="SONNY"
                    className="w-full h-auto object-contain transition-all duration-700 ease-out group-hover:scale-105"
                    style={{
                      maxHeight: "75vh",
                      filter: `brightness(${0.9 + opacity * 0.1}) contrast(${1 + opacity * 0.05})`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* SONNY Logo - Bottom Center */}
      <div className="fixed left-1/2 -translate-x-1/2 pointer-events-none" style={{
        bottom: "32px",
        zIndex: 9999
      }}>
        <img 
          src={sonnyLogo} 
          alt="SONNY" 
          className="h-16 w-auto"
          style={{ display: "block" }}
        />
      </div>

      <style>{`
        main {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        main::-webkit-scrollbar {
          width: 0;
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Index;

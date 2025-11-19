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
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const mainRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLElement | null)[]>([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleImages((prev) => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(index);
            } else {
              newSet.delete(index);
            }
            return newSet;
          });
        });
      },
      {
        root: mainRef.current,
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getParallaxOffset = (index: number) => {
    const baseSpeed = 0.3;
    const speedVariation = (index % 3) * 0.15;
    return scrollProgress * (baseSpeed + speedVariation) * 100;
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <SlideOutMenu />
      <SearchBar />
      
      {/* Scrollable Photo Carousel */}
      <main ref={mainRef} className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {images.map((image, index) => (
          <section
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            data-index={index}
            className="h-screen w-full snap-start snap-always flex items-center justify-center px-8"
          >
            <img
              src={image}
              alt="SONNY"
              className="w-full h-auto object-contain"
              style={{
                maxHeight: "70vh",
                opacity: visibleImages.has(index) ? 1 : 0.3,
                transform: `translateY(${getParallaxOffset(index)}px)`,
                transition: "opacity 0.8s ease-out, transform 0.1s linear"
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
        
        main {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        section {
          transition: opacity 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Index;

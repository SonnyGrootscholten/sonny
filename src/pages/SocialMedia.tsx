import { SlideOutMenu } from "@/components/SlideOutMenu";

const SocialMedia = () => {
  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start justify-center flex-1 w-full px-8 py-20 max-w-2xl">
        {/* Instagram Section */}
        <section className="mb-12">
          <a 
            href="https://www.instagram.com/sonny/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-normal tracking-tight text-foreground hover:opacity-50 transition-opacity duration-luxury"
          >
            INSTAGRAM
          </a>
        </section>
      </main>
    </div>
  );
};

export default SocialMedia;

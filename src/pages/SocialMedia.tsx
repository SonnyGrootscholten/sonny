import { SlideOutMenu } from "@/components/SlideOutMenu";

const SocialMedia = () => {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start flex-1 w-full px-8 py-20 max-w-2xl">
        {/* Header */}
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-tight text-black mb-1 uppercase">
            SOCIAL MEDIA
          </h2>
        </section>

        {/* Social Media Links */}
        <section className="mb-8 space-y-4">
          <div>
            <a 
              href="https://music.apple.com/nl/artist/sonny/1848925614" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury uppercase"
            >
              APPLE MUSIC
            </a>
          </div>
          <div>
            <a 
              href="https://open.spotify.com/artist/1VjCBOU41mHsqh6cH3VeIJ?si=lp9uV1VOTuyGbezIalo45w" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury uppercase"
            >
              SPOTIFY
            </a>
          </div>
          <div>
            <a 
              href="#" 
              className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury uppercase"
            >
              YOUTUBE
            </a>
          </div>
          <div>
            <a 
              href="https://www.instagram.com/sonny/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury uppercase"
            >
              INSTAGRAM
            </a>
          </div>
        </section>

        {/* Copyright */}
        <footer className="mt-auto pb-8">
          <p className="text-sm font-normal tracking-tight text-black uppercase">
            ©SONNY 2O26. ALL RIGHTS RESERVED
          </p>
        </footer>
      </main>
    </div>
  );
};

export default SocialMedia;

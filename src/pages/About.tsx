import { SlideOutMenu } from "@/components/SlideOutMenu";

const About = () => {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start flex-1 w-full px-8 py-20 max-w-2xl">
        {/* Header */}
        <section className="mb-8">
          <h2 className="text-sm font-bold text-black mb-1 uppercase">
            ABOUT
          </h2>
        </section>

        <div className="space-y-6">
          <p className="text-sm font-normal tracking-tight text-black leading-relaxed uppercase">
            Originating from the Netherlands, Sonny represents a new generation of artists redefining the boundaries of modern dance music. Emerging from a country that shaped the global electronic scene, he channels its legacy through a deeply personal lens — merging design, architecture, and emotion into a singular artistic vision.
          </p>

          <p className="text-sm font-normal tracking-tight text-black leading-relaxed uppercase">
            Sonny co-wrote and produced the official soundtrack for the Heineken × UEFA Champions League "Ibiza Final" commercial, uniting global branding with his distinctive sound. In 2024, he co-wrote and co-produced Gravity by Martin Garrix & Sem Vox featuring Jaimes — a record that premiered at Ultra Music Festival before its worldwide release on STMPD RCRDS. The track marked a defining moment in his career as both a songwriter and producer, establishing him as one of the most forward-thinking creative voices in contemporary electronic music.
          </p>

          <p className="text-sm font-normal tracking-tight text-black leading-relaxed uppercase">
            Influenced by visionaries such as Rick Owens, Martin Margiela, Cristóbal Balenciaga, Ray and Charles Eames, Arne Jacobsen, and Verner Panton, Sonny draws from their shared sense of avant-garde minimalism and modernist design — translating those principles into music defined by structure, emotion, and spatial depth.
          </p>

          <p className="text-sm font-normal tracking-tight text-black leading-relaxed uppercase">
            From intimate clubs to vast festival arenas, Sonny's performances embody a rare blend of precision and emotion, captivating audiences around the world. As his journey unfolds, he continues to push his creative limits — shaping a sound and live experience that evolve with each new chapter.
          </p>
        </div>

        {/* Copyright */}
        <footer className="fixed bottom-8 right-8">
          <p className="text-xs font-normal tracking-tight text-black uppercase">
            ©SONNY 2O26. ALL RIGHTS RESERVED
          </p>
        </footer>
      </main>
    </div>
  );
};

export default About;

import { SlideOutMenu } from "@/components/SlideOutMenu";
import gravityArtwork from "@/assets/gravity-artwork.jpg";
import heinekenArtwork from "@/assets/heineken-artwork.png";
import thirdpartyArtwork from "@/assets/thirdparty-artwork.jpg";
const MusicCredits = () => {
  return <div className="relative min-h-screen bg-white flex flex-col items-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start flex-1 w-full px-8 py-20 max-w-2xl">
        {/* Credits Section */}
        <section className="mb-8">
          <h2 className="text-sm font-bold text-black mb-1 uppercase">
            CREDITS
          </h2>
        </section>

        {/* Song Credits */}
        <section className="mb-8">
          <div className="flex gap-6 items-start">
            <img src={gravityArtwork} alt="Gravity artwork" className="w-32 h-32 object-cover flex-shrink-0" />
            <div>
              <h3 className="text-sm font-bold tracking-tight text-black mb-1 uppercase">
                MARTIN GARRIX & SEM VOX FEAT. JAIMES - GRAVITY
              </h3>
              <div className="space-y-0.5">
                <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                  CO-WRITER
                </p>
                <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                  CO-PRODUCER
                </p>
                <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                  STMPD RCRDS (2024)
                </p>
                <a href="https://STMPD.com/Gravity" target="_blank" rel="noopener noreferrer" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury inline-block mt-2 uppercase">
                  LISTEN
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex gap-6 items-start">
            <img src={heinekenArtwork} alt="Heineken Ibiza Final artwork" className="w-32 h-32 object-cover flex-shrink-0" />
            <div>
              <h3 className="text-sm font-bold tracking-tight text-black mb-1 uppercase">
                HEINEKEN × UEFA CHAMPIONS LEAGUE "IBIZA FINAL"         
              </h3>
              <div className="space-y-0.5">
                <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                  CO-WRITER
                </p>
                <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                  PRODUCER
                </p>
                <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                  HEINEKEN / UEFA (2015)         
                </p>
                <a href="https://www.youtube.com/watch?v=9Ge7a0n5ZXM" target="_blank" rel="noopener noreferrer" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury inline-block mt-2 uppercase">
                  LISTEN
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex gap-6 items-start">
            <img src={thirdpartyArtwork} alt="Third Party & Sem Vox - Never Let You Go artwork" className="w-32 h-32 object-cover flex-shrink-0" />
            <div>
              <h3 className="text-sm font-bold tracking-tight text-black mb-1 uppercase">
                THIRD PARTY & SEM VOX – NEVER LET YOU GO
              </h3>
              <div className="space-y-0.5">
                <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                  CO-WRITER
                </p>
                <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                  CO-PRODUCER
                </p>
                <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                  DLDK MUSIC / ARMADA MUSIC (2016)
                </p>
                <a href="https://www.youtube.com/watch?v=haO0ftO1TZI" target="_blank" rel="noopener noreferrer" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury inline-block mt-2 uppercase">
                  LISTEN
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <footer className="mt-auto pb-8 w-full">
          <p className="text-xs font-normal tracking-tight text-black uppercase text-right">
            ©SONNY 2O26. ALL RIGHTS RESERVED
          </p>
        </footer>
      </main>
    </div>;
};
export default MusicCredits;
import { SlideOutMenu } from "@/components/SlideOutMenu";

const MusicCredits = () => {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start flex-1 w-full px-8 py-20 max-w-2xl">
        {/* Credits Section */}
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-tight text-black mb-1 uppercase">
            CREDITS
          </h2>
          <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
            PRODUCTION, COLLABORATIONS & SONGWRITING
          </p>
        </section>

        {/* Song Credits */}
        <section className="mb-8">
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
              RELEASED ON STMPD RCRDS (2024)
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-sm font-bold tracking-tight text-black mb-1 uppercase">
            HEINEKEN × UEFA CHAMPIONS LEAGUE "IBIZA FINAL" COMMERCIAL
          </h3>
          <div className="space-y-0.5">
            <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
              CO-WRITER
            </p>
            <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
              PRODUCER
            </p>
            <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
              OFFICIAL SOUNDTRACK
            </p>
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

export default MusicCredits;

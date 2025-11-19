import { SlideOutMenu } from "@/components/SlideOutMenu";
const Live = () => {
  return <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start flex-1 w-full px-8 py-20 max-w-2xl">
        {/* Header */}
        <section className="mb-8">
          <h2 className="text-sm font-bold text-black mb-1 uppercase">
            LIVE
          </h2>
        </section>

        {/* Tour Dates Section */}
        <section className="mb-8 w-full space-y-6">
          {/* Tour Date Entry */}
          <div className="flex justify-between items-start border-b border-black/10 pb-4">
            <div>
              <p className="text-sm font-bold text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                AMSTERDAM, NL
              </p>
            </div>
            <a href="#" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury uppercase">
              INFO
            </a>
          </div>

          <div className="flex justify-between items-start border-b border-black/10 pb-4">
            <div>
              <p className="text-sm font-bold text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                LONDON, UK
              </p>
            </div>
            <a href="#" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury uppercase">
              INFO
            </a>
          </div>

          <div className="flex justify-between items-start border-b border-black/10 pb-4">
            <div>
              <p className="text-sm font-bold text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                TOKYO, JP 
              </p>
            </div>
            <a href="#" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury uppercase">
              INFO
            </a>
          </div>

          <div className="flex justify-between items-start border-b border-black/10 pb-4">
            <div>
              <p className="text-sm font-bold text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                NEW YORK, US
              </p>
            </div>
            <a href="#" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury uppercase">
              INFO
            </a>
          </div>

          <div className="flex justify-between items-start border-b border-black/10 pb-4">
            <div>
              <p className="text-sm font-bold text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                IBIZA, ES
              </p>
            </div>
            <a href="#" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury uppercase">
              INFO
            </a>
          </div>

          <div className="flex justify-between items-start border-b border-black/10 pb-4">
            <div>
              <p className="text-sm font-bold text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                IBIZA, ES
              </p>
            </div>
            <a href="#" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury uppercase">
              INFO
            </a>
          </div>

          <div className="flex justify-between items-start border-b border-black/10 pb-4">
            <div>
              <p className="text-sm font-bold text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                TBA
              </p>
              <p className="text-sm font-normal tracking-tight text-black leading-tight uppercase">
                OSLO, NO
              </p>
            </div>
            <a href="#" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury uppercase">
              INFO
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
    </div>;
};
export default Live;
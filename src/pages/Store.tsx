import { SlideOutMenu } from "@/components/SlideOutMenu";

const Store = () => {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start justify-center flex-1 w-full px-8 py-20 max-w-2xl">
        <p className="text-sm font-normal tracking-tight text-black leading-relaxed uppercase">
          COMING SOON.
        </p>

        {/* Copyright */}
        <footer className="mt-auto pt-12">
          <p className="text-sm font-normal tracking-tight text-black uppercase">
            ©SONNY 2O26. ALL RIGHTS RESERVED
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Store;

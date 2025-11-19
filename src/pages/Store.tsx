import { SlideOutMenu } from "@/components/SlideOutMenu";

const Store = () => {
  return (
    <div className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start justify-center flex-1 w-full px-8 py-20 max-w-2xl">
        <p className="text-sm font-normal tracking-tight text-foreground leading-relaxed uppercase">
          COMING SOON.
        </p>
      </main>
    </div>
  );
};

export default Store;

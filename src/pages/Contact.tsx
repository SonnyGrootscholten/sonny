import { SlideOutMenu } from "@/components/SlideOutMenu";
const Contact = () => {
  return <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start flex-1 w-full px-8 py-20 max-w-2xl">
        {/* Commercial Section */}
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-tight text-black mb-1 uppercase">
            CONTACT
          </h2>
          <h3 className="text-sm font-bold tracking-tight text-black mb-1 uppercase">
            GENERAL
          </h3>
          <p className="text-sm font-normal tracking-tight text-black leading-tight">
            FOR ALL GENERAL ENQUIRIES
          </p>
          <p className="text-sm font-normal tracking-tight text-black leading-tight">
            PLEASE CONTACT    
          </p>
          <a href="mailto:commercial@sonnyworld.com" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury">
            CONTACT@SONNYWORLD.COM
          </a>
        </section>

        {/* Press Section */}
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-tight text-black mb-1 uppercase">
            PRESS
          </h2>
          <a href="mailto:press@sonnyworld.com" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury">
            PRESS@SONNYWORLD.COM
          </a>
        </section>

        {/* Human Resources Section */}
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-tight text-black mb-1 uppercase">MANAGEMENT</h2>
          <a href="mailto:hr@sonnyworld.com" className="text-sm font-normal tracking-tight text-black hover:opacity-50 transition-opacity duration-luxury">
            MANAGEMENT@SONNYWORLD.COM
          </a>
        </section>

        {/* Customer Care Section */}
        
        {/* Copyright */}
        <footer className="mt-auto pb-8">
          <p className="text-sm font-normal tracking-tight text-black uppercase">
            ©SONNY 2O26. ALL RIGHTS RESERVED
          </p>
        </footer>
      </main>
    </div>;
};
export default Contact;
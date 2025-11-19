import { SlideOutMenu } from "@/components/SlideOutMenu";
const Contact = () => {
  return <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start justify-center flex-1 w-full px-8 py-20 max-w-2xl">
        {/* Commercial Section */}
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-wide text-black mb-0.5">
            CONTACT
          </h2>
          <p className="text-sm font-normal tracking-wide text-black leading-tight mb-0">
            FOR ALL GENERAL ENQUIRIES
          </p>
          <p className="text-sm font-normal tracking-wide text-black leading-tight mb-0">
            PLEASE CONTACT    
          </p>
          <a href="mailto:commercial@sonnyworld.com" className="text-sm font-normal tracking-wide text-black hover:opacity-50 transition-opacity duration-luxury">
            CONTACT@SONNYWORLD.COM
          </a>
        </section>

        {/* Press Section */}
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-wide text-black mb-0.5">
            PRESS
          </h2>
          <a href="mailto:press@sonnyworld.com" className="text-sm font-normal tracking-wide text-black hover:opacity-50 transition-opacity duration-luxury">
            PRESS@SONNYWORLD.COM
          </a>
        </section>

        {/* Human Resources Section */}
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-wide text-black mb-0.5">MANAGEMENT</h2>
          <a href="mailto:hr@sonnyworld.com" className="text-sm font-normal tracking-wide text-black hover:opacity-50 transition-opacity duration-luxury">
            MANAGEMENT@SONNYWORLD.COM
          </a>
        </section>

        {/* Customer Care Section */}
        
      </main>
    </div>;
};
export default Contact;
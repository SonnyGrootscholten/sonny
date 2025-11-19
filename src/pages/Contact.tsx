import { SlideOutMenu } from "@/components/SlideOutMenu";
const Contact = () => {
  return <div className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start justify-center flex-1 w-full px-8 py-20 max-w-2xl">
        {/* General Inquiries Section */}
        <section className="mb-12">
          <h2 className="text-sm font-bold tracking-ultra text-foreground mb-3">
            GENERAL INQUIRIES
          </h2>
          <p className="text-sm font-light tracking-wide text-foreground leading-relaxed mb-1">
            FOR ALL PARTNERSHIP ENQUIRIES
          </p>
          <p className="text-sm font-light tracking-wide text-foreground leading-relaxed mb-1">
            PLEASE CONTACT US AT
          </p>
          <a href="mailto:contact@sonnyworld.com" className="text-sm font-light tracking-wide text-foreground hover:opacity-50 transition-opacity duration-luxury">
            CONTACT@SONNYWORLD.COM
          </a>
        </section>

        {/* Press Section */}
        <section className="mb-12">
          <h2 className="text-sm font-bold tracking-ultra text-foreground mb-3">
            PRESS
          </h2>
          <a href="mailto:press@sonnyworld.com" className="text-sm font-light tracking-wide text-foreground hover:opacity-50 transition-opacity duration-luxury">
            PRESS@SONNYWORLD.COM
          </a>
        </section>

        {/* Management Section */}
        <section className="mb-12">
          <h2 className="text-sm font-bold tracking-ultra text-foreground mb-3">
            MANAGEMENT
          </h2>
          <a href="mailto:management@sonnyworld.com" className="text-sm font-light tracking-wide text-foreground hover:opacity-50 transition-opacity duration-luxury">
            MANAGEMENT@SONNYWORLD.COM
          </a>
        </section>

        {/* Socials Section */}
        <section className="mb-12">
          <h2 className="text-sm font-bold tracking-ultra text-foreground mb-3">
            SOCIALS
          </h2>
          <p className="text-sm font-light tracking-wide text-foreground leading-relaxed mb-1">
            FOR ALL ENQUIRIES
          </p>
          <a href="https://instagram.com/sonny" target="_blank" rel="noopener noreferrer" className="text-sm font-light tracking-wide text-foreground hover:opacity-50 transition-opacity duration-luxury">
            INSTAGRAM.COM/SONNY
          </a>
        </section>
      </main>
    </div>;
};
export default Contact;
import { SlideOutMenu } from "@/components/SlideOutMenu";
const Contact = () => {
  return <div className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-start justify-center flex-1 w-full px-8 py-20 max-w-2xl">
        {/* Commercial Section */}
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-wide text-foreground mb-0.5">
            COMMERCIAL
          </h2>
          <p className="text-sm font-normal tracking-wide text-foreground leading-tight mb-0">
            FOR ALL DISTRIBUTION ENQUIRIES
          </p>
          <p className="text-sm font-normal tracking-wide text-foreground leading-tight mb-0">
            PLEASE CONTACT LUCA RUGGERI
          </p>
          <a href="mailto:commercial@sonnyworld.com" className="text-sm font-normal tracking-wide text-foreground hover:opacity-50 transition-opacity duration-luxury">
            COMMERCIAL@SONNYWORLD.COM
          </a>
        </section>

        {/* Press Section */}
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-wide text-foreground mb-0.5">
            PRESS
          </h2>
          <a href="mailto:press@sonnyworld.com" className="text-sm font-normal tracking-wide text-foreground hover:opacity-50 transition-opacity duration-luxury">
            PRESS@SONNYWORLD.COM
          </a>
        </section>

        {/* Human Resources Section */}
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-wide text-foreground mb-0.5">
            HUMAN RESOURCES
          </h2>
          <a href="mailto:hr@sonnyworld.com" className="text-sm font-normal tracking-wide text-foreground hover:opacity-50 transition-opacity duration-luxury">
            HR@SONNYWORLD.COM
          </a>
        </section>

        {/* Customer Care Section */}
        <section className="mb-8">
          <h2 className="text-sm font-bold tracking-wide text-foreground mb-0.5">
            CUSTOMER CARE
          </h2>
          <p className="text-sm font-normal tracking-wide text-foreground leading-tight mb-0">
            FOR ALL ENQUIRIES
          </p>
          <p className="text-sm font-normal tracking-wide text-foreground leading-tight mb-0">
            PLEASE CONTACT
          </p>
          <a href="mailto:customercare@sonnyworld.com" className="text-sm font-normal tracking-wide text-foreground hover:opacity-50 transition-opacity duration-luxury block">
            CUSTOMERCARE@SONNYWORLD.COM
          </a>
          <p className="text-sm font-normal tracking-wide text-foreground leading-tight mb-0">
            TEL +39 340 7132057
          </p>
          <p className="text-sm font-normal tracking-wide text-foreground leading-tight mb-0">
            MONDAY TO FRIDAY
          </p>
          <p className="text-sm font-normal tracking-wide text-foreground leading-tight">
            FROM 9:00 A.M. TO 6.00 P.M.
          </p>
        </section>
      </main>
    </div>;
};
export default Contact;
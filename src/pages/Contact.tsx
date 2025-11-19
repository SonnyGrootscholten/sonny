import { SlideOutMenu } from "@/components/SlideOutMenu";
const Contact = () => {
  return <div className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      
      <main className="flex flex-col items-center justify-center flex-1 w-full px-8 py-20 max-w-4xl">
        {/* General Inquiries Section */}
        <section className="mb-16 text-center">
          <h2 className="text-xl font-extralight tracking-ultra text-foreground mb-8">
            GENERAL INQUIRIES
          </h2>
          <p className="text-sm font-extralight tracking-wide text-foreground mb-4 leading-relaxed">
            FOR PARTNERSHIPS, PRESS, OR OTHER PROFESSIONAL MATTERS,<br />
            PLEASE CONTACT US AT
          </p>
          <a href="mailto:contact@sonnyworld.com" className="text-sm font-extralight tracking-wide text-foreground hover:opacity-50 transition-opacity duration-luxury">
            CONTACT@SONNYWORLD.COM
          </a>
        </section>

        {/* Socials Section */}
        <section className="text-center">
          
          
        </section>
      </main>
    </div>;
};
export default Contact;
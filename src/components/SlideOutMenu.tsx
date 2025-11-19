import { useState } from "react";
import { X } from "lucide-react";

const menuItems = [
  { label: "MUSIC", href: "#music" },
  { label: "LIVE", href: "#live" },
  { label: "STORE", href: "#store" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export const SlideOutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button - Fixed Left */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 left-8 z-40 px-6 py-3 border border-foreground bg-background text-foreground text-xs tracking-ultra uppercase transition-all duration-luxury hover:bg-foreground hover:text-background"
        aria-label="Open menu"
      >
        MENU
      </button>

      {/* Slide-out Panel */}
      <div
        className={`fixed inset-y-0 left-0 w-80 bg-background z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 p-2 text-foreground hover:opacity-50 transition-opacity duration-luxury"
          aria-label="Close menu"
        >
          <X size={24} strokeWidth={1} />
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col justify-center h-full px-12 space-y-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-extralight tracking-ultra text-foreground hover:opacity-50 transition-opacity duration-luxury"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-40 transition-opacity duration-luxury"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

const menuItems = [
  { label: "HOME", href: "/", isExternal: true },
  { label: "MUSIC", href: "#music", isExternal: false },
  { label: "LIVE", href: "/live", isExternal: true },
  { label: "STORE", href: "/store", isExternal: true },
  { label: "ABOUT", href: "/about", isExternal: true },
  { label: "SOCIAL MEDIA", href: "/social-media", isExternal: true },
  { label: "CONTACT", href: "/contact", isExternal: true },
];

export const SlideOutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <>
      {/* Menu Button - Fixed Left */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 left-8 z-40 px-4 py-2 border border-white bg-black text-white text-xs tracking-ultra uppercase transition-all duration-luxury hover:opacity-80"
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
        <nav className="flex flex-col pt-24 px-12 space-y-3">
          {menuItems.map((item) => (
            item.isExternal ? (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm tracking-tight text-foreground hover:opacity-50 transition-opacity duration-luxury ${
                  isActive(item.href) ? "font-bold" : "font-normal"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-normal tracking-tight text-foreground hover:opacity-50 transition-opacity duration-luxury"
              >
                {item.label}
              </a>
            )
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

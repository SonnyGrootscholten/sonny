import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";

const menuItems = [
  { label: "HOME", href: "/", isExternal: true },
  { 
    label: "MUSIC", 
    href: "#music", 
    isExternal: false,
    submenu: [
      { label: "SONNY", href: "/music/sonny" },
      { label: "CREDITS", href: "/music/credits" }
    ]
  },
  { label: "LIVE", href: "/live", isExternal: true },
  { label: "STORE", href: "/store", isExternal: true },
  { label: "SIGN UP", href: "/signup", isExternal: true },
  { label: "ABOUT", href: "/about", isExternal: true },
  { label: "SOCIAL MEDIA", href: "/social-media", isExternal: true },
  { label: "CONTACT", href: "/contact", isExternal: true },
];

export const SlideOutMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [musicSubmenuOpen, setMusicSubmenuOpen] = useState(false);
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
        className="fixed top-8 left-8 z-40 px-4 py-2 border border-white bg-black text-white text-[0.81rem] tracking-ultra uppercase font-bold transition-all duration-luxury hover:opacity-80"
        aria-label="Open menu"
      >
        MENU
      </button>

      {/* Slide-out Panel */}
      <div
        className={`fixed inset-y-0 left-0 w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 p-2 text-black hover:opacity-50 transition-opacity duration-luxury"
          aria-label="Close menu"
        >
          <X size={24} strokeWidth={1} />
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col pt-24 px-12 space-y-2">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.isExternal ? (
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm tracking-wide text-black hover:opacity-50 transition-opacity duration-luxury ${
                    isActive(item.href) ? "font-bold" : "font-normal"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => setMusicSubmenuOpen(!musicSubmenuOpen)}
                    className="text-sm font-normal tracking-wide text-black hover:opacity-50 transition-opacity duration-luxury text-left w-full"
                  >
                    {item.label}
                  </button>
                  
                  {musicSubmenuOpen && item.submenu && (
                    <div className="flex flex-col mt-2 ml-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-normal tracking-wide text-black hover:opacity-50 transition-opacity duration-luxury"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
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

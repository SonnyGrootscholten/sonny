import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";

interface SearchResult {
  page: string;
  title: string;
  snippet: string;
  path: string;
}

// Content from all pages for searching
const pageContent = [
  {
    page: "HOME",
    title: "Home",
    path: "/",
    content: "SONNY music artist performer landing page"
  },
  {
    page: "ABOUT",
    title: "About",
    path: "/about",
    content: "Originating from the Netherlands, Sonny represents a new generation of artists redefining the boundaries of modern dance music. Emerging from a country that shaped the global electronic scene, he channels its legacy through a deeply personal lens — merging design, architecture, and emotion into a singular artistic vision. Sonny co-wrote and produced the official soundtrack for the Heineken × UEFA Champions League Ibiza Final commercial, uniting global branding with his distinctive sound. In 2024, he co-wrote and co-produced Gravity by Martin Garrix & Sem Vox featuring Jaimes — a record that premiered at Ultra Music Festival before its worldwide release on STMPD RCRDS. The track marked a defining moment in his career as both a songwriter and producer, establishing him as one of the most forward-thinking creative voices in contemporary electronic music. Influenced by visionaries such as Rick Owens, Martin Margiela, Cristóbal Balenciaga, Ray and Charles Eames, Arne Jacobsen, and Verner Panton, Sonny draws from their shared sense of avant-garde minimalism and modernist design — translating those principles into music defined by structure, emotion, and spatial depth. From intimate clubs to vast festival arenas, Sonny's performances embody a rare blend of precision and emotion, captivating audiences around the world. As his journey unfolds, he continues to push his creative limits — shaping a sound and live experience that evolve with each new chapter."
  },
  {
    page: "CONTACT",
    title: "Contact",
    path: "/contact",
    content: "Commercial distribution enquiries Luca Ruggeri commercial@sonnyworld.com Press press@sonnyworld.com Human Resources hr@sonnyworld.com Customer Care customercare@sonnyworld.com Tel +39 340 7132057 Monday to Friday from 9:00 A.M. to 6.00 P.M."
  },
  {
    page: "SOCIAL MEDIA",
    title: "Social Media",
    path: "/social-media",
    content: "Instagram social media links"
  },
  {
    page: "LIVE",
    title: "Live",
    path: "/live",
    content: "Live performances coming soon"
  },
  {
    page: "STORE",
    title: "Store",
    path: "/store",
    content: "Store merchandise coming soon"
  }
];

export const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
        if (!searchQuery) setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const searchResults = pageContent
        .filter(page => page.content.toLowerCase().includes(query))
        .map(page => {
          const index = page.content.toLowerCase().indexOf(query);
          const start = Math.max(0, index - 40);
          const end = Math.min(page.content.length, index + query.length + 40);
          let snippet = page.content.substring(start, end);
          
          if (start > 0) snippet = "..." + snippet;
          if (end < page.content.length) snippet = snippet + "...";
          
          return {
            page: page.page,
            title: page.title,
            snippet,
            path: page.path
          };
        });
      
      setResults(searchResults);
      setShowResults(searchResults.length > 0);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  const handleClear = () => {
    setSearchQuery("");
    setResults([]);
    setShowResults(false);
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-40" ref={searchRef}>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            placeholder=""
            className={`bg-transparent border-b border-black text-black text-xs tracking-wide placeholder:text-black/50 focus:outline-none transition-all duration-500 font-normal ${
              isExpanded ? "w-64" : "w-32"
            }`}
            style={{ 
              paddingBottom: "0.25rem",
              fontFamily: "'Work Sans', sans-serif"
            }}
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={handleClear}
              className="text-black hover:opacity-50 transition-opacity duration-luxury"
              aria-label="Clear search"
            >
              <X size={16} strokeWidth={1} />
            </button>
          ) : (
            <button
              type="button"
              className="text-black hover:opacity-50 transition-opacity duration-luxury"
              aria-label="Search"
            >
              <Search size={16} strokeWidth={1} />
            </button>
          )}
        </div>

        {/* Search Results Dropdown */}
        {showResults && results.length > 0 && (
          <div className="bg-white border border-black shadow-lg w-80 max-h-96 overflow-y-auto">
            {results.map((result, index) => (
              <Link
                key={index}
                to={result.path}
                onClick={() => {
                  setSearchQuery("");
                  setShowResults(false);
                  setIsExpanded(false);
                }}
                className="block px-4 py-3 hover:bg-black/5 transition-colors border-b border-black/10 last:border-b-0"
              >
                <div className="text-xs font-bold tracking-wide text-black mb-1">
                  {result.page}
                </div>
                <div className="text-xs font-normal tracking-tight text-black/70 leading-relaxed uppercase">
                  {result.snippet}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

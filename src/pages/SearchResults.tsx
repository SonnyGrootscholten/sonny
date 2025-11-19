import { SlideOutMenu } from "@/components/SlideOutMenu";
import { SearchBar } from "@/components/SearchBar";
import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface SearchResult {
  page: string;
  title: string;
  snippet: string;
  path: string;
}

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

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query.trim()) {
      const searchQuery = query.toLowerCase();
      const searchResults = pageContent
        .filter(page => page.content.toLowerCase().includes(searchQuery))
        .map(page => {
          const index = page.content.toLowerCase().indexOf(searchQuery);
          const start = Math.max(0, index - 60);
          const end = Math.min(page.content.length, index + query.length + 60);
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
    }
  }, [query]);

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
      <SlideOutMenu />
      <SearchBar />
      
      <main className="flex flex-col items-start justify-center flex-1 w-full px-8 py-20 max-w-2xl">
        <h1 className="text-sm font-bold tracking-wide text-black mb-8 uppercase">
          SEARCH RESULTS FOR "{query}"
        </h1>

        {results.length > 0 ? (
          <div className="w-full space-y-6">
            {results.map((result, index) => (
              <Link
                key={index}
                to={result.path}
                className="block group"
              >
                <div className="text-sm font-bold tracking-wide text-black mb-1 group-hover:opacity-50 transition-opacity duration-luxury">
                  {result.page}
                </div>
                <div className="text-sm font-normal tracking-tight text-black/70 leading-relaxed uppercase">
                  {result.snippet}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm font-normal tracking-tight text-black leading-relaxed uppercase">
            NO RESULTS FOUND FOR "{query}"
          </p>
        )}
      </main>
    </div>
  );
};

export default SearchResults;

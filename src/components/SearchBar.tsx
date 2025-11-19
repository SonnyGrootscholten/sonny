import { useState } from "react";
import { Search } from "lucide-react";

export const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Search functionality - for now just log
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => {
            if (!searchQuery) setIsExpanded(false);
          }}
          placeholder=""
          className={`bg-transparent border-b border-foreground text-foreground text-xs tracking-wide placeholder:text-foreground/50 focus:outline-none transition-all duration-500 ${
            isExpanded ? "w-64" : "w-32"
          }`}
          style={{ paddingBottom: "0.25rem" }}
        />
        <button
          type="submit"
          className="text-foreground hover:opacity-50 transition-opacity duration-luxury"
          aria-label="Search"
        >
          <Search size={16} strokeWidth={1} />
        </button>
      </form>
    </div>
  );
};

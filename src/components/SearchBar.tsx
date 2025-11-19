import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
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
          className={`bg-transparent border-b border-black text-black text-xs tracking-wide placeholder:text-black/50 focus:outline-none transition-all duration-500 font-normal normal-case ${
            isExpanded ? "w-64" : "w-32"
          }`}
          style={{ 
            paddingBottom: "0.25rem",
            fontFamily: "'Work Sans', sans-serif"
          }}
        />
        <button
          type="submit"
          className="text-black hover:opacity-50 transition-opacity duration-luxury"
          aria-label="Search"
        >
          <Search size={16} strokeWidth={1} />
        </button>
      </form>
    </div>
  );
};

import { useState, useMemo } from "react";
import destinations from "./data/destinations.js";
import DestinationCard from "./components/DestinationCard.jsx";

function App() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return destinations;
    if (filter === "Budget Friendly") return destinations.filter((d) => d.budget < 50000);
    return destinations.filter((d) => d.budget >= 50000);
  }, [filter]);

  const filters = ["All", "Budget Friendly", "Luxury Trip"];

  return (
    <div className="min-h-screen">
      <header className="bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="font-mono text-xs tracking-[0.3em] text-paper/60 uppercase mb-4">
            Boarding Pass — Class: Wanderer
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] font-semibold">
            Travel Destinations
            <br />
            <span className="italic text-coral">Explorer</span>
          </h1>
          <p className="font-body text-paper/70 max-w-md mt-6 text-base md:text-lg">
            Nine stamped-and-catalogued getaways, sorted by season and spend —
            pick your route, check the fare, go.
          </p>
          <div className="flex flex-wrap gap-6 mt-10 font-mono text-xs text-paper/60 border-t border-paper/20 pt-6">
            <span>DESTINATIONS&nbsp; {String(destinations.length).padStart(2, "0")}</span>
            <span>GATE&nbsp; A7</span>
            <span>STATUS&nbsp; ON TIME</span>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap gap-3 -mt-6 relative z-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                filter === f
                  ? "bg-coral text-paper border-coral"
                  : "bg-paper text-ink border-ink/20 hover:border-coral hover:text-coral"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink-soft font-mono text-sm py-16">
            No destinations match this fare class.
          </p>
        )}
      </main>

      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-2 font-mono text-xs text-ink-soft">
          <span>Travel Destinations Explorer — built with React &amp; Tailwind CSS</span>
          <span>Badge rule: budget &lt; 50,000 → Budget Friendly · else → Luxury Trip</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
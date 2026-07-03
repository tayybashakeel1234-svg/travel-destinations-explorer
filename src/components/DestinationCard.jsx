const seasonMark = {
  Summer: "☀",
  Winter: "❄",
  Spring: "❀",
  Autumn: "🍂",
};

function DestinationCard({ placeName, country, budget, duration, season }) {
  const isBudgetFriendly = budget < 50000;
  const badgeLabel = isBudgetFriendly ? "Budget Friendly" : "Luxury Trip";
  const badgeColor = isBudgetFriendly ? "text-teal border-teal" : "text-gold border-gold";
  const initials = country.slice(0, 2).toUpperCase();

  return (
    <article className="card-lift bg-paper border border-ink/15 rounded-sm overflow-hidden relative">

      <div className="h-36 relative bg-ink flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: isBudgetFriendly
              ? "linear-gradient(135deg, #1F6F6B 0%, #182545 100%)"
              : "linear-gradient(135deg, #C89B3C 0%, #182545 100%)",
          }}
        />
        <span className="relative text-paper/90 font-display text-4xl">
          {seasonMark[season] || "✈"}
        </span>

        <div
          className={`stamp absolute -bottom-5 right-4 w-16 h-16 flex items-center justify-center bg-paper/95 ${badgeColor} font-mono text-[10px] tracking-widest -rotate-12 shadow-sm`}
        >
          <div className="text-center leading-tight">
            <div className="font-semibold">{initials}</div>
            <div className="opacity-70">{season.toUpperCase()}</div>
          </div>
        </div>
      </div>

      <div className="perforation" />

      <div className="p-5 pt-6">
        <h3 className="font-display text-xl font-semibold leading-snug text-ink">
          {placeName}
        </h3>
        <p className="font-mono text-[11px] tracking-wide text-ink-soft uppercase mt-1">
          {country}
        </p>

        <div className="flex items-center gap-4 mt-4 text-sm text-ink-soft font-mono">
          <span>{duration}</span>
          <span className="w-1 h-1 rounded-full bg-line" />
          <span>PKR {budget.toLocaleString()}</span>
        </div>

        <div
          className={`inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-full border text-xs font-semibold ${badgeColor}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {badgeLabel}
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
export default function LeaguesPage() {
  const leagues = [
    "Premier League",
    "La Liga",
    "Serie A",
    "Bundesliga",
    "Ligue 1",
    "MLS",
    "Libertadores",
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Leagues</h1>

      <ul className="mt-4 list-disc ml-6">
        {leagues.map((league) => (
          <li key={league}>{league}</li>
        ))}
      </ul>
    </div>
  );
}

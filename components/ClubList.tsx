type Club = {
  id: number;
  name: string;
  league: string;
  country: string;
  founded: number;
};

export default function ClubList({ clubs }: { clubs: Club[] }) {
  if (!clubs) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {clubs.map((club) => (
        <div key={club.id} className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-bold">{club.name}</h2>
          <p>League: {club.league}</p>
          <p>Country: {club.country}</p>
          <p>Founded: {club.founded}</p>
        </div>
      ))}
    </div>
  );
}

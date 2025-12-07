import { Club } from "@/types/club";

async function getClubs(): Promise<Club[]> {
  const res = await fetch("/data/clubs.json");
  return res.json();
}

export default async function ClubDetails({ params }: { params: { id: string } }) {
  const clubs = await getClubs();
  const club = clubs.find((c) => c.id === Number(params.id));

  if (!club) return <p>Club not found.</p>;

  return (
    <div>
      <h1>{club.name}</h1>
      <p>Founded: {club.founded}</p>
      <p>League: {club.league}</p>
      <p>Country: {club.country}</p>
      <p>Trophies: {club.trophies}</p>
    </div>
  );
}

import { Club } from "@/types/club";
import fs from "fs";
import path from "path";

function getClubs(): Club[] {
  const filePath = path.join(process.cwd(), "public", "data", "clubs.json");
  const file = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(file);

  return Array.isArray(json.clubs) ? json.clubs : [];
}

export default function ClubDetails({
  params,
}: {
  params: { id: string };
}) {
  const clubs = getClubs();
  const club = clubs.find((c) => c.id === Number(params.id));

  if (!club) {
    return <p>Club not found.</p>;
  }

  return (
    <div>
      <h1>{club.name}</h1>
      <p>
        <strong>League:</strong> {club.league}
      </p>
      <p>
        <strong>Country:</strong> {club.country}
      </p>
      <p>
        <strong>Founded:</strong> {club.founded}
      </p>
    </div>
  );
}

"use client";

import clubsJson from "@/public/data/clubs.json";
import ClubList from "@/components/ClubList";

export default function LeagueDetailsPage({ params }: { params: { league: string } }) {
  const leagueName = decodeURIComponent(params.league);

  const filteredClubs = clubsJson.clubs.filter(
    (club) => club.league === leagueName
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>{leagueName}</h1>

      {filteredClubs.length === 0 ? (
        <p>No clubs found for this league.</p>
      ) : (
        <ClubList clubs={filteredClubs} />
      )}
    </div>
  );
}

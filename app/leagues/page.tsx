"use client";

import clubsJson from "@/public/data/clubs.json";
import LeagueCard from "@/components/LeagueCard";
import styles from "./LeaguePage.module.css";

export default function LeaguesPage() {
  const clubs = clubsJson.clubs || [];

  const leagueCounts: Record<string, number> = clubs.reduce((acc: any, club: any) => {
    const leagueName = club.league || "Unknown";
    acc[leagueName] = (acc[leagueName] || 0) + 1;
    return acc;
  }, {});

  const leagueList = Object.keys(leagueCounts).map((leagueName) => ({
    name: leagueName,
    count: leagueCounts[leagueName],
  }));

  return (
    <div className={styles.container}>
      <h1>Leagues</h1>

      <div className={styles.grid}>
        {leagueList.map((league) => (
          <LeagueCard
            key={league.name}
            name={league.name}
            count={league.count}
            link={`/leagues/${league.name}`}
          />
        ))}
      </div>
    </div>
  );
}

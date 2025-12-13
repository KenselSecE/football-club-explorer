"use client";

import { useEffect, useState } from "react";
import { Club } from "@/types/club";
import ClubList from "@/components/ClubList";

export default function ClubsPage() {
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    async function loadClubs() {
      const res = await fetch("/data/clubs.json", { cache: "no-store" });
      const json = await res.json();

      if (Array.isArray(json.clubs)) {
        setClubs(json.clubs);
      } else {
        console.error("Invalid clubs.json structure:", json);
      }
    }

    loadClubs();
  }, []);

  return (
    <div>
      <h1>Clubs</h1>
      <ClubList clubs={clubs} />
    </div>
  );
}

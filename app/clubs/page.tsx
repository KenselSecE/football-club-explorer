"use client";

import { useEffect, useState } from "react";
import ClubList from "../../components/ClubList";

type Club = {
  id: number;
  name: string;
  league: string;
  country: string;
  founded: number;
};

export default function ClubsPage() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/data/clubs.json");
      const data = await res.json();
      setClubs(data.clubs);
    }
    loadData();
  }, []);

  const filteredClubs =
    filter.trim() === ""
      ? clubs
      : clubs.filter((c) =>
          c.league.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div>
      <h1 className="text-2xl font-bold">Clubs</h1>

      <input
        className="mt-4 p-2 border rounded"
        placeholder="Filter by league…"
        onChange={(e) => setFilter(e.target.value)}
      />

      <ClubList clubs={filteredClubs} /> 
      
    </div>
  );
}
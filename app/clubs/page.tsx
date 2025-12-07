"use client";

import { useState, useEffect } from "react";
import { Club } from "@/types/club";
import ClubList from "@/components/ClubList";

export default function ClubsPage() {
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    fetch("/clubs.json") // ← YA NO EXISTE /data/
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data.clubs)) {
          setClubs(data.clubs);
        } else {
          console.error("Invalid JSON:", data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Clubs</h1>
      <ClubList clubs={clubs} />
    </div>
  );
}

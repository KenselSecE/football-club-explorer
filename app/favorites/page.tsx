"use client";

import { useEffect, useState, useCallback } from "react";
import ClubList from "@/components/ClubList";
import { Club } from "@/types/club";

const getFavoriteIdsFromStorage = (): number[] => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : []; 
};

export default function FavoritesPage() {
  const [favoriteClubs, setFavoriteClubs] = useState<Club[]>([]);

  const loadFavorites = useCallback(async () => {
    const favoriteIds = getFavoriteIdsFromStorage();
    try {
        const res = await fetch("/data/clubs.json");
        const json = await res.json();
        const filtered = json.clubs.filter((club: Club) =>
            favoriteIds.includes(club.id)
        );
        setFavoriteClubs(filtered);
    } catch (error) {
        console.error("Error loading favorite clubs:", error);
    }
  }, []);

  const handleUpdateList = useCallback(() => {
    loadFavorites(); 
    window.dispatchEvent(new Event("favoritesUpdated"));
  }, [loadFavorites]); 

  useEffect(() => {
    loadFavorites();
    const handleStorageChange = () => { loadFavorites(); };
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("favoritesUpdated", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("favoritesUpdated", handleStorageChange);
    };
  }, [loadFavorites]);

  return (
    <div>
      <h1>My Favorite Clubs</h1>
      {favoriteClubs.length === 0 ? (
        <p>You have no favorite clubs yet.</p>
      ) : (
        <ClubList 
          clubs={favoriteClubs} 
          onUpdateList={handleUpdateList} 
        />
      )}
    </div>
  );
}
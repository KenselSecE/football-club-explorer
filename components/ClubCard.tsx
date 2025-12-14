// ClubCard.tsx CORREGIDO

"use client";

import { Club } from "@/types/club";
import styles from "./ClubCard.module.css";

// Definimos la nueva interfaz para las props
interface ClubCardProps {
    club: Club;
    // Recibimos la función de recarga del padre
    onUpdateList: () => void; 
}

// Recibimos la nueva prop onUpdateList
export default function ClubCard({ club, onUpdateList }: ClubCardProps) {
  function toggleFavorite() {
    const stored = localStorage.getItem("favorites");
    const favorites: number[] = stored ? JSON.parse(stored) : [];

    const updatedFavorites = favorites.includes(club.id)
      ? favorites.filter((id) => id !== club.id)
      : [...favorites, club.id];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // 🔴 ESTO RESUELVE EL PROBLEMA:
    // Después de actualizar localStorage, notificamos a FavoritesPage
    // para que recargue la lista de clubes.
    onUpdateList(); 
  }

  return (
    <div className={styles.card}>
      <h2>{club.name}</h2>
      <p><strong>League:</strong> {club.league}</p>
      <p><strong>Country:</strong> {club.country}</p>
      <p><strong>Founded:</strong> {club.founded}</p>

      <a href={`/clubs/${club.id}`} className={styles.button}>
        View Details
      </a>

      <button
       onClick={toggleFavorite}
        className={styles.favoriteButton}
      title="Click again to remove from favorites"
      >
      ❤️ Add / Remove Favorite
    </button>
    </div>
  );
}
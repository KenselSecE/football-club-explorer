import Link from "next/link";
import { Club } from "@/types/club";
import styles from "./ClubCard.module.css";

export default function ClubCard({ club }: { club: Club }) {
  return (
    <div className={styles.card}>
      <h2>{club.name}</h2>

      <p>
        <strong>League:</strong> {club.league}
      </p>
      <p>
        <strong>Country:</strong> {club.country}
      </p>
      <p>
        <strong>Founded:</strong> {club.founded}
      </p>

      <Link href={`/clubs/${club.id}`} className={styles.button}>
        View Details
      </Link>
    </div>
  );
}

import ClubCard from "./ClubCard";
import { Club } from "@/types/club";
import styles from "./ClubList.module.css";

export default function ClubList({ clubs }: { clubs: Club[] }) {
  return (
    <div className={styles.grid}>
      {clubs.map((club) => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  );
}

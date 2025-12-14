import ClubCard from "./ClubCard";
import { Club } from "@/types/club";
import styles from "./ClubList.module.css";

interface ClubListProps {
  clubs: Club[];
  onUpdateList: () => void; 
}

export default function ClubList({ clubs, onUpdateList }: ClubListProps) {
  return (
    <div className={styles.grid}>
      {clubs.map((club) => (
        <ClubCard 
            key={club.id} 
            club={club} 
            onUpdateList={onUpdateList}
        />
      ))}
    </div>
  );
}
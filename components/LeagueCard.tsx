import styles from "./LeagueCard.module.css";

export default function LeagueCard({ name, count, link }: { name: string; count: number; link: string }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.leagueName}>{name}</h2>
      <p className={styles.count}>{count} clubs</p>

      <a href={link} className={styles.button}>
        View More
      </a>
    </div>
  );
}

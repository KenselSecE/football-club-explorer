import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Link className={styles.link} href="/">Home</Link>
        <Link className={styles.link} href="/clubs">Clubs</Link>
        <Link className={styles.link} href="/leagues">Leagues</Link>
        <Link className={styles.link} href="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

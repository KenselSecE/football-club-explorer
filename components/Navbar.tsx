import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FCE</div>

      <div className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/clubs">Clubs</Link>
        <Link href="/leagues">Leagues</Link>
      </div>
    </nav>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/logo.fce.png"
          alt="Football Club Explorer Logo"
          width={70}
          height={70}
        />
      </Link>

      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/clubs">Clubs</Link>
        <Link href="/leagues">Leagues</Link>
        <Link href="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

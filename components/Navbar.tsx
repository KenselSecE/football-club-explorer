"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex gap-6">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/leagues" className="hover:underline">Leagues</Link>
      <Link href="/clubs" className="hover:underline">Clubs</Link>
    </nav>
  );
}

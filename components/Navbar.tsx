import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-black text-white">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
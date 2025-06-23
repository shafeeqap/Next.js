"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathName = usePathname() // using for Active Link
  return (
    <nav className="mt-4 space-x-4">
      <Link href="/" className={`px-3 py-2 rounded-md ${pathName=='/' ? "bg-blue-500 text-white" : "text-blue-500"}`}>
        Home
      </Link>
      <Link href="/about" className={`px-3 py-2 rounded-md ${pathName=='/about' ? "bg-blue-500 text-white" : "text-blue-500"}`}>
        About
      </Link>
      <Link
        href="/dashboard/settings"
        className={`px-3 py-2 rounded-md ${pathName=='/dashboard/settings' ? "bg-blue-500 text-white" : "text-blue-500"}`}
      >
        Dashboard Settings
      </Link>
    </nav>
  );
}

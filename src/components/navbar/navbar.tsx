"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

import { GithubIcon } from "lucide-react";

import UserProfile from "./user-profile";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  const { data, status, update } = useSession();
  return (
    <nav className="fixed top-0 w-full h-16 flex items-center justify-between px-4 border-b">
      <Link
        href="/"
        className="scroll-m-20 text-2xl font-normal tracking-tight flex items-center justify-center"
      >
        <GithubIcon className="w-5 h-5" /> Issues
      </Link>
      {/* Conditional Rendering */}
      <div className="space-x-4 flex items-center justify-center">
        <ThemeToggle />
        <UserProfile user={data?.user} sessionStatus={status} />
      </div>
    </nav>
  );
}

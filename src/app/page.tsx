"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

import { handleSignOut } from "@/helper/auth";

export default function Home() {
  const { data, status, update } = useSession();
  console.log({ data, status, update });

  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <h1>Welcome Home</h1>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </main>
  );
}

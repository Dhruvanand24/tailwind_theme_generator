"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Customizer } from "./components/customizer";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    const handleBeforeUnload = () => {
      const theme = localStorage.getItem("customTheme");
      if (theme) {
        localStorage.setItem("customTheme", theme);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Customizer />
      <div className="mt-4">
        <Link href="/config">
          <Button>View Generated Config</Button>
        </Link>
      </div>
    </main>
  );
}

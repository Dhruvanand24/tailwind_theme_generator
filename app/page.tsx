"use client";

import { useEffect } from "react";
import { Customizer } from "./components/customizer";

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
    <div className="flex flex-col md:flex-row gap-4">
      <Customizer />
    </div>
  );
}

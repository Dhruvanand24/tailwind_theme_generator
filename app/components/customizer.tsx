"use client";

import { useState, useEffect } from "react";
import { ControlPanel } from "./control-panel";
import { Preview } from "./preview";

export type Theme = {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  backgroundColor: string;
  gradientStart: string;
  gradientEnd: string;
  fontSize: string;
  fontFamily: string;
  useGradientBackground: boolean;
};

const defaultTheme: Theme = {
  primaryColor: "#3b82f6",
  secondaryColor: "#10b981",
  textColor: "#1f2937",
  backgroundColor: "#ffffff",
  gradientStart: "#4f46e5",
  gradientEnd: "#7c3aed",
  fontSize: "16px",
  fontFamily: "Inter",
  useGradientBackground: false,
};

export function Customizer() {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("customTheme");
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("customTheme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div className="flex w-full gap-4">
      <ControlPanel theme={theme} setTheme={setTheme} />
      <Preview theme={theme} />
    </div>
  );
}

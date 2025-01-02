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
  gradientDirection: "to right" | "to bottom" | "to bottom right";
  gradientStops: string[];
  fontSize: string;
  fontFamily: string;
  useGradientBackground: boolean;
  h1Color: string;
  h2Color: string;
  h3Color: string;
  h4Color: string;
  pColor: string;
  h1FontSize: string;
  h2FontSize: string;
  h3FontSize: string;
  h4FontSize: string;
  pFontSize: string;
};

const defaultTheme: Theme = {
  primaryColor: "#3b82f6",
  secondaryColor: "#10b981",
  textColor: "#1f2937",
  backgroundColor: "#ffffff",
  gradientStart: "#4f46e5",
  gradientEnd: "#7c3aed",
  gradientDirection: "to right",
  gradientStops: ["0%", "100%"],
  fontSize: "16px",
  fontFamily: "inter",
  useGradientBackground: false,
  h1Color: "#1f2937",
  h2Color: "#1f2937",
  h3Color: "#1f2937",
  h4Color: "#1f2937",
  pColor: "#1f2937",
  h1FontSize: "2.25rem",
  h2FontSize: "1.875rem",
  h3FontSize: "1.5rem",
  h4FontSize: "1.25rem",
  pFontSize: "1rem",
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

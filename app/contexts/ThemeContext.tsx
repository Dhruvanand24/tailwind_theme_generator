"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Theme } from "../components/customizer";

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
  useAdvancedTypography: false,
};

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
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
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

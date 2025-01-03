"use client";

import { ControlPanel } from "./control-panel";
import { Preview } from "./preview";
import { useTheme } from "../contexts/ThemeContext";

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
  useAdvancedTypography: boolean;
};

export function Customizer() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <ControlPanel theme={theme} setTheme={setTheme} />
      <Preview theme={theme} />
    </>
  );
}

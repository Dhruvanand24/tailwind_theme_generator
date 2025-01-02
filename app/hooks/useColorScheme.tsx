import { useState, useEffect } from "react";

type ColorSchemeMode =
  | "monochrome"
  | "monochrome-dark"
  | "monochrome-light"
  | "analogic"
  | "complement"
  | "analogic-complement"
  | "triad"
  | "quad"; // Added extra modes

interface ColorSchemeData {
  colors: { hex: { value: string }; name: { value: string } }[];
}

interface UseColorSchemeOptions {
  mode?: ColorSchemeMode;
  count?: number;
}

interface UseColorSchemeResult {
  colorScheme: ColorSchemeData | null;
  loading: boolean;
  error: string | null;
}

const useColorScheme = (
  seedColor: string,
  { mode = "monochrome", count = 5 }: UseColorSchemeOptions = {}
): UseColorSchemeResult => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!seedColor) {
      setError("Seed color is required");
      setLoading(false);
      return;
    }

    const fetchColorScheme = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}&count=${count}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch color scheme");
        }

        const data: ColorSchemeData = await response.json();
        setColorScheme(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchColorScheme();
  }, [seedColor, mode, count]);

  return { colorScheme, loading, error };
};

export default useColorScheme;

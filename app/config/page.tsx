"use client";

import { useState, useEffect } from "react";
import { Theme } from "../components/customizer";
import { Button } from "@/components/ui/button";

export default function ConfigPage() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("customTheme");
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    }
  }, []);

  if (!theme) {
    return <div>Loading...</div>;
  }

  const tailwindConfig = `
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '${theme.primaryColor}',
        secondary: '${theme.secondaryColor}',
        text: '${theme.textColor}',
        background: '${theme.backgroundColor}',
      },
      fontSize: {
        base: '${theme.fontSize}',
      },
      fontFamily: {
        sans: ['${theme.fontFamily}', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, ${theme.gradientStart}, ${theme.gradientEnd})',
      },
    },
  },
}
`;

  const cssVariables = `
:root {
  --primary-color: ${theme.primaryColor};
  --secondary-color: ${theme.secondaryColor};
  --text-color: ${theme.textColor};
  --background-color: ${theme.backgroundColor};
  --gradient-start: ${theme.gradientStart};
  --gradient-end: ${theme.gradientEnd};
  --font-size: ${theme.fontSize};
  --font-family: ${theme.fontFamily};
}

body {
  background: ${
    theme.useGradientBackground
      ? `linear-gradient(to right, var(--gradient-start), var(--gradient-end))`
      : "var(--background-color)"
  };
  color: var(--text-color);
  font-size: var(--font-size);
  font-family: var(--font-family), sans-serif;
}
`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Generated Configuration</h1>

      <div>
        <h2 className="text-xl font-semibold">Tailwind Config</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">{tailwindConfig}</pre>
        <Button onClick={() => copyToClipboard(tailwindConfig)}>
          Copy Tailwind Config
        </Button>
      </div>

      <div>
        <h2 className="text-xl font-semibold">CSS Variables</h2>
        <pre className="bg-gray-100 p-4 rounded-lg">{cssVariables}</pre>
        <Button onClick={() => copyToClipboard(cssVariables)}>
          Copy CSS Variables
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "@/components/ui/button";

export default function ConfigPage() {
  const { theme } = useTheme();

  const [pcTheme, setPcTheme] = useState(theme);
  const [tabletTheme, setTabletTheme] =  useState(theme);
  const [mobileTheme, setMobileTheme] = useState(theme);

  const tailwindConfig = `
module.exports = {
  theme: {
    extend: {
      screens: {
        mobile: '320px', 
        tablet: '768px',
        pc: '1024px',
      },
      colors: {
        primary: '${theme.primaryColor}',
        secondary: '${theme.secondaryColor}',
        text: '${theme.textColor}',
        background: '${theme.backgroundColor}',
        ${
          theme.useAdvancedTypography
            ? `
        h1: '${theme.h1Color}',
        h2: '${theme.h2Color}',
        h3: '${theme.h3Color}',
        h4: '${theme.h4Color}',
        p: '${theme.pColor}',
        `
            : ""
        }
      },
      fontSize: {
        base: '${theme.fontSize}',
        ${
          theme.useAdvancedTypography
            ? `
        h1: '${theme.h1FontSize}',
        h2: '${theme.h2FontSize}',
        h3: '${theme.h3FontSize}',
        h4: '${theme.h4FontSize}',
        p: '${theme.pFontSize}',
        `
            : ""
        }
      },
      fontFamily: {
        sans: ['${theme.fontFamily}', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(${theme.gradientDirection}, ${
    theme.gradientStart
  } ${theme.gradientStops[0]}, ${theme.gradientEnd} ${
    theme.gradientStops[theme.gradientStops.length - 1]
  })',
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
  ${
    theme.useAdvancedTypography
      ? `
  --h1-color: ${theme.h1Color};
  --h2-color: ${theme.h2Color};
  --h3-color: ${theme.h3Color};
  --h4-color: ${theme.h4Color};
  --p-color: ${theme.pColor};
  --h1-font-size: ${theme.h1FontSize};
  --h2-font-size: ${theme.h2FontSize};
  --h3-font-size: ${theme.h3FontSize};
  --h4-font-size: ${theme.h4FontSize};
  --p-font-size: ${theme.pFontSize};
  `
      : ""
  }
  --gradient-direction: ${theme.gradientDirection};
  --gradient-stops: ${theme.gradientStops.join(", ")};
}

body {
  background: ${
    theme.useGradientBackground
      ? `linear-gradient(var(--gradient-direction), var(--gradient-start) ${
          theme.gradientStops[0]
        }, var(--gradient-end) ${
          theme.gradientStops[theme.gradientStops.length - 1]
        })`
      : "var(--background-color)"
  };
  color: var(--text-color);
  font-size: var(--font-size);
  font-family: var(--font-family), sans-serif;
}

${
  theme.useAdvancedTypography
    ? `
h1 { color: var(--h1-color); font-size: var(--h1-font-size); }
h2 { color: var(--h2-color); font-size: var(--h2-font-size); }
h3 { color: var(--h3-color); font-size: var(--h3-font-size); }
h4 { color: var(--h4-color); font-size: var(--h4-font-size); }
p { color: var(--p-color); font-size: var(--p-font-size); }
`
    : ""
}

@layer utilities {
  @screen mobile {
    * {
      ${mobileTheme}
    }
  }
  @screen tablet {
    * {
      ${tabletTheme}
    }
  }
  @screen pc {
    * {
      ${pcTheme}
    }
  }
}


`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  useEffect(()=>{
    const mobileThemeData = localStorage.getItem("mobileTheme");
    if(mobileThemeData){
      setMobileTheme(JSON.parse(mobileThemeData));
    }
    const tabletThemeData = localStorage.getItem("tabletTheme");
    if(tabletThemeData){
      setTabletTheme(JSON.parse(tabletThemeData));
    }
    const pcThemeData = localStorage.getItem("pcTheme");
    if(pcThemeData){
      setPcTheme(JSON.parse(pcThemeData));
    }
  },[])

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

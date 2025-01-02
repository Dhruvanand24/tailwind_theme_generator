"use client";

import {
  Inter,
  Roboto,
  Open_Sans,
  Lato,
  Poppins,
  Montserrat,
  Playfair_Display,
  Merriweather,
  Roboto_Mono,
  Fira_Code,
} from "next/font/google";
import { createContext, useContext } from "react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const robotoMono = Roboto_Mono({ subsets: ["latin"] });
const firaCode = Fira_Code({ subsets: ["latin"] });

export const fonts = {
  inter: inter.className,
  roboto: roboto.className,
  openSans: openSans.className,
  lato: lato.className,
  poppins: poppins.className,
  montserrat: montserrat.className,
  playfairDisplay: playfairDisplay.className,
  merriweather: merriweather.className,
  robotoMono: robotoMono.className,
  firaCode: firaCode.className,
};

const FontContext = createContext(fonts);

export function FontProvider({ children }: { children: React.ReactNode }) {
  return <FontContext.Provider value={fonts}>{children}</FontContext.Provider>;
}

export function useFonts() {
  return useContext(FontContext);
}

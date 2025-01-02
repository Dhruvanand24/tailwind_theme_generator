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
  Nunito,
  Ubuntu,
  PT_Serif,
  Raleway,
  Oswald,
  Slabo_27px,
  Arimo,
  Asap,
  Barlow,
  Bitter,
  Cabin,
  Cairo,
  Chivo,
  Dancing_Script,
  EB_Garamond,
  Exo,
  Fjalla_One,
  Francois_One,
  Hind,
  Inconsolata,
  Josefin_Sans,
  Karla,
  Lora,
  Manrope,
  Maven_Pro,
  Mukta,
  Noto_Sans,
  Nunito_Sans,
  Overpass,
  PT_Mono,
  Quicksand,
  Righteous,
  Saira,
  Sarabun,
  Spectral,
  Work_Sans,
  Zilla_Slab,
  // Add more fonts as needed
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
const nunito = Nunito({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
const arimo = Arimo({ subsets: ["latin"] });
const asap = Asap({ subsets: ["latin"] });
const bitter = Bitter({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["latin"] });
const chivo = Chivo({ subsets: ["latin"] });
const dancingScript = Dancing_Script({ subsets: ["latin"] });
const ebGaramond = EB_Garamond({ subsets: ["latin"] });
const exo = Exo({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });
const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const karla = Karla({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const mavenPro = Maven_Pro({ subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin"] });
const nunitoSans = Nunito_Sans({ subsets: ["latin"] });
const overpass = Overpass({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });
const saira = Saira({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });

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
  nunito: nunito.className,
  raleway: raleway.className,
  oswald: oswald.className,
  arimo: arimo.className,
  asap: asap.className,
  bitter: bitter.className,
  cabin: cabin.className,
  cairo: cairo.className,
  chivo: chivo.className,
  dancingScript: dancingScript.className,
  ebGaramond: ebGaramond.className,
  exo: exo.className,
  inconsolata: inconsolata.className,
  josefinSans: josefinSans.className,
  karla: karla.className,
  lora: lora.className,
  manrope: manrope.className,
  mavenPro: mavenPro.className,
  notoSans: notoSans.className,
  nunitoSans: nunitoSans.className,
  overpass: overpass.className,
  quicksand: quicksand.className,
  saira: saira.className,
  workSans: workSans.className,
};

const FontContext = createContext(fonts);

export function FontProvider({ children }: { children: React.ReactNode }) {
  return <FontContext.Provider value={fonts}>{children}</FontContext.Provider>;
}

export function useFonts() {
  return useContext(FontContext);
}

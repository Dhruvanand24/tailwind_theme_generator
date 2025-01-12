"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Theme } from "../components/customizer";
interface screenDataType {
  type: string;
  size: string;
}
interface ScreenContextProps {
  screen: screenDataType;
  setScreen: React.Dispatch<React.SetStateAction<screenDataType>>;
  itrativeTheme: Theme;
  setItrativeTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ScreenContextData = createContext<ScreenContextProps | undefined>(
  undefined
);

interface ScreenProviderProps {
  children: ReactNode;
}

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

export const ScreenProvider: React.FC<ScreenProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  //*for changing the screen
  const [screen, setScreen] = useState<screenDataType>({ type: "pc", size: "1024px" });

  //*to show the selected screen theme
  const [itrativeTheme, setItrativeTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    if(loading){
      return;
    }
    localStorage.setItem("screen", JSON.stringify(screen));
    if(screen.type === "mobile"){
      const mobileTheme = localStorage.getItem("mobileTheme");
      if(mobileTheme){
        setItrativeTheme(JSON.parse(mobileTheme));
      }
    }else if(screen.type === "tablet"){
      const tabletTheme = localStorage.getItem("tabletTheme");
      if(tabletTheme){
        setItrativeTheme(JSON.parse(tabletTheme));
      }
    }else{
      const pcTheme = localStorage.getItem("pcTheme");
      if(pcTheme){
        setItrativeTheme(JSON.parse(pcTheme));
      }
    }
  }, [screen]);

  useEffect(() => {
    if(loading){
      return;
    }
    
    if(screen.type === "mobile"){
      localStorage.setItem("mobileTheme", JSON.stringify(itrativeTheme));
    }else if(screen.type === "tablet"){
      localStorage.setItem("tabletTheme", JSON.stringify(itrativeTheme));
    }else{
      localStorage.setItem("pcTheme", JSON.stringify(itrativeTheme));
    }
    
  }, [itrativeTheme, screen]);

  //*for getting the data saved in the local storage.
  useEffect(() => {
    const selectedScreen = localStorage.getItem("screen");
    if (selectedScreen) {
      let parsedScreenData = JSON.parse(selectedScreen);
      setScreen(parsedScreenData);
      if(parsedScreenData.type === "mobile"){
        const mobileTheme = localStorage.getItem("mobileTheme");
        if(mobileTheme){
          setItrativeTheme(JSON.parse(mobileTheme));
        }
      }else if(parsedScreenData.type === "tablet"){
        const tabletTheme = localStorage.getItem("tabletTheme");
        if(tabletTheme){
          setItrativeTheme(JSON.parse(tabletTheme));
        }
      }else{
        const pcTheme = localStorage.getItem("pcTheme");
        if(pcTheme){
          setItrativeTheme(JSON.parse(pcTheme));
        }
      }
    }else{
      
    }
    setLoading(false);
  }, []);

  return (
    <ScreenContextData.Provider
      value={{
        screen,
        setScreen,
        itrativeTheme,
        setItrativeTheme,
      }}
    >
      {children}
    </ScreenContextData.Provider>
  );
};

export const useScreen = (): ScreenContextProps => {
  const context = useContext(ScreenContextData);
  if (!context) {
    throw new Error("useScreen must be used within a ScreenProvider");
  }
  return context;
};

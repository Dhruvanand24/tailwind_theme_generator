import "./globals.css";
import { Metadata } from "next";
import { FontProvider } from "./FontProvider";
import { NavMenu } from "./components/nav-menu";
import { ThemeProvider } from "./contexts/ThemeContext";

export const metadata: Metadata = {
  title: "Tailwind Customizer",
  description: "Customize your Tailwind theme in real-time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+AU+SA:wght@100..400&display=swap"
          rel="stylesheet"
        ></link>
        ;
        <FontProvider>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col font-nunito ">
              <header className="border-b sticky top-0 left-0 z-10 bg-background ">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                  <h1 className="text-2xl font-bold  text-accent font-playwrite">
                    Tailwind Customizer
                  </h1>
                  <NavMenu />
                </div>
              </header>
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
              <footer className="border-t">
                <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
                  © 2023 Tailwind Customizer. All rights reserved.
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </FontProvider>
      </body>
    </html>
  );
}

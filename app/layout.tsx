import "./globals.css";
import { Metadata } from "next";
import { FontProvider } from "./FontProvider";

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
        <FontProvider>{children}</FontProvider>
      </body>
    </html>
  );
}

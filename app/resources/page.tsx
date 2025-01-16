import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";



interface themeContentProps {
  title: string;
  imageSrc: string;
}
const ThemeContent: React.FC<themeContentProps> = ({ title, imageSrc }) => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-2">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        {title}
      </span>{" "}
      Create stunning color palettes with AI-powered color generation. Perfect for
      designers who want to explore unique color combinations while maintaining
      harmony and accessibility.
    </p>
    <Image
      src={imageSrc}
      alt="Color palette demonstration"
      height={500}
      width={500}
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

interface ComponentContentProps {
  title: string;
  imageSrc: string;
}
const ComponentContent: React.FC<ComponentContentProps> = ({ title, imageSrc }) => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-2">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        {title}
      </span>{" "}
      Build beautiful user interfaces with pre-built components. From buttons to
      complex layouts, our component library helps you create consistent and
      professional designs quickly.
    </p>
    <Image
      src={imageSrc}
      alt="UI components showcase"
      height={500}
      width={500}
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

interface TypographyContentProps {
  title: string;
  imageSrc: string;
}
const TypographyContent: React.FC<TypographyContentProps> = ({ title, imageSrc }) => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-2">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        {title}
      </span>{" "}
      Explore a vast collection of carefully curated fonts. Find the perfect
      typeface for your project, from elegant serifs to modern sans-serifs, with
      optimized readability across all devices.
    </p>
    <Image
      src={imageSrc}
      alt="Typography showcase"
      height={500}
      width={500}
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

interface AssetContentProps {
  title: string;
  imageSrc: string;
}
const AssetContent: React.FC<AssetContentProps> = ({ title, imageSrc }) => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-2">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        {title}
      </span>{" "}
      Access millions of high-quality images, illustrations, and graphics. Find the
      perfect visual assets to enhance your designs and bring your creative vision
      to life.
    </p>
    <Image
      src={imageSrc}
      alt="Digital assets showcase"
      height={500}
      width={500}
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

const themeData = [
  {
    category: "HUE MINT",
    title: "AI-Powered Color Generation",
    src: "https://huemint.com/assets/img/logo-icon.svg",
    content: <ThemeContent 
      title="Generate Beautiful Color Schemes" 
      imageSrc="https://huemint.com/website-magazine/banner.svg"
    />,
  },
  {
    category: "Coolors",
    title: "Professional Color Palettes",
    src: "https://play-lh.googleusercontent.com/f5V9vlssGd1D4J3INW63XPwiQKvp4deYwGm1daxqnuYoPhoODEJNUtihO9BWBOqaJic=w600-h300-pc0xffffff-pd",
    content: <ThemeContent 
      title="Discover Perfect Color Combinations" 
      imageSrc="https://www.browserstack.com/blog/content/images/2023/07/image4-17.png"
    />,
  },
];

const componentsData = [
  {
    category: "Aceternity UI",
    title: "Modern UI Components",
    src: "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fcloudinary_bkp%2F3d-card.png&w=1920&q=75",
    content: <ComponentContent 
      title="Build Better Interfaces" 
      imageSrc="https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fcloudinary_bkp%2Fspotlight.png&w=1920&q=75"
    />,
  },
  {
    category: "Shad CN",
    title: "Beautiful UI Components",
    src: "https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-19-ts-shadcn/social.png",
    content: <ComponentContent 
      title="Streamline Your Development" 
      imageSrc="https://ui.shadcn.com/og.jpg"
    />,
  },
];

const fonttypoData = [
  {
    category: "Google Fonts",
    title: "Premium Typography",
    src: "https://i.pinimg.com/originals/d5/c7/b5/d5c7b5a608a5f291acc6b3086191bb04.jpg",
    content: <TypographyContent 
      title="Elevate Your Typography" 
      imageSrc="https://storage.googleapis.com/fonts-landing-page-2023/social-image.jpg"
    />,
  },
  {
    category: "Typography Tools",
    title: "Font Management",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <TypographyContent 
      title="Master Your Typography" 
      imageSrc="https://www.fontshop.com/cdn-cgi/image/format=auto,quality=85/https://fontshop-prod-responsive-images.s3.amazonaws.com/uploads/story_image/image/50035/Type_Story_header.jpg"
    />,
  },
];

const assetsData = [
  {
    category: "Pictographic.io",
    title: "Vector Graphics",
    src: "https://www.pictographic.io/_nuxt/pictographic_square.OzO6wAWm.png",
    content: <AssetContent 
      title="Professional Vector Assets" 
      imageSrc="https://www.pictographic.io/_nuxt/preview-6.jpKJqyuB.png"
    />,
  },
  {
    category: "Freepik",
    title: "Stock Resources",
    src: "https://fps.cdnpk.net/common/contributor-freepik-og.png?w=1200",
    content: <AssetContent 
      title="Premium Stock Content" 
      imageSrc="https://img.freepik.com/free-vector/abstract-banner-background-with-red-shapes_1361-3348.jpg"
    />,
  },
  {
    category: "Unsplash",
    title: "High-Quality Photos",
    src: "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
    content: <AssetContent 
      title="Professional Photography" 
      imageSrc="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3"
    />,
  },
];

export default function AppleCardsCarouselDemo() {
  const themeCards = themeData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const componentsCards = componentsData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const fontTypoCard = fonttypoData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  const assetsCard = assetsData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      <h2 className="max-w-7xl px-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Themes
      </h2>
      <Carousel items={themeCards} />
      <h2 className="max-w-7xl px-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Components
      </h2>
      <Carousel items={componentsCards} />
      <h2 className="max-w-7xl px-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Fonts & typography
      </h2>
      <Carousel items={fontTypoCard} />
      <h2 className="max-w-7xl px-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Images and Assets
      </h2>
      <Carousel items={assetsCard} />
    </div>
  );
}
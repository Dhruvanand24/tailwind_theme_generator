"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Theme } from "./customizer";
import { useFonts } from "../FontProvider";
import { Mail, ArrowRight, Star, Check } from "lucide-react";

type PreviewProps = {
  theme: Theme;
};

export function Preview({ theme }: PreviewProps) {
  const fonts = useFonts();

  const previewStyle = {
    "--primary-color": theme.primaryColor,
    "--secondary-color": theme.secondaryColor,
    "--text-color": theme.textColor,
    "--background-color": theme.backgroundColor,
    "--gradient-start": theme.gradientStart,
    "--gradient-end": theme.gradientEnd,
    "--font-size": theme.fontSize,
    background: theme.useGradientBackground
      ? `linear-gradient(${theme.gradientDirection}, ${theme.gradientStart} ${
          theme.gradientStops[0]
        }, ${theme.gradientEnd} ${
          theme.gradientStops[theme.gradientStops.length - 1]
        })`
      : theme.backgroundColor,
    color: theme.textColor,
    fontSize: theme.fontSize,
  } as React.CSSProperties;

  const headingStyle = (element: "h1" | "h2" | "h3" | "h4") => ({
    color: theme.useAdvancedTypography
      ? theme[`${element}Color`]
      : theme.textColor,
    fontSize: theme[`${element}FontSize`],
  });

  const paragraphStyle = {
    color: theme.useAdvancedTypography ? theme.pColor : theme.textColor,
    fontSize: theme.pFontSize,
  };

  return (
    <div
      className={`w-2/3 rounded-lg overflow-y-auto h-screen ${
        fonts[theme.fontFamily as keyof typeof fonts]
      }`}
      style={previewStyle}
    >
      <header
        style={{ backgroundColor: theme.primaryColor, color: "#ffffff" }}
        className="py-4 px-6 mb-8"
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={headingStyle("h1")}>
            TechNova
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <section className="mb-12 text-center">
          <h2 className="mb-4" style={headingStyle("h2")}>
            Welcome to TechNova
          </h2>
          <p className="mb-6" style={paragraphStyle}>
            Discover the future of technology with our innovative products and
            solutions.
          </p>
          <Button
            className="mr-4"
            style={{ backgroundColor: theme.primaryColor, color: "#ffffff" }}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            style={{
              borderColor: theme.primaryColor,
              color: theme.primaryColor,
            }}
            className="hover:bg-white"
          >
            Learn More
          </Button>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 text-center" style={headingStyle("h3")}>
            Our Featured Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle style={headingStyle("h4")}>Product {i}</CardTitle>
                  <CardDescription style={paragraphStyle}>
                    Cutting-edge technology at your fingertips
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p style={paragraphStyle}>
                    Experience the power of innovation with our latest product
                    line.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    style={{
                      borderColor: theme.secondaryColor,
                      color: theme.secondaryColor,
                    }}
                    className="w-full hover:bg-white"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <Alert style={{ borderColor: theme.primaryColor }}>
            <Star className="h-4 w-4" style={{ color: theme.primaryColor }} />
            <AlertTitle style={{ color: theme.primaryColor }}>
              New Release!
            </AlertTitle>
            <AlertDescription>
              Our latest product is now available. Check it out today!
            </AlertDescription>
          </Alert>
        </section>

        <section className="mb-12">
          <h3 className="mb-6 text-center" style={headingStyle("h3")}>
            Why Choose TechNova?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Innovation", "Quality", "Support", "Sustainability"].map(
              (item) => (
                <div key={item} className="flex items-start">
                  <Check
                    className="mr-2 h-5 w-5"
                    style={{ color: theme.primaryColor }}
                  />
                  <div>
                    <h4 style={headingStyle("h4")}>{item}</h4>
                    <p style={paragraphStyle}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle style={headingStyle("h3")}>Stay Updated</CardTitle>
              <CardDescription style={paragraphStyle}>
                Subscribe to our newsletter for the latest updates and offers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow"
                  style={{ borderColor: theme.secondaryColor }}
                />
                <Button
                  type="submit"
                  style={{
                    backgroundColor: theme.secondaryColor,
                    color: "#ffffff",
                  }}
                >
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer
        style={{ backgroundColor: theme.secondaryColor, color: "#ffffff" }}
        className="py-8 px-6"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="mb-4" style={headingStyle("h4")}>
              About Us
            </h4>
            <p style={paragraphStyle}>
              TechNova is a leading technology company dedicated to innovation
              and excellence.
            </p>
          </div>
          <div>
            <h4 className="mb-4" style={headingStyle("h4")}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4" style={headingStyle("h4")}>
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-primary">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="hover:text-primary">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

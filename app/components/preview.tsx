"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Theme } from "./customizer";
import { useFonts } from "../FontProvider";

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

  return (
    <div
      className={`w-2/3 p-4 rounded-lg ${
        fonts[theme.fontFamily as keyof typeof fonts]
      }`}
      style={previewStyle}
    >
      <div className="space-y-4">
        <h1
          className="font-bold"
          style={{ color: theme.h1Color, fontSize: theme.h1FontSize }}
        >
          Heading 1
        </h1>
        <h2
          className="font-semibold"
          style={{ color: theme.h2Color, fontSize: theme.h2FontSize }}
        >
          Heading 2
        </h2>
        <h3
          className="font-medium"
          style={{ color: theme.h3Color, fontSize: theme.h3FontSize }}
        >
          Heading 3
        </h3>
        <h4
          className="font-normal"
          style={{ color: theme.h4Color, fontSize: theme.h4FontSize }}
        >
          Heading 4
        </h4>

        <p style={{ color: theme.pColor, fontSize: theme.pFontSize }}>
          This is a paragraph with some text. The quick brown fox jumps over the
          lazy dog.
        </p>

        <div className="space-x-2">
          <Button
            variant="default"
            style={{ backgroundColor: theme.primaryColor }}
          >
            Primary Button
          </Button>
          <Button
            variant="secondary"
            style={{ backgroundColor: theme.secondaryColor }}
          >
            Secondary Button
          </Button>
        </div>

        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            This is an alert message. You can customize its appearance.
          </AlertDescription>
        </Alert>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> This is an error message.</span>
        </div>

        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> This is a success message.</span>
        </div>

        <div
          className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Warning!</strong>
          <span className="block sm:inline"> This is a warning message.</span>
        </div>
      </div>
    </div>
  );
}

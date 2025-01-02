"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { HexColorPicker } from "react-colorful";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Theme } from "./customizer";
import { useFonts } from "../FontProvider";
import { ChevronDown, ChevronUp, Paintbrush, Type, Layout } from "lucide-react";
import useColorScheme from "../hooks/useColorScheme";
import { Button } from "@/components/ui/button";

type ColorSchemeMode =
  | "monochrome"
  | "monochrome-dark"
  | "monochrome-light"
  | "analogic"
  | "complement"
  | "analogic-complement"
  | "triad"
  | "quad";

type ControlPanelProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export function ControlPanel({ theme, setTheme }: ControlPanelProps) {
  const fonts = useFonts();
  const [fontSearch, setFontSearch] = useState("");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [seedColor, setSeedColor] = useState<string>("0047AB");
  const [mode, setMode] = useState<ColorSchemeMode>("monochrome"); // Now supports more modes
  const { colorScheme, loading, error } = useColorScheme(seedColor, {
    mode,
    count: 6,
  });

  const handleColorCopy = (color: string) => {
    navigator.clipboard.writeText(color).then(() => {
      alert(`Copied color: ${color}`);
    });
  };
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeedColor(e.target.value.replace("#", ""));
  };
  const handleChange = (
    key: keyof Theme,
    value: string | boolean | string[]
  ) => {
    setTheme((prev) => ({ ...prev, [key]: value }));
  };

  const filteredFonts = Object.keys(fonts).filter((font) =>
    font.toLowerCase().includes(fontSearch.toLowerCase())
  );

  return (
    <div className="w-full md:w-1/3 p-4 bg-background rounded-lg shadow-lg overflow-y-auto h-screen">
      <Tabs defaultValue="colors" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="colors">
            <Paintbrush className="w-4 h-4 mr-2" />
            Colors
          </TabsTrigger>
          <TabsTrigger value="typography">
            <Type className="w-4 h-4 mr-2" />
            Typography
          </TabsTrigger>
          <TabsTrigger value="layout">
            <Layout className="w-4 h-4 mr-2" />
            Layout
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Color Scheme</CardTitle>
              <CardDescription>Customize your color palette</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="primaryColor">Primary</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="primaryColor"
                      type="color"
                      value={theme.primaryColor}
                      onChange={(e) =>
                        handleChange("primaryColor", e.target.value)
                      }
                      className="w-12 h-12 p-1 rounded-md"
                    />
                    <Input
                      type="text"
                      value={theme.primaryColor}
                      onChange={(e) =>
                        handleChange("primaryColor", e.target.value)
                      }
                      className="flex-grow"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="secondaryColor">Secondary</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="secondaryColor"
                      type="color"
                      value={theme.secondaryColor}
                      onChange={(e) =>
                        handleChange("secondaryColor", e.target.value)
                      }
                      className="w-12 h-12 p-1 rounded-md"
                    />
                    <Input
                      type="text"
                      value={theme.secondaryColor}
                      onChange={(e) =>
                        handleChange("secondaryColor", e.target.value)
                      }
                      className="flex-grow"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="textColor">Text Color</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="textColor"
                    type="color"
                    value={theme.textColor}
                    onChange={(e) => handleChange("textColor", e.target.value)}
                    className="w-12 h-12 p-1 rounded-md"
                  />
                  <Input
                    type="text"
                    value={theme.textColor}
                    onChange={(e) => handleChange("textColor", e.target.value)}
                    className="flex-grow"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="backgroundColor">Background Color</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="backgroundColor"
                    type="color"
                    value={theme.backgroundColor}
                    onChange={(e) =>
                      handleChange("backgroundColor", e.target.value)
                    }
                    className="w-12 h-12 p-1 rounded-md"
                  />
                  <Input
                    type="text"
                    value={theme.backgroundColor}
                    onChange={(e) =>
                      handleChange("backgroundColor", e.target.value)
                    }
                    className="flex-grow"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Gradient Background</CardTitle>
              <CardDescription>Configure gradient settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="useGradientBackground"
                  checked={theme.useGradientBackground}
                  onCheckedChange={(checked) =>
                    handleChange("useGradientBackground", checked)
                  }
                />
                <Label htmlFor="useGradientBackground">
                  Use Gradient Background
                </Label>
              </div>

              {theme.useGradientBackground && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="gradientStart">Start Color</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="gradientStart"
                          type="color"
                          value={theme.gradientStart}
                          onChange={(e) =>
                            handleChange("gradientStart", e.target.value)
                          }
                          className="w-12 h-12 p-1 rounded-md"
                        />
                        <Input
                          type="text"
                          value={theme.gradientStart}
                          onChange={(e) =>
                            handleChange("gradientStart", e.target.value)
                          }
                          className="flex-grow"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="gradientEnd">End Color</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="gradientEnd"
                          type="color"
                          value={theme.gradientEnd}
                          onChange={(e) =>
                            handleChange("gradientEnd", e.target.value)
                          }
                          className="w-12 h-12 p-1 rounded-md"
                        />
                        <Input
                          type="text"
                          value={theme.gradientEnd}
                          onChange={(e) =>
                            handleChange("gradientEnd", e.target.value)
                          }
                          className="flex-grow"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="gradientDirection">Direction</Label>
                    <Select
                      value={theme.gradientDirection}
                      onValueChange={(value) =>
                        handleChange("gradientDirection", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="to right">Left to Right</SelectItem>
                        <SelectItem value="to bottom">Top to Bottom</SelectItem>
                        <SelectItem value="to bottom right">
                          Diagonal
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="gradientStops">Gradient Stops</Label>
                    <Input
                      id="gradientStops"
                      type="text"
                      value={theme.gradientStops.join(", ")}
                      onChange={(e) => {
                        const stops = e.target.value
                          .split(",")
                          .map((s) => s.trim());
                        if (stops.every((stop) => /^\d+%$/.test(stop))) {
                          handleChange("gradientStops", stops);
                        }
                      }}
                      placeholder="0%, 100%"
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>
          <Card className="max-w-lg mx-auto bg-white shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Generate Color Palette
              </CardTitle>
              <CardDescription>Make a beautiful color palette</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="text">Enter Seed Color</Label>

                  <input
                    type="text"
                    value={`${seedColor}`}
                    onChange={handleColorChange}
                    className="p-2 border rounded-md w-32 mt-1"
                  />
                  <HexColorPicker
                    color={`${seedColor}`}
                    onChange={(color) => setSeedColor(color.replace("#", ""))}
                  />
                </div>
                <div>
                  <Label htmlFor="gradientDirection">Select Mode</Label>
                  <Select
                    value={mode}
                    onValueChange={(e) => setMode(e as ColorSchemeMode)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monochrome">Monochrome</SelectItem>
                      <SelectItem value="monochrome-dark">
                        Monochrome Dark
                      </SelectItem>
                      <SelectItem value="monochrome-light">
                        Monochrome Light
                      </SelectItem>
                      <SelectItem value="analogic">Analogic</SelectItem>
                      <SelectItem value="complement">Complement</SelectItem>
                      <SelectItem value="analogic-complement">
                        Analogic Complement
                      </SelectItem>
                      <SelectItem value="triad">Triad</SelectItem>
                      <SelectItem value="quad">Quad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* {loading && (
                  <p className="text-gray-500">Loading color scheme...</p>
                )} */}
                {error && <p className="text-red-500">{error}</p>}

                {colorScheme && colorScheme.colors && (
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold">Color Scheme</h2>
                    <div className="flex flex-col w-full bg-red">
                      {colorScheme.colors.map(
                        (
                          color: {
                            hex: { value: string };
                            name: { value: string };
                          },
                          index: number
                        ) => (
                          <div>
                            <Button
                              onClick={() => handleColorCopy(color.hex.value)}
                              key={index}
                              className="relative h-10 w-full rounded-none hover:scale-105 ease-in-out transition-all"
                              style={{ backgroundColor: color.hex.value }}
                            ></Button>
                            {/* <p className="text-xs">{color.name.value}</p> */}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="typography" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>
                Customize your fonts and text styles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fontSearch">Search Fonts</Label>
                <Input
                  id="fontSearch"
                  type="text"
                  value={fontSearch}
                  onChange={(e) => setFontSearch(e.target.value)}
                  placeholder="Search fonts..."
                />
              </div>

              <div>
                <Label htmlFor="fontFamily">Font Family</Label>
                <Select
                  value={theme.fontFamily}
                  onValueChange={(value) => handleChange("fontFamily", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredFonts.map((font) => (
                      <SelectItem
                        className={` ${fonts[font as keyof typeof fonts]}`}
                        key={font}
                        value={font}
                      >
                        {font}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="fontSize">Base Font Size</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="fontSize"
                    type="text"
                    value={theme.fontSize}
                    onChange={(e) => handleChange("fontSize", e.target.value)}
                    className="w-20"
                  />
                  <Slider
                    min={12}
                    max={24}
                    step={1}
                    value={[parseInt(theme.fontSize)]}
                    onValueChange={(value) =>
                      handleChange("fontSize", `${value[0]}px`)
                    }
                    className="flex-grow"
                  />
                </div>
              </div>

              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
              >
                <span className="font-semibold">
                  Advanced Typography Settings
                </span>
                {isAdvancedOpen ? <ChevronUp /> : <ChevronDown />}
              </div>

              {isAdvancedOpen && (
                <div className="space-y-4">
                  {["h1", "h2", "h3", "h4", "p"].map((element) => (
                    <div key={element} className="space-y-2">
                      <Label htmlFor={`${element}Color`}>
                        {element.toUpperCase()} Color
                      </Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id={`${element}Color`}
                          type="color"
                          value={
                            theme[`${element}Color` as keyof Theme] as string
                          }
                          onChange={(e) =>
                            handleChange(
                              `${element}Color` as keyof Theme,
                              e.target.value
                            )
                          }
                          className="w-12 h-12 p-1 rounded-md"
                        />
                        <Input
                          type="text"
                          value={
                            theme[`${element}Color` as keyof Theme] as string
                          }
                          onChange={(e) =>
                            handleChange(
                              `${element}Color` as keyof Theme,
                              e.target.value
                            )
                          }
                          className="flex-grow"
                        />
                      </div>
                      <Label htmlFor={`${element}FontSize`}>
                        {element.toUpperCase()} Font Size
                      </Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id={`${element}FontSize`}
                          type="text"
                          value={
                            theme[`${element}FontSize` as keyof Theme] as string
                          }
                          onChange={(e) =>
                            handleChange(
                              `${element}FontSize` as keyof Theme,
                              e.target.value
                            )
                          }
                          className="w-20"
                        />
                        <Slider
                          min={12}
                          max={72}
                          step={1}
                          value={[
                            parseInt(
                              theme[
                                `${element}FontSize` as keyof Theme
                              ] as string
                            ),
                          ]}
                          onValueChange={(value) =>
                            handleChange(
                              `${element}FontSize` as keyof Theme,
                              `${value[0]}px`
                            )
                          }
                          className="flex-grow"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="layout" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Layout Settings</CardTitle>
              <CardDescription>Adjust layout properties</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Layout settings coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

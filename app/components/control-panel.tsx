"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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

type ControlPanelProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export function ControlPanel({ theme, setTheme }: ControlPanelProps) {
  const fonts = useFonts();
  const [fontSearch, setFontSearch] = useState("");
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

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

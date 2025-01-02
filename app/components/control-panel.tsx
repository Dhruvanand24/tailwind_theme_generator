"use client";

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
import { Theme } from "./customizer";
import { useFonts } from "../FontProvider";

type ControlPanelProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export function ControlPanel({ theme, setTheme }: ControlPanelProps) {
  const fonts = useFonts();
  const fontOptions = Object.keys(fonts);

  const handleChange = (key: keyof Theme, value: string | boolean) => {
    setTheme((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-1/3 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Customize Theme</h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="primaryColor">Primary Color</Label>
          <Input
            id="primaryColor"
            type="color"
            value={theme.primaryColor}
            onChange={(e) => handleChange("primaryColor", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="secondaryColor">Secondary Color</Label>
          <Input
            id="secondaryColor"
            type="color"
            value={theme.secondaryColor}
            onChange={(e) => handleChange("secondaryColor", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="textColor">Text Color</Label>
          <Input
            id="textColor"
            type="color"
            value={theme.textColor}
            onChange={(e) => handleChange("textColor", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="backgroundColor">Background Color</Label>
          <Input
            id="backgroundColor"
            type="color"
            value={theme.backgroundColor}
            onChange={(e) => handleChange("backgroundColor", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="useGradientBackground">Use Gradient Background</Label>
          <Switch
            id="useGradientBackground"
            checked={theme.useGradientBackground}
            onCheckedChange={(checked) =>
              handleChange("useGradientBackground", checked)
            }
          />
        </div>

        <div>
          <Label htmlFor="gradientStart">Gradient Start</Label>
          <Input
            id="gradientStart"
            type="color"
            value={theme.gradientStart}
            onChange={(e) => handleChange("gradientStart", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="gradientEnd">Gradient End</Label>
          <Input
            id="gradientEnd"
            type="color"
            value={theme.gradientEnd}
            onChange={(e) => handleChange("gradientEnd", e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="fontSize">Font Size</Label>
          <Input
            id="fontSize"
            type="text"
            value={theme.fontSize}
            onChange={(e) => handleChange("fontSize", e.target.value)}
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
              {fontOptions.map((font) => (
                <SelectItem key={font} value={font}>
                  {font}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

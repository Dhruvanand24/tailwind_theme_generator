import { useState } from "react";
import ColorPicker from "../colorPicker/colorPicker";
import { formatColorCode } from "../../utilities/formatColorCode";
import { RatioContrast } from "..";

type CardLeftSideProps = {
  textColor: string;
  setTextColor: (color: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
};

export function CardLeftSide({
  textColor,
  setTextColor,
  backgroundColor,
  setBackgroundColor,
}: CardLeftSideProps) {
  const [isTextColorPickerOpen, setIsTextColorPickerOpen] = useState(false);
  const [isBackgroundColorPickerOpen, setIsBackgroundColorPickerOpen] =
    useState(false);

  const handleColorChange = (setColor: (color: string) => void) => {
    return (event: React.FocusEvent<HTMLInputElement>) => {
      setColor(formatColorCode(event.target.value));
    };
  };

  const handleTextColorBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setTextColor(formatColorCode(event.target.value));
  };

  const handleBackgroundColorBlur = (
    event: React.FocusEvent<HTMLInputElement>
  ) => {
    setBackgroundColor(formatColorCode(event.target.value));
  };

  const handleTextColorChange = handleColorChange(setTextColor);
  const handleBackgroundColorChange = handleColorChange(setBackgroundColor);

  return (
    <div className="w-full p-8 flex flex-col gap-5">
      <div className="flex gap-5">
        {/* Text Color Section */}
        <div className="w-full">
          <label htmlFor="text-color" className="text-sm font-medium">
            Text color
          </label>
          <div className="relative">
            <input
              type="text"
              name="text-color"
              id="text-color"
              value={textColor}
              onBlur={handleTextColorBlur}
              onChange={handleTextColorChange}
              className="mt-2 w-full border border-gray-300 p-2 rounded-lg outline-none text-base"
            />
            <button
              onClick={() => setIsTextColorPickerOpen(true)}
              className="w-8 h-8 rounded-md border border-gray-300 absolute top-4 right-2"
              style={{ backgroundColor: textColor }}
            />
            {isTextColorPickerOpen && (
              <ColorPicker
                setIsOpen={setIsTextColorPickerOpen}
                color={textColor}
                setColor={setTextColor}
              />
            )}
          </div>
        </div>

        {/* Background Color Section */}
        <div className="w-full">
          <label htmlFor="background-color" className="text-sm font-medium">
            Background color
          </label>
          <div className="relative">
            <input
              type="text"
              name="background-color"
              id="background-color"
              value={backgroundColor}
              onBlur={handleBackgroundColorBlur}
              onChange={handleBackgroundColorChange}
              className="mt-2 w-full border border-gray-300 p-2 rounded-lg outline-none text-base"
            />
            <button
              onClick={() => setIsBackgroundColorPickerOpen(true)}
              className="w-8 h-8 rounded-md border border-gray-300 absolute top-4 right-2"
              style={{ backgroundColor: backgroundColor }}
            />
            {isBackgroundColorPickerOpen && (
              <ColorPicker
                setIsOpen={setIsBackgroundColorPickerOpen}
                color={backgroundColor}
                setColor={setBackgroundColor}
              />
            )}
          </div>
        </div>
      </div>

      {/* Ratio Contrast Component */}
      <RatioContrast textColor={textColor} backgroundColor={backgroundColor} />
    </div>
  );
}

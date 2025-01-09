import { HexColorPicker } from "react-colorful";
import ClickAwayListener from "react-click-away-listener";

type ColorPickerProps = {
  setIsOpen: (isOpen: boolean) => void;
  color: string;
  setColor: (color: string) => void;
};

export default function ColorPicker({
  setIsOpen,
  color,
  setColor,
}: ColorPickerProps) {
  return (
    <ClickAwayListener onClickAway={() => setIsOpen(false)}>
      <div className="absolute bottom-[-230px] right-[-1px] shadow-2xl rounded-lg p-2 bg-white border border-gray-300">
        <HexColorPicker color={color} onChange={setColor} />
      </div>
    </ClickAwayListener>
  );
}

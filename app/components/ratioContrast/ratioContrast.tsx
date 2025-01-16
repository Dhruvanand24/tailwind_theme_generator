import { GoStarFill, GoStar } from "react-icons/go";
import { getContrastRatio } from "@/app/utilities/getContrastRatio";
import {
  getOverallStars,
  getStarsForLargeText,
  getStarsForSmallText,
} from "@/app/utilities/getStarsFunctions";
import { getContrastGrade } from "@/app/utilities/getContrastGrade";

type RatioContrastProps = {
  textColor: string;
  backgroundColor: string;
};

export function RatioContrast({
  textColor,
  backgroundColor,
}: RatioContrastProps) {
  const contrastRatio = getContrastRatio(textColor, backgroundColor);
  const largeTextStars = getStarsForLargeText(contrastRatio);
  const smallTextStars = getStarsForSmallText(contrastRatio);
  const contrastGrade = getContrastGrade(contrastRatio);
  const overallStars = getOverallStars(
    contrastGrade,
    largeTextStars,
    smallTextStars
  );

  const renderStars = (totalStars: number, filledStars: number) => {
    return Array.from({ length: totalStars }, (_, i) =>
      i < filledStars ? <GoStarFill key={i} /> : <GoStar key={i} />
    );
  };

  const getContrastClass = (stars: number) => {
    if (stars === 3) return "bg-green-500 text-white";
    if (stars === 2) return "bg-yellow-400 text-gray-800";
    if (stars === 1) return "bg-red-500 text-white";
    return "bg-gray-300 text-gray-800";
  };

  return (
    // final colours may look different
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">Contrast</span>

      <div className="flex flex-col gap-2 mt-2">
        <div className={`p-6 rounded-t-lg flex justify-between items-center ${getContrastClass(overallStars.length)}`}>
          <span className="text-3xl font-bold">{contrastRatio.toFixed(2)}</span>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-sm">{contrastGrade}</span>
            <span className="flex gap-1 text-lg">{renderStars(5, overallStars.length)}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className={`flex justify-between items-center w-full p-4 rounded-b-lg ${getContrastClass(smallTextStars)}`}>
            Small text
            <span className="flex gap-1">{renderStars(3, smallTextStars)}</span>
          </div>
          <div className={`flex justify-between items-center w-full p-4 rounded-b-lg ${getContrastClass(largeTextStars)}`}>
            Large text
            <span className="flex gap-1">{renderStars(3, largeTextStars)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

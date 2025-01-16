import { useEffect, useState } from "react";
import {
  ContentItemType,
  getRandomTextPlaceholder,
} from "../../utilities/getRandomTextPlaceholder";

type CardRightSideProps = {
  textColor: string;
  backgroundColor: string;
};

export function CardRightSide({
  textColor,
  backgroundColor,
}: CardRightSideProps) {
  const [contentItem, setContentItem] = useState<ContentItemType>({
    title: "",
    text: "",
  });

  useEffect(() => {
    setContentItem(getRandomTextPlaceholder());
  }, []);

  return (
    <div
      className="w-full flex flex-col items-center justify-center text-center gap-12 p-5 rounded-2xl"
      style={{ backgroundColor }}
    >
      <h3 className="text-2xl font-medium" style={{ color: textColor }}>
        {contentItem.title}
      </h3>
      <p className="text-lg font-medium" style={{ color: textColor }}>
        {contentItem.text}
      </p>
    </div>
  );
}

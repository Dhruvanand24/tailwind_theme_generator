"use client";

import { useState } from "react";
import { CardLeftSide, CardRightSide } from "../components";

export default function CheckColorContrast() {
  const [textColor, setTextColor] = useState("#FFFFFF");
  const [backgroundColor, setBackgroundColor] = useState("#4B88EE");

  return (
    <div className="container">
      <div className="card">
        <CardLeftSide
          textColor={textColor}
          setTextColor={setTextColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />

        <CardRightSide
          textColor={textColor}
          backgroundColor={backgroundColor}
        />
      </div>
    </div>
  );
}
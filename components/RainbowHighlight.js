import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({ color, children }) => {
  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[1, 1]}
      iterations={3}
      animationDuration={2000}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};

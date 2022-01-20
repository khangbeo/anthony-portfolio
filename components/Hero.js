import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6", "#bfa16d"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-2/3  mx-auto text-4xl md:text-7xl font-bold text-center py-12 lg:p-10">
        Hi, I'm Anthony.
        <div className="">
          <RoughNotationGroup show={true}>
            <RainbowHighlight color={colors[4]} >
              <h1 className="text-white dark:text-gray-900 my-4 py-3">
                Full-Stack Developer.
              </h1>
            </RainbowHighlight>
          </RoughNotationGroup>
        </div>
      </div>
    </div>
  );
}

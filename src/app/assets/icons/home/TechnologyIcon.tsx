import React from "react";

const TechnologyIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2004_10595"
        style={{maskType:'alpha'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="url(#pattern0_2004_10595)" />
      </mask>
      <g mask="url(#mask0_2004_10595)">
        <rect y="5" width="48" height="40" fill="#058041" />
      </g>
      <defs>
        <pattern
          id="pattern0_2004_10595"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_2004_10595" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_2004_10595"
          width="128"
          height="128"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default TechnologyIcon;

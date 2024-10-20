import React from "react";

const MarketingIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2004_10609"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="url(#pattern0_2004_10609)" />
      </mask>
      <g mask="url(#mask0_2004_10609)">
        <rect width="48" height="45" fill="#058041" />
      </g>
      <defs>
        <pattern
          id="pattern0_2004_10609"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_2004_10609" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_2004_10609"
          width="128"
          height="128"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default MarketingIcon;

import React from "react";

const DesignIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2004_10566"
        style={{maskType:'alpha'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="url(#pattern0_2004_10566)" />
      </mask>
      <g mask="url(#mask0_2004_10566)">
        <rect x="-1" y="-2" width="49" height="50" fill="#058041" />
      </g>
      <defs>
        <pattern
          id="pattern0_2004_10566"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_2004_10566" transform="scale(0.0078125)" />
        </pattern>
        <image
          id="image0_2004_10566"
          width="128"
          height="128"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default DesignIcon;

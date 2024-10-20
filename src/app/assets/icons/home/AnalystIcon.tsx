import React from "react";

const AnalystIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2004_10573"
        style={{maskType:'alpha'}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <rect width="48" height="48" fill="url(#pattern0_2004_10573)" />
      </mask>
      <g mask="url(#mask0_2004_10573)">
        <rect x="1" width="47" height="48" fill="#058041" />
      </g>
      <defs>
        <pattern
          id="pattern0_2004_10573"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_2004_10573" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_2004_10573"
          width="512"
          height="512"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default AnalystIcon;

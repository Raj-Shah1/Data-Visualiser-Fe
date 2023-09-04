import * as React from "react";
const ColumnChart = (props) => (
    <svg
    width={72}
    height={62}
    viewBox="0 0 72 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_17_355)">
      <mask id="path-1-inside-1_17_355" fill="white">
        <path d="M3.5 6C3.5 3.79086 5.29086 2 7.5 2H64.5C66.7091 2 68.5 3.79086 68.5 6V54C68.5 56.2091 66.7091 58 64.5 58H7.5C5.29086 58 3.5 56.2091 3.5 54V6Z" />
      </mask>
      <path
        d="M3.5 6C3.5 3.79086 5.29086 2 7.5 2H64.5C66.7091 2 68.5 3.79086 68.5 6V54C68.5 56.2091 66.7091 58 64.5 58H7.5C5.29086 58 3.5 56.2091 3.5 54V6Z"
        fill="#514F62"
        fillOpacity={0.79}
        shapeRendering="crispEdges"
      />
      <path
        d="M12.7688 25.1343H8.93689V51.7015H12.7688V25.1343Z"
        fill="#6243E0"
      />
      <path d="M26.8991 12H23.3066V51.7015H26.8991V12Z" fill="#6243E0" />
      <path
        d="M41.0293 35.2836H37.4369V51.7015H41.0293V35.2836Z"
        fill="#6243E0"
      />
      <path
        d="M55.1596 14.9851H51.5671V51.7015H55.1596V14.9851Z"
        fill="#6243E0"
      />
      <path
        d="M16.6009 28.7164H13.0084V51.7015H16.6009V28.7164Z"
        fill="#B153FB"
      />
      <path
        d="M30.731 21.5522H27.1385V51.7014H30.731V21.5522Z"
        fill="#B153FB"
      />
      <path d="M44.8612 12H41.2688V51.7015H44.8612V12Z" fill="#B153FB" />
      <path
        d="M58.9915 32.8955H55.399V51.7015H58.9915V32.8955Z"
        fill="#B153FB"
      />
      <path
        d="M20.4328 31.403H16.8403V51.7015H20.4328V31.403Z"
        fill="#A3562B"
      />
      <path
        d="M34.563 33.4925H30.9706V51.7015H34.563V33.4925Z"
        fill="#A3562B"
      />
      <path
        d="M48.6933 37.0746H45.1008V51.7015H48.6933V37.0746Z"
        fill="#A3562B"
      />
      <path
        d="M63.0629 32.8955H59.231V51.7015H63.0629V32.8955Z"
        fill="#A3562B"
      />
      <path d="M64.5 51.7015H7.5V52H64.5V51.7015Z" fill="#333333" />
      <path
        d="M3.5 2H68.5H3.5ZM68.5 54C68.5 56.7614 66.2614 59 63.5 59H8.5C5.73858 59 3.5 56.7614 3.5 54C3.5 55.6569 5.29086 57 7.5 57H64.5C66.7091 57 68.5 55.6569 68.5 54ZM3.5 58V2V58ZM68.5 2V58V2Z"
        fill="#22202C"
        mask="url(#path-1-inside-1_17_355)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_17_355"
        x={0.5}
        y={0}
        width={71}
        height={62}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_17_355"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_17_355"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default ColumnChart;

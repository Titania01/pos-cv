import * as React from "react";

function Indicator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={47}
      height={6}
      viewBox="0 0 47 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={0.5} width={16} height={6} rx={3} fill="#fff" />
      <circle cx={23.5} cy={3} r={3} fill="#fff" fillOpacity={0.45} />
      <circle cx={33.5} cy={3} r={3} fill="#fff" fillOpacity={0.45} />
      <circle cx={43.5} cy={3} r={3} fill="#fff" fillOpacity={0.45} />
    </svg>
  );
}

export default Indicator;

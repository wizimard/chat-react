import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#F7F0EA"
      fillRule="evenodd"
      d="M16 16h-3l-2.163-2.662a6.405 6.405 0 0 1-7.758-1.643L0 8l3.08-3.695c.07-.085.142-.167.217-.248L0 0h3l13 16Zm-7.16-5.12L5.354 6.589A3 3 0 0 0 8.84 10.88Z"
      clipRule="evenodd"
    />
    <path
      fill="#F7F0EA"
      d="m16 8-1.772 2.127L7.634 2.01a6.408 6.408 0 0 1 5.287 2.295L16 8Z"
    />
  </svg>
);
export default SvgEyeOff;

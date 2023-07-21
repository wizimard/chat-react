import * as React from "react";
import type { SVGProps } from "react";
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#F7F0EA"
      fillRule="evenodd"
      d="m0 6 3.08-3.695a6.405 6.405 0 0 1 9.84 0L16 6l-3.08 3.695a6.405 6.405 0 0 1-9.84 0L0 6Zm8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgEye;

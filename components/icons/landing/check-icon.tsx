import { StyledSvg } from "@components";
import React from "react";

export const CheckIcon = () => {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="green"
      viewBox="0 0 24 24"
    >
      <StyledSvg.Path
        css={{
          fill: "$green600",
        }}
        d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
      ></StyledSvg.Path>
    </StyledSvg>
  );
};

export default CheckIcon;

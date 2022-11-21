import React from "react";
import { InlineSection } from "@shared";
import { MainInterfaces } from "@types";

export const Hero = (props: MainInterfaces.IInlineSection.Entries) => {
  return <InlineSection {...props} />;
};

export default Hero;

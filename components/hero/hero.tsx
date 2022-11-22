import React, { memo } from "react";
import { InlineSection } from "@shared";
import { MainInterfaces } from "@types";

export const Hero = (
  props: MainInterfaces.IInlineSection.Entries & { reverse?: boolean, fullWidth?: boolean }
) => {
  return <InlineSection {...props} />;
};

export default memo(Hero);

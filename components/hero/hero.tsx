import React from "react";
import { Grid } from "@nextui-org/react";
import { InlineSection } from "@shared";
import { MainInterfaces } from "@types";

export const Hero = (props: MainInterfaces.IInlineSection.Entries) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      <InlineSection {...props}/>
    </Grid.Container>
  );
};

export default Hero;

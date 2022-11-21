import React, { ReactChild } from "react";
import { Spacer } from "@nextui-org/react";
import { Section } from "@primitives";

export const Paralax = ({ children }: { children: ReactChild }) => {
  return (
    <Section>
      <Spacer y={4} />
      {children}
    </Section>
  );
};

export default Paralax;

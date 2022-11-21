import React, { useMemo, useState } from "react";
import { Section } from "@primitives";
import { InView } from "react-intersection-observer";
import { Grid } from "@nextui-org/react";
import { CodeBlock } from "@components";

const ComparationSection = ({ children, compare }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  const generateCompareBlocks = useMemo(
    () =>
      compare.map((item: string, index: number) => (
        <Grid
          key={`ComparationSection-${index}`}
          css={{ paddingLeft: 0 }}
          sm={6}
          xs={12}
          justify={"flex-start"}
        >
          <CodeBlock text={item} />
        </Grid>
      )),
    [compare]
  );

  return (
    <InView as="section" className="inview-section" onChange={setIsVisible}>
      <Section css={{ zIndex: "$10" }}>
        {children}
        <Grid.Container gap={2} justify={"flex-start"}>
          {generateCompareBlocks}
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default ComparationSection;

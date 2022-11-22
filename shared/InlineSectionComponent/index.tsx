import React, { memo, useMemo } from "react";
import { Text, Grid } from "@nextui-org/react";
import { MainInterfaces } from "@types";
import { TextEntry } from "@components";

export const InlineSectionComponent = (
  props: MainInterfaces.IInlineSection.Entries & {
    reverse?: boolean;
    fullWidth?: boolean;
  }
) => {
  const ColWithContent = ({
    content,
  }: {
    content: MainInterfaces.IInlineSection.Entries;
  }) => {
    if (!content) return <></>;

    return (
      <Grid.Container
        justify={props.fullWidth ? "center" : "space-between"}
        alignItems="center"
        direction="row"
      >
        <Grid>
          <Text
            h1
            weight="bold"
            css={{ textAlign: props.fullWidth ? "center" : "left" }}
          >
            {content.title.map((item) => (
              <TextEntry key={item.key || item.text} {...item} />
            ))}
          </Text>
          <Text h3 css={{ textAlign: props.fullWidth ? "center" : "left" }}>
            {content.subtitle.map((item) => (
              <TextEntry key={item.key || item.text} {...item} />
            ))}
          </Text>
          <Grid>{content.jsx}</Grid>
        </Grid>
      </Grid.Container>
    );
  };

  const blockWidth = useMemo(() => props.fullWidth ? 12 : 5, [props.fullWidth]);

  return (
    <Grid.Container
      justify="space-between"
      alignItems={"flex-start"}
      direction={props.reverse ? "row-reverse" : "row"}
    >
      <Grid lg={blockWidth}>
        <ColWithContent content={props} />
      </Grid>
      <Grid lg={blockWidth}>{props.rightJsx}</Grid>
    </Grid.Container>
  );
};

export default memo(InlineSectionComponent);

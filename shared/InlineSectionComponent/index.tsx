import React, { memo } from "react";
import { Text, Grid } from "@nextui-org/react";
import { MainInterfaces } from "@types";
import { TextEntry } from "@components";

export const InlineSectionComponent = (
  props: MainInterfaces.IInlineSection.Entries
) => {
  const ColWithContent = ({
    content,
  }: {
    content: MainInterfaces.IInlineSection.Entries;
  }) => {
    if (!content) return <></>;

    return (
      <Grid.Container
        justify="space-between"
        alignItems="center"
        direction="row"
      >
        <Grid>
          <Text h1 weight="bold">
            {content.title.map((item) => (
              <TextEntry key={item.key || item.text} {...item} />
            ))}
          </Text>
          <Text h3>
            {content.subtitle.map((item) => (
              <TextEntry key={item.key || item.text} {...item} />
            ))}
          </Text>
          <Grid>{content.jsx}</Grid>
        </Grid>
      </Grid.Container>
    );
  };

  return (
    <Grid.Container
      justify="space-between"
      alignItems="flex-start"
      direction="row"
    >
      <Grid lg={5}>
        <ColWithContent content={props} />
      </Grid>
      <Grid lg={5}>{props.rightJsx}</Grid>
    </Grid.Container>
  );
};

export default memo(InlineSectionComponent);

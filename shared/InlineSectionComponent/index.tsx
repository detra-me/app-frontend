import React, { memo } from "react";
import { Row, Col, Text } from "@nextui-org/react";
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
      <Col span={6}>
        <Text h1 size={48} weight="bold">
          {content.title.map((item) => (
            <TextEntry key={item.key || item.text} {...item} />
          ))}
        </Text>
        <Text h3>
          {content.subtitle.map((item) => (
            <TextEntry key={item.key || item.text} {...item} />
          ))}
        </Text>
        {content.jsx}
      </Col>
    );
  };

  return (
    <Row justify="space-between" align="center">
      <ColWithContent content={props} />
      <Col span={6}>{props.rightJsx}</Col>
    </Row>
  );
};

export default memo(InlineSectionComponent);

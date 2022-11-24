import { Text } from "@nextui-org/react";
import { MainInterfaces } from "@types";
import { memo } from "react";

const prepareTextCss = ({
  color,
  gradient,
}: {
  color?: string;
  gradient?: string;
}) => {
  const css: { color?: string; textGradient?: string } = {
    color: color,
    textGradient: gradient,
  };
  if (!gradient) delete css["textGradient"];
  if (!color) delete css["color"];

  return css;
};

export const TextEntry = ({
  text,
  color,
  gradient,
  props,
}: MainInterfaces.IInlineSection.Entry) => (
  <Text span>
    <Text css={prepareTextCss({ color, gradient })} span {...props}>
      {text}
    </Text>
    <Text span> </Text>
  </Text>
);

export default memo(TextEntry);

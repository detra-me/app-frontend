import React from "react";
import { Container, CSS } from "@nextui-org/react";

export interface Props {
  css?: CSS;
  containerCss?: CSS;
}

const Footer: React.FC<Props> = ({ css, containerCss }) => {
  return (
    <Container
      fluid
      className="footer__container"
      css={{
        zIndex: "$1",
        padding: "$md $sm",
        "@xsMax": {
          padding: "$sm $xs",
        },
        ...containerCss,
      }}
      gap={2}
    ></Container>
  );
};

export default Footer;

import React, { memo, useMemo } from "react";
import { Button, Grid, Snippet } from "@nextui-org/react";
import { MainInterfaces } from "@types";

export const ButtonWithSnippetComponent = ({
  buttonTitle,
  snippetText,
  snippetJsx,
  buttonColor,
}: MainInterfaces.IButtonWithSnipped) => {
  const prepareSnippetCss = useMemo(() => {
    return {
      borderRadius: "$pill",
      height: "$space$14",
      py: 0,
      transition: "opacity 0.3s ease-in-out",
      dflex: "center",
      boxShadow: "$sm",
      bg: "$backgroundContrast",
      "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":
        {
          bf: "saturate(180%) blur(10px)",
          bg: "$backgroundBlur",
        },
      "@xsMax": {
        width: "100%",
      },
    };
  }, []);

  return (
    <Grid.Container gap={2} justify="flex-start">
      {snippetJsx && (
        <Grid css={{ paddingLeft: 0 }}>
          {snippetJsx}
        </Grid>
      )}
      <Grid css={{ paddingLeft: 0 }} sm={3.5}>
        <Button css={{ backgroundColor: buttonColor ?? "$blue600" }} auto>
          {buttonTitle}
        </Button>
      </Grid>
      {snippetText && (
        <Grid sm={8.5} css={{ paddingLeft: 0 }}>
          <Snippet css={prepareSnippetCss}>{snippetText}</Snippet>
        </Grid>
      )}
    </Grid.Container>
  );
};

export default memo(ButtonWithSnippetComponent);

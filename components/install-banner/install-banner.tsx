import React from "react";
import { useRouter } from "next/router";
import { FeaturesGrid } from "@components";
import { Button, Container, Grid, Snippet } from "@nextui-org/react";
import { StyledCardBlur, Title, Subtitle } from "@primitives";
import { BANNER_MAIN, BANNER_SUGGESTIONS } from "@utils/labels/Main";
import { ButtonWithSnippet } from "@shared";

const InstallBanner: React.FC = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push("docs/guide/getting-started");
  };

  return (
    <StyledCardBlur
      css={{
        br: 0,
        p: 0,
        dflex: "center",
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        ml: "-50vw",
        mr: "-50vw",
        border: "1.5px solid $border",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
      }}
    >
      <Container
        lg
        css={{
          ml: 0,
          mr: 0,
          py: "$8",
          "@xsMax": {
            px: "$4",
          },
        }}
      >
        <Grid.Container gap={2} css={{padding: 0}}>
          <Grid direction="column" justify="center" md={6} xs={12}>
            {BANNER_MAIN.title}
            <Subtitle
              css={{
                my: "$2",
                fs: "1.2rem",
                maxW: "100%",
                "@xsMax": {
                  my: "$8",
                },
              }}
            >
              {BANNER_MAIN.subtitle}
            </Subtitle>
            <ButtonWithSnippet buttonTitle="Get started" buttonColor={'$green600'}/>
          </Grid>
          <Grid css={{ py: "$10" }} md={6} xs={12}>
            <FeaturesGrid
              features={BANNER_SUGGESTIONS}
              itemCss={{
                bg: "rgba(255, 255, 255, 0)",
              }}
              lg={6}
              sm={6}
              xs={12}
            />
          </Grid>
        </Grid.Container>
      </Container>
    </StyledCardBlur>
  );
};

export default InstallBanner;

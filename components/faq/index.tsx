import { StyledFlex, TextEntry } from "@components";
import { Button, Divider, Grid, Spacer, Text } from "@nextui-org/react";
import React, { memo } from "react";

export const Faq = () => {
  return (
    <>
      <StyledFlex
        css={{
          paddingBottom: "$20",
          gap: "$18",
          px: "$6",
        }}
        direction={"column"}
      >
        <StyledFlex align={"center"} direction={"column"}>
          <Text h1 size={48} weight="bold">
            <TextEntry text={"You Have Questions?"} />
          </Text>
          <Text h3>
            <TextEntry
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum, nisl ut aliquam lacinia, nisl nisl aliquet aliquet"
              }
              color={"$gray600"}
            />
          </Text>
          <Spacer y={1} />
          <Grid.Container
            gap={1}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid>
              <Button
                css={{
                  background:
                    "linear-gradient(45deg, $purple600 -20%, $pink600 100%)",
                }}
              >
                Read Lite Papper
              </Button>
            </Grid>
            <Grid>
              <Button color="success">Read our Docs</Button>
            </Grid>
          </Grid.Container>
        </StyledFlex>
      </StyledFlex>
      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};

export default memo(Faq);

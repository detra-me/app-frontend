// @ts-nocheck

import { StyledBox, StyledFlex, CheckIcon } from "@components";
import { Card, Button, Divider, Text } from "@nextui-org/react";
import { memo } from "react";

export const PlanBody = memo<{ price; options }>(function PlanBody({
  price,
  options,
}) {
  return (
    <Card.Body css={{ py: "$2" }}>
      <Text css={{ display: "contents" }} h2>
        ${price}
      </Text>
      <Text css={{ display: "contents", color: "$accents8" }}>/mo</Text>
      <Button css={{ mt: "$7", mb: "$12" }}>Get Started</Button>

      <Divider />
      <StyledBox as={"ul"}>
        {options.map((option) => (
          <StyledFlex
            key={option.key}
            as={"li"}
            css={{ py: "$2", gap: "$2" }}
            align={"center"}
          >
            <CheckIcon />
            <Text span css={{ color: "$accents8" }}>
              {option.label}
            </Text>
          </StyledFlex>
        ))}
      </StyledBox>
    </Card.Body>
  );
});

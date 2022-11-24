/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck

import { CheckIcon, StyledBox, StyledFlex, TextEntry } from "@components";
import { Button, Card, Divider, Grid, Text } from "@nextui-org/react";
import { PRICING } from "@utils/labels/Main";
import React, { memo, useCallback } from "react";
import { PlanBody } from "./body";
import { PlanTitle } from "./title";

export const Plans = () => {
  const { plans: plans = [], title, subtitle } = PRICING;

  const PlanRows = useCallback(() => {
    return (
      <Grid.Container gap={2} justify="space-between" alignItems={'flex-start'} direction="row">
        {plans.map((plan) => (
          <Plan key={plan.key} planOptions={plan.options} />
        ))}
      </Grid.Container>
    );
  }, [plans]);

  const Plan = useCallback(
    ({ planOptions }) => {
      const {
        name,
        description,
        params: { price, options },
      } = planOptions;

      return (
        <Grid>
          <Card css={{ p: "$6", mw: "400px" }}>
            <PlanTitle name={name} description={description} />
            <PlanBody price={price} options={options} />
          </Card>
        </Grid>
      );
    },
    [plans]
  );

  return (
    <Grid>
      <StyledFlex
        css={{ py: "$20", gap: "1rem", px: "$6" }}
        justify={"center"}
        wrap={"wrap"}
        direction={"column"}
        align={"center"}
      >
        <StyledFlex direction={"column"} align={"center"}>
          <Text h1 size={48} weight="bold">
            <TextEntry text={title} />
          </Text>
          <Text h3>
            <TextEntry text={subtitle} color={"$gray600"} />
          </Text>
        </StyledFlex>
        <PlanRows />
      </StyledFlex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </Grid>
  );
};

export default memo(Plans);

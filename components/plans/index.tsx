import { CheckIcon, StyledBox, StyledFlex, TextEntry } from "@components";
import { Button, Card, Divider, Grid, Text } from "@nextui-org/react";
import React, { memo } from "react";
import { PlanBody } from "./body";
import { PlanTitle } from "./title";

export const Plan = ({ planOptions }) => {
  const {
    name,
    description,
    params: { price, options },
  } = planOptions;

  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <PlanTitle name={name} description={description} />
      <PlanBody price={price} options={options} />
    </Card>
  );
};

export const Plans = ({ pricing }) => {
  const { plans: plans = [], title, subtitle } = pricing;

  return (
    <>
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

        <StyledFlex
          css={{ gap: "2rem", width: "100%" }}
          wrap={"wrap"}
          justify={"center"}
        >
          {(plans || []).map((plan) => (
            <Plan key={plan.key} planOptions={plan.options} />
          ))}
        </StyledFlex>
      </StyledFlex>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};

export default Plans;

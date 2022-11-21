import { Card, Grid, Text } from "@nextui-org/react";
import { memo } from "react";

export const PlanTitle = memo<{ name; description }>(function PlanTitle({
  name,
  description,
}) {
  return (
    <Card.Header>
      <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={12}>
          <Text h4 css={{ lineHeight: "$xs" }}>
            {name}
          </Text>
        </Grid>
        <Grid xs={12}>
          <Text css={{ color: "$accents8" }}>{description}</Text>
        </Grid>
      </Grid.Container>
    </Card.Header>
  );
});

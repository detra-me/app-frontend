import React from "react";
import { Grid, Text, Row, Spacer } from "@nextui-org/react";
import { Twitter, Discord, Github, StyledFlex, TextEntry } from "@components";
import withDefaults from "@utils/with-defaults";

import { StyledCommunityCard } from "./styles";
import { COMMUNITY_SUGGESTIONS } from "@utils/labels/Main";

export interface CommunityProps {
  twitter?: string;
  github?: string;
  discord?: string;
}

const defaultProps = {
  twitter: "https://twitter.com/",
  github: "https://github.com/detra/",
  discord: "https://discord.gg/",
};

const Community: React.FC<CommunityProps> = ({ twitter, github, discord }) => {
  return (
    <Grid.Container css={{ position: "relative" }} gap={2} justify="center">
      <Grid css={{ mb: "$10" }} direction="column" xs={12}>
        <StyledFlex direction={"column"} align={"center"}>
          <Text h1 size={48} weight="bold">
            <TextEntry text={COMMUNITY_SUGGESTIONS.title} />
          </Text>
          <Text h3>
            <TextEntry text={COMMUNITY_SUGGESTIONS.subtitle} color={"$gray600"} />
          </Text>
        </StyledFlex>
      </Grid>
      <Grid justify="center" md={3} sm={6} xs={12}>
        <StyledCommunityCard
          href={twitter}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Row align="center" justify="flex-start">
            <Twitter fill="#00ACEE" size={30} />
            <Spacer x={0.4} />
            <Text h5>Twitter</Text>
          </Row>
          <Spacer y={0.5} />
          <Row align="center" justify="flex-start">
            <Text css={{ color: "$accents8", textAlign: "left" }}>
              {COMMUNITY_SUGGESTIONS.twitter}
            </Text>
          </Row>
        </StyledCommunityCard>
      </Grid>
      <Grid justify="center" md={3} sm={6} xs={12}>
        <StyledCommunityCard
          href={discord}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Row align="center" justify="flex-start">
            <Discord fill="#7289DA" size={30} />
            <Spacer x={0.4} />
            <Text h5>Discord</Text>
          </Row>
          <Spacer y={0.5} />
          <Row align="center" justify="flex-start">
            <Text css={{ color: "$accents8" }}>
              {COMMUNITY_SUGGESTIONS.discord}
            </Text>
          </Row>
        </StyledCommunityCard>
      </Grid>
      <Grid justify="center" md={3} sm={6} xs={12}>
        <StyledCommunityCard
          href={github}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Row align="center" justify="flex-start">
            <Github className="github-icon" fill="#E7E7E7" size={30} />
            <Spacer x={0.4} />
            <Text h5>Telegram</Text>
          </Row>
          <Spacer y={0.5} />
          <Row align="center" justify="flex-start">
            <Text css={{ color: "$accents8" }}>
              {COMMUNITY_SUGGESTIONS.telegram}
            </Text>
          </Row>
        </StyledCommunityCard>
      </Grid>
    </Grid.Container>
  );
};

export default withDefaults(Community, defaultProps);

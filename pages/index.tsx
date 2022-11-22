import type { NextPage } from "next";

import DefaultLayout from "@layouts/default";
import {
  Community,
  DashboardImage,
  Email,
  FAQ,
  FeaturesGrid,
  Hero,
  InstallBanner,
  Plans,
  SparkSection,
  StyledBox,
} from "@components";
import {
  FIRST_SUBTITLE,
  FIRST_TITLE,
  LANDING_HERO,
  PRICING,
  TOP_FEATURES,
} from "@utils/labels/Main";
import { ButtonWithSnippet } from "@shared";
import { Section } from "@primitives";
import { Spacer } from "@nextui-org/react";
import { memo } from "react";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Section>
        <Hero
          jsx={
            <ButtonWithSnippet
              buttonTitle={"Start Free Trial"}
              snippetJsx={<Email />}
            />
          }
          title={FIRST_TITLE}
          subtitle={FIRST_SUBTITLE}
        />
      </Section>
      <Spacer y={2} />
      <SparkSection>
        <FeaturesGrid features={TOP_FEATURES} />
      </SparkSection>
      <Spacer y={2} />
      <SparkSection>
        <Hero
          title={LANDING_HERO[0].title}
          subtitle={LANDING_HERO[0].subtitle}
          jsx={LANDING_HERO[0].jsx}
          reverse
        />
      </SparkSection>
      <Spacer y={2} />
      <SparkSection>
        <Hero {...LANDING_HERO[1]} />
      </SparkSection>
      <Spacer y={2} />
      <SparkSection>
        <InstallBanner />
      </SparkSection>
      <Spacer y={2} />
      <SparkSection>
        <Hero
          {...LANDING_HERO[2]}
          fullWidth
          rightJsx={
            <StyledBox>
              <DashboardImage />
            </StyledBox>
          }
        />
      </SparkSection>
      <Spacer y={1} />
      <SparkSection>
        <FAQ />
      </SparkSection>
      <SparkSection>
        <Plans pricing={PRICING} />
      </SparkSection>
      <SparkSection>
        <Community />
      </SparkSection>
    </DefaultLayout>
  );
};

export default memo(Home);

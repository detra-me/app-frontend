import type { NextPage } from "next";

import DefaultLayout from "@layouts/default";
import {
  Community,
  Email,
  FAQ,
  FeaturesGrid,
  Hero,
  InstallBanner,
  Plans,
  SparkSection,
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
        />
      </SparkSection>
      <Spacer y={2} />
      <SparkSection>
        <Hero
          {...LANDING_HERO[1]}
        />
      </SparkSection>
      <Spacer y={2} />
      <SparkSection>
        <InstallBanner />
      </SparkSection>
      <Spacer y={2} />
      <SparkSection>
        <Hero {...LANDING_HERO[2]} />
      </SparkSection>
      <Spacer y={1} />
      <SparkSection>
        <Plans pricing={PRICING} />
      </SparkSection>
      <SparkSection>
        <FAQ />
      </SparkSection>
      <SparkSection>
        <Community />
      </SparkSection>
    </DefaultLayout>
  );
};

export default Home;

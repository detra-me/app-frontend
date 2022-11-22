import * as React from "react";
import { Title } from "@primitives";
import { PLANS } from "../constants/plans";
import { STATUSES } from "@utils/constants/statuses";
import dynamic from "next/dynamic";

const Devices = dynamic(() => import("../../components/icons/devices"));
const Flash = dynamic(() => import("../../components/icons/flash"));
const Moon = dynamic(() => import("../../components/icons/moon"));
const NextJsLogo = dynamic(() => import("../../components/icons/nextjs-logo"));
const Note = dynamic(() => import("../../components/icons/note"));
const Magic = dynamic(() => import("../../components/icons/magic"));

export const RELEASE_STATUS = STATUSES.alpha;

export const CODE_BLOCK_EX = `<SparkSection>\n   <FeaturesGrid features={TOP_FEATURES} />\n   <FeaturesGrid features={TOP_FEATURES} />\n   <FeaturesGrid features={TOP_FEATURES} />\n   <FeaturesGrid features={TOP_FEATURES} />\n</SparkSection>`;

export const FIRST_TITLE = [
  { text: "We want to make information transfer" },
  {
    text: "fast",
    gradient: "45deg, $purple600 -20%, $pink600 100%",
  },
  { text: "and" },
  {
    text: "secure",
    color: "$green600",
  },
  {
    text: "using blockchain technology.",
  },
];

export const FIRST_SUBTITLE = [
  { text: "Decentralized information transfer protocol", color: "$gray600" },
];

export const TOP_FEATURES = [
  {
    title: "Secure sharing",
    description:
      "Use end-to-end encryption methods provided by the blockchain signature to securely sharing your data or information.",
    icon: <Magic fill="#FF4ECD" />,
  },
  {
    title: "Decentralized data storage",
    description:
      "Use advanced technologies for storing information, such as blockchain storage or IPFS clusters.",
    icon: <Flash fill="#FF4ECD" />,
  },
  {
    title: "Share to earn",
    description:
      "Share your content with other people and set a price for getting this content in cryptocurrency.",
    icon: <Moon fill="#FF4ECD" />,
  },
  {
    title: "Convenience",
    description: "Manage your content using the convenient dashboard panel.",
    icon: <Devices fill="#FF4ECD" />,
  },
];

const SECURE_SHARING_TITLE = [
  { text: "Blockchain can provide one of the" },
  {
    text: "most secure",
    color: "$blue600",
  },
  { text: "methods of" },
  {
    text: "data transfer.",
    gradient: "rgb(243, 101, 52) 25%, rgb(246, 159, 39) 100%",
  },
];

const SECURE_SHARING_SUBTITLE = [
  {
    text: "Using our service, you can share information with all the benefits of end-2-end encryption",
    color: "$gray600",
  },
];

const SHARE_TO_EARN_TITLE = [
  { text: "Share", gradient: "45deg, $purple600 -20%, $pink600 100%" },
  {
    text: "content worldwide and earn crypto",
  },
];

const SHARE_TO_EARN_SUBTITLE = [
  {
    text: "This function can be useful for selling author's information. Each user can set the desired price of their work and share it with their audience.",
    color: "$gray600",
  },
];

const CONVIENT_DASHBOARD_TITLE = [
  { text: "Manage your content using" },
  {
    text: "convenient",
    color: "$green600",
  },
  { text: "dashboard panel." },
];

const CONVIENT_DASHBOARD_SUBTITLE = [
  {
    text: "We have prepared a convenient personal account where you can track the statistics of downloads, sales and viewing your information. Everything is the best for you - from a convenient information sharing panel to informative reports.",
    color: "$gray600",
  },
];

export const LANDING_HERO = [
  {
    title: SECURE_SHARING_TITLE,
    subtitle: SECURE_SHARING_SUBTITLE,
    jsx: <></>,
    rightJsx: <></>,
  },
  {
    title: SHARE_TO_EARN_TITLE,
    subtitle: SHARE_TO_EARN_SUBTITLE,
    jsx: <></>,
    rightJsx: <></>,
  },
  {
    title: CONVIENT_DASHBOARD_TITLE,
    subtitle: CONVIENT_DASHBOARD_SUBTITLE,
    jsx: <></>,
    rightJsx: <></>,
  },
];

export const BANNER_MAIN = {
  title: (
    <>
      <Title css={{ fontSize: "2.4rem" }}>Let&apos;s make the Web</Title>
      <Title color="violet" css={{ fontSize: "2.4rem" }}>
        Better
      </Title>
    </>
  ),
  subtitle: "Try it for yourself, and share with your friends!",
};

export const BANNER_SUGGESTIONS = [
  {
    title: "Getting Started",
    description:
      "Detra will help you share information safely and quickly using blockchain technology.",
    icon: <Note fill="#FF4ECD" />,
    href: "/docs/guide/getting-started",
  },
  {
    title: "Permanent store",
    description: "You can permanently store your information in the blockchain",
    icon: <NextJsLogo fill="#FF4ECD" />,
    href: "/docs/guide/nextui-plus-nextjs",
  },
];

export const COMMUNITY_SUGGESTIONS = {
  title: "Community",
  subtitle: "We will be glad to see you in our community",
  twitter: "For announcements, tips and general information.",
  discord:
    "To become a part of the community, share information, discuss and ask",
  telegram: "For announcements, tips and general information. Support.",
};

export const PRICING = {
  title: "Transparent pricing.",
  subtitle:
    "With Detra, your costs will always be predictable. Try Detra for free today.",
  plans: PLANS,
};

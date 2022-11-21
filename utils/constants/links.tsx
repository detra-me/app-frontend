import { Twitter, Discord, Github } from "@components";
import { SITE_URL } from "@utils/constants/Main";

export const MAIN_LINK = '/';
export const GATEWAY_LINK = '/gateway';
export const START_TRIAL = '/'; // TODO

// Subdomain
export const DASHBOARD_LINK = `https://dashboard.${SITE_URL}`;
export const DOCS_LINK = `https://docs.${SITE_URL}`;

export const LINKS = {
  dashboard: { href: DASHBOARD_LINK },
  gateway: { href: GATEWAY_LINK, pathname: 'gateway' },
  trial: { href: START_TRIAL, pathname: '#' },
  main: { href: MAIN_LINK, pathname: '#' },
  docs: { href: DOCS_LINK },
};

// Socials

export const TWITTER = "https://twitter.com";
export const DISCORD = "https://discord.com";
export const TELEGRAM = "https://telegram.com";
export const GITHUB = "https://github.com/detra-me";

export const SOCIALS = {
  twitter: { href: TWITTER, logo: <Twitter size={24} /> },
  discord: { href: DISCORD, logo: <Discord size={24} /> },
  telegram: { href: TELEGRAM, logo: <></> },
  github: { href: GITHUB, logo: <Github size={24} /> }
}

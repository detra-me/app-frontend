import React from "react";
import Head from "next/head";
// import withDefaults from "@utils/with-defaults";

// import { TWITTER_USER_NAME, SITE_URL } from "@lib/constants";
import { useTheme } from "@nextui-org/react";
import withDefaults from "@utils/with-defaults";
import { SITE_TITLE, SITE_URL } from "@utils/constants/Main";

export interface HeaderProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const defaultProps = {
  description: "Make web better using crypto encryption",
  image: "/twitter-cards/nextui.jpeg",
};

if (global.document) {
  const info = [`Let's make the Web better 🚀`];

  for (const message of info) {
    // eslint-disable-next-line no-console
    console.log(message);
  }
}

const Header: React.FC<HeaderProps> = ({ title, description, image, url }) => {
  const { theme, isDark } = useTheme();

  return (
    <Head>
      <title>{title}</title>
      <meta
        content={image ? "summary_large_image" : "summary"}
        name="twitter:card"
      />
      {image && (
        <meta
          content={image.startsWith("https://") ? image : `${SITE_URL}${image}`}
          property="og:image"
        />
      )} 
      <meta key="title" content={SITE_TITLE} property="og:title" />
      {url && <meta content={url} property="og:url" />}
      <meta content={description} property="og:description" />
      <meta content={description} name="description" />
      <meta
        content={
          isDark ? theme?.colors?.black?.value : theme?.colors?.white?.value
        }
        name="msapplication-TileColor"
      />
      <meta
        content={
          isDark ? theme?.colors?.black?.value : theme?.colors?.white?.value
        }
        name="theme-color"
      />
      <meta
        key="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
      <link href="/manifest.json" rel="manifest" />
      <link
        href="/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        color={
          isDark ? theme?.colors?.black?.value : theme?.colors?.white?.value
        }
        href="/safari-pinned-tab.svg"
        rel="mask-icon"
      />
    </Head>
  );
};

export default withDefaults(Header, defaultProps);

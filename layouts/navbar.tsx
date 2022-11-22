import React, { useState, useEffect, memo } from "react";
import { Logo, MenuToggle, Badge, ThemeToggle, NavLink } from "@components";
import { Box } from "@primitives";
import {
  Spacer,
  Container,
  useBodyScroll,
  Grid,
  useTheme,
  ThemeType,
} from "@nextui-org/react";
// import { useRouter } from "next/router";
import { useMediaQuery } from "@hooks/use-media-query";

import { StyledNavContainer, StyledNavMainContainer } from "./styles";
import { ConnectWallet } from "@thirdweb-dev/react";
import { LINKS, SOCIALS } from "@utils/constants/links";
import { RELEASE_STATUS } from "@utils/labels/Main";

export interface Props {
  routes?: [];
  hasNotify?: boolean;
  isHome?: boolean;
}

const Navbar = ({ isHome, hasNotify }: any) => {
  // return (<></>)
  const [expanded, setExpanded] = useState(true);
  // const router = useRouter();
  const isMobile = useMediaQuery(960);
  const [, setBodyHidden] = useBodyScroll(null, { scrollLayer: true });
  const [scrollPosition, setScrollPosition] = useState(0);

  const detached = hasNotify ? scrollPosition > 30 : scrollPosition > 0;

  useEffect(() => {
    setScrollPosition(
      (typeof window !== "undefined" && window.pageYOffset) || 0
    );
    window.addEventListener("scroll", onScroll.bind(this));

    return () => {
      window.removeEventListener("scroll", onScroll.bind(this));
    };
  }, []);

  const onScroll = () => {
    requestAnimationFrame(() => {
      setScrollPosition(window.pageYOffset);
    });
  };

  useEffect(() => {
    if (!isMobile) {
      setExpanded(false);
      setBodyHidden(false);
    }
  }, [isMobile]);

  const onToggleNavigation = () => {
    setExpanded(!expanded);
    isMobile && setBodyHidden(!expanded);
  };

  const showBlur = !!expanded || !!detached || isHome;

  const LogoRow = memo(function LogoRow() {
    return (
      <Grid.Container alignItems="center" justify="flex-start">
        <NavLink href={LINKS.main.href} pathname="/" selected={false}>
          <Logo
            auto
            css={{
              cursor: "pointer",
              transition: "$default",
            }}
          />
          <Spacer x={0.4} />
          <Badge
            solid
            css={{
              px: "$4",
              "@mdMax": {
                display: "none",
              },
            }}
            type="secondary"
          >
            {RELEASE_STATUS}
          </Badge>
        </NavLink>
      </Grid.Container>
    );
  });

  const LinksRow = memo(function LinksRow() {
    return (
      <Grid.Container gap={2} alignItems="center" justify="flex-start">
        <Spacer x={1} y={0} />
        <NavLink href={LINKS.docs.href} title={"Docs"} selected={false} />
        <Spacer x={1} y={0} />
        <NavLink
          href={LINKS.dashboard.href}
          title={"Dashboard"}
          selected={false}
        />
        <Spacer x={1} y={0} />
        <NavLink
          href={LINKS.gateway.href}
          pathname={LINKS.gateway.pathname}
          title={"Gateway"}
          selected={false}
        />
      </Grid.Container>
    );
  });

  const SocialsRow = memo(function SocialsRow() {
    return (
      <Grid.Container
        gap={1}
        wrap={"nowrap"}
        alignItems="center"
        justify="flex-start"
      >
        <Grid>
          <NavLink
            href={SOCIALS.twitter.href}
            jsx={SOCIALS.twitter.logo}
            selected={false}
            css={{
              "& svg": {
                fill: "$colors$accents6",
              },
            }}
          />
        </Grid>
        <Grid>
          <NavLink
            href={SOCIALS.discord.href}
            jsx={SOCIALS.discord.logo}
            selected={false}
            css={{
              "& svg": {
                fill: "$colors$accents6",
              },
            }}
          />
        </Grid>
        <Grid>
          <NavLink
            href={SOCIALS.github.href}
            jsx={SOCIALS.github.logo}
            selected={false}
            css={{
              "& svg": {
                fill: "$colors$accents6",
              },
            }}
          />
        </Grid>
        <Grid>
          <NavLink
            jsx={<ThemeToggle />}
            selected={false}
            css={{
              "& svg": {
                fill: "$colors$accents6",
              },
            }}
          />
        </Grid>
      </Grid.Container>
    );
  });

  const ButtonsRow = memo(function ButtonsRow() {
    return (
      <Grid.Container
        gap={1}
        alignItems="center"
        justify="flex-end"
        wrap={"nowrap"}
        css={{
          "@lgMax": {
            maxWidth: "100%",
          },
        }}
      >
        <Grid xs={0} sm={5} md={5} lg={5}>
          <SocialsRow />
        </Grid>
        <Grid xs={12} sm={7} md={7} lg={7}>
          <ConnectWallet colorMode={useTheme().type as ThemeType} />
        </Grid>
      </Grid.Container>
    );
  });

  const MobileMenuBoxRow = memo(function MobileMenuBoxRow() {
    return (
      <Grid.Container justify="center" alignItems="center">
        <Box
          css={{
            height: "100%",
            minHeight: "40px",
            minWidth: "30px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          onClick={onToggleNavigation}
        >
          <MenuToggle expanded={expanded} />
        </Box>
      </Grid.Container>
    );
  });

  return (
    <StyledNavMainContainer id="navbar-container">
      <StyledNavContainer detached={detached} showBlur={showBlur}>
        <Container
          alignItems="center"
          as="nav"
          display="flex"
          lg={true}
          wrap="nowrap"
        >
          <Grid.Container
            gap={0}
            wrap={"nowrap"}
            alignItems="center"
            justify="flex-start"
          >
            <Grid xs={12} sm={5.5} md={5.5} lg={6}>
              <LogoRow />
            </Grid>
            <Grid xs={0} sm={6} md={6} lg={7}>
              <LinksRow />
            </Grid>
            <Grid
              css={{
                "@mdMax": {
                  maxWidth: "100%",
                },
                "@media (max-width: 480px)": {
                  display: "none",
                },
              }}
            >
              <ButtonsRow />
            </Grid>
            <Grid xs={1} sm={0} lg={0}>
              <MobileMenuBoxRow />
            </Grid>
          </Grid.Container>
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import {
  Logo,
  MenuToggle,
  Badge,
  Twitter,
  Discord,
  Github,
  ThemeToggle,
  Heart,
  NavLink,
} from "@components";
import { Box } from "@primitives";
import NextLink from "next/link";
import {
  Row,
  Col,
  Spacer,
  Link,
  Button,
  Container,
  useBodyScroll,
  Grid,
  useTheme,
  ThemeType,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useMediaQuery } from "@hooks/use-media-query";

import { StyledNavContainer, StyledNavMainContainer } from "./styles";
import { ConnectWallet } from "@thirdweb-dev/react";

export interface Props {
  routes?: [];
  hasNotify?: boolean;
  isHome?: boolean;
}

const Navbar = ({ isHome, hasNotify, routes }: any) => {
  // return (<></>)
  const [expanded, setExpanded] = useState(true);
  const router = useRouter();
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
          <Col
            span={8}
            css={{
              "@mdMax": {
                width: "100%",
              },
            }}
          >
            <Row align="center" justify="flex-start">
              <NextLink href="/">
                <Link href="/">
                  <Logo
                    auto
                    css={{
                      cursor: "pointer",
                      transition: "$default",
                    }}
                  />
                </Link>
              </NextLink>
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
                Beta
              </Badge>
            </Row>
          </Col>
          <Col span={4} css={{ "@mdMax": { d: "none" } }}>
            <Row align="center" justify="center">
              <Spacer x={1} y={0} />
              <NavLink
                href="https://docs.detra.me"
                pathname={"docs"}
                title={"Docs"}
                selected={false}
              />
              <Spacer x={1} y={0} />
              <NavLink
                href="https://dashboard.detra.me"
                pathname={"dashboard"}
                title={"Dashboard"}
                selected={false}
              />
              <Spacer x={1} y={0} />
              <NavLink
                href="/gateway"
                pathname={"gateway"}
                title={"Gateway"}
                selected={false}
              />
            </Row>
          </Col>
          <Col>
            <Grid.Container gap={1} justify="flex-end" alignItems="center">
              <Grid>
                <NavLink
                  href="https://docs.detra.me"
                  pathname={"docs"}
                  jsx={<Twitter size={24} />}
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
                  href="https://docs.detra.me"
                  pathname={"docs"}
                  jsx={<Discord size={24} />}
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
                  href="https://docs.detra.me"
                  pathname={"docs"}
                  jsx={<Github size={24} />}
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
              <Grid>
                <ConnectWallet colorMode={useTheme().type as ThemeType}/>
              </Grid>
              <Grid>
                <Button
                  auto
                  color="error"
                  icon={<Heart fill="currentColor" filled />}
                  // eslint-disable-next-line react/no-children-prop
                  children={"Sponsor"}
                />
              </Grid>
            </Grid.Container>
          </Col>
          <Col
            css={{
              size: "100%",
              display: "none",
              "@mdMax": {
                display: "flex",
                justifyContent: "flex-end",
              },
            }}
          >
            <ThemeToggle css={{ m: "0" }} />
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
          </Col>
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  );
};

export default Navbar;

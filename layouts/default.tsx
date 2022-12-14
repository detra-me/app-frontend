import React, { useEffect, useState } from "react";
import { Container, Grid, Loading } from "@nextui-org/react";
// import {Route} from "@lib/docs/page";
// import {NotifyBanner} from "@components";

import Header from "./header";
// import Footer from "./footer";
import dynamic from "next/dynamic";
// import Navbar from "./navbar";

const Navbar = dynamic(() => import("./navbar"));
const Footer = dynamic(() => import("./footer"));

// export interface Props {
//   routes: Route[];
//   currentRoute?: Route;
//   tag?: string;
//   slug?: string;
// }

const DefaultLayout = ({ children, routes }: any) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });

  return (
    <div id="app-container">
      <Header />
      {/* <NotifyBanner href="/docs/components/navbar" text="Navbar component" /> */}
      <Grid css={{ display: loading ? "none" : "block" }}>
        <Navbar hasNotify isHome routes={routes} />
      </Grid>
      <Container
        as="main"
        css={{
          overflowX: "visible!important",
          position: "relative",
          minHeight: "100vh",
          "@mdMax": {
            overflowX: "hidden",
          },
        }}
        display="flex"
        id="main-container"
        alignItems="center"
        lg={true}
      >
        <Grid.Container
          css={{ height: "fit-content", display: loading ? "flex" : "none" }}
          justify="center"
          alignItems="center"
        >
          <Loading
            type="gradient"
            loadingCss={{
              $$loadingSize: "100px",
              $$loadingBorder: "10px",
            }}
          />
        </Grid.Container>
        <Grid css={{ display: loading ? "none" : "block" }}>{children}</Grid>
        <Footer />
      </Container>
    </div>
  );
};

export default DefaultLayout;

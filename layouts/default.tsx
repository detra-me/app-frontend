import React, { memo, ReactChild, useEffect, useState } from "react";
import { Container, Grid, Loading } from "@nextui-org/react";
// import {Route} from "@lib/docs/page";
// import {NotifyBanner} from "@components";

import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";
import loading from "@nextui-org/react/types/loading";

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
      <Navbar hasNotify isHome routes={routes} />
      <Container
        alignContent="space-between"
        as="main"
        css={{
          position: "relative",
          minHeight: "100vh",
          "@mdMax": {
            overflowX: "hidden",
          },
        }}
        display="flex"
        id="main-container"
        lg={true}
      >
        <Grid.Container
          css={{ height: "40rem", display: loading ? "flex" : "none" }}
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

import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { SUPPORTED_CHANS } from "../utils/constants/Main";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import globalStyles from "../styles/globalStyles";
import { darkTheme, lightTheme } from "@theme/shared";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function AppFrontend({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      storageKey="theme-mode"
      enableSystem={true}
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <ThirdwebProvider
          desiredChainId={activeChainId}
          autoConnect
          supportedChains={SUPPORTED_CHANS}
        >
          <Component {...pageProps} />
        </ThirdwebProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default AppFrontend;

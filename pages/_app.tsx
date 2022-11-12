import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { SUPPORTED_CHANS } from "../utils/constants/Main";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function AppFrontend({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      autoConnect
      supportedChains={SUPPORTED_CHANS}
      
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default AppFrontend;

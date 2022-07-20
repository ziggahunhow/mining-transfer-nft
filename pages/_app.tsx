import * as React from "react";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import "../styles/globals.css";

// Imports
import { chain, createClient, WagmiConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
// import { alchemyProvider } from "wagmi/providers/alchemy";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  Chain,
} from "@rainbow-me/rainbowkit";

import { useIsMounted } from "../hooks";

// Get environment variables
// const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID as string;
// const infuraId = process.env.NEXT_PUBLIC_INFURA_ID as string;

const chainsConfigured: Chain[] = [
  {
    id: 18,
    name: "Thunder-testnet",
    nativeCurrency: {
      decimals: 18,
      name: "Thunder Token",
      symbol: "TT",
    },
    network: "thunder-testnet",
    rpcUrls: {
      default: "https://testnet-rpc.thundercore.com",
    },
    testnet: true,
  },
  {
    id: 108,
    name: "Thunder-mainnet",
    nativeCurrency: {
      decimals: 108,
      name: "Thunder Token",
      symbol: "TT",
    },
    network: "thunder-mainnet",
    rpcUrls: {
      default: "https://mainnet-rpc.thundercore.com",
    },
    testnet: false,
  },
];

const { chains, provider } = configureChains(chainsConfigured, [
  // alchemyProvider({ alchemyId }),
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: "Mining Transfer",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = ({ Component, pageProps }: AppProps) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
        <NextHead>
          <title>Mining Transfer</title>
        </NextHead>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;

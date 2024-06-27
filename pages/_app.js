import "../styles/globals.css";
// import { ethers, providers } from "ethers";
import merge from "lodash/merge";

import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
// import { infuraProvider } from "ethers.providers"
const API_KEY = process.env.SEPOLIA_RPC;
// const infuraProvider = new ethers.providers.InfuraProvider("sepolia",API_KEY);


const { chains, provider } = configureChains(
  [chain.sepolia],
  [alchemyProvider({ apiKey: API_KEY }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "Custom Dex",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
export default MyApp;


import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { AppProps } from "next/app";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { defineChain, type Chain } from "viem";
import { createConfig, http, WagmiProvider } from "wagmi";

import Layout from "../components/Layout";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const teaAssam = defineChain({
    id: 10218,
    name: 'tea-sepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'Tea',
        symbol: 'TEA',
    },
    rpcUrls: {
        public: {
            http: ['https://tea-sepolia.g.alchemy.com/public'],
        },
        default: {
            http: ['https://tea-sepolia.g.alchemy.com/public'],
        },
    },
    blockExplorers: {
        default: {
            name: 'tea-sepolia',
            url: 'https://sepolia.tea.xyz',
        },
    },

    testnet: false,
});



const wagmiConfig = getDefaultConfig({
    appName: "tippit",
    projectId: "tea-sepolia",
    chains: [teaAssam],
    transports: {
      [teaAssam.id]: http('https://tea-sepolia.g.alchemy.com/public'),
    },
  })

const qClient = new QueryClient();

// Create and export the App component wrapped with the RainbowKitProvider and WagmiConfig.
function App({ Component, pageProps }: AppProps) {
    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={qClient}>
            <RainbowKitProvider>
                <ToastContainer position={"bottom-center"} />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export default App;

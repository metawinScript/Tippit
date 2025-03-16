
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { AppProps } from "next/app";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import type { Chain } from "viem";
import { WagmiProvider } from "wagmi";

import Layout from "../components/Layout";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const teaAssam = {
    id: 93384,
    name: 'tea-assam',
    nativeCurrency: {
        decimals: 18,
        name: 'Tea',
        symbol: 'TEA',
    },
    rpcUrls: {
        public: {
            http: ['https://assam-rpc.tea.xyz'],
        },
        default: {
            http: ['https://assam-rpc.tea.xyz'],
        },
    },
    blockExplorers: {
        default: {
            name: 'tea-assam',
            url: 'https://assam.tea.xyz',
        },
    },

    testnet: false,
} as const satisfies Chain;

const wagmiConfig = getDefaultConfig({
    appName: "tippit",
    projectId: "jkionbv",
    chains: [teaAssam]
});

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

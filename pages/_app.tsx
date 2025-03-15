
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import type { AppProps } from "next/app";

import { connectorsForWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
//
import { Chain, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";

import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import Layout from "../components/Layout";

// Import the ToastContainer component from react-toastify to display notifications.
import { ToastContainer } from "react-toastify";

import { publicProvider } from "wagmi/providers/public";
const okpoko: Chain = {
    id: 0x500fad,
    name: "Okpoko",
    network: "okpoko",
    iconUrl: "https://example.com/icon.svg",
    iconBackground: "#fff",
    nativeCurrency: {
        decimals: 18,
        name: "OKPOKO",
        symbol: "OKP",
    },
    rpcUrls: {
        public: { http: ["https://froopyland.dymension.xyz/25/okpoko_5246893-1/evmrpc"] },
        default: { http: ["https://froopyland.dymension.xyz/25/okpoko_5246893-1/evmrpc"] },
    },
  
    testnet: false,
};
const { provider, chains } = configureChains([okpoko], [publicProvider()]);


const { connectors } = getDefaultWallets({
    appName: "Tippit",
    projectId: "f2b6bcbe27485bc2aa6c3c619c9e7165",
    chains,
});

// Create the Wagmi client.
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

// Create and export the App component wrapped with the RainbowKitProvider and WagmiConfig.
function App({ Component, pageProps }: AppProps) {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains} coolMode={true}>
                <ToastContainer position={"bottom-center"} />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default App;

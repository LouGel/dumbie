import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./App";
import reportWebVitals from "./reportWebVitals";
import {chain, configureChains, createClient, WagmiConfig} from "wagmi";
import {alchemyProvider} from "wagmi/providers/alchemy";
import {ConnectKitProvider, getDefaultClient} from "connectkit";

const alchemyApiKey = process.env.ALCHEMY_API_KEY;

const {chains, provider, webSocketProvider} = configureChains(
    [chain.rinkeby],
    [alchemyProvider({apiKey: alchemyApiKey})]
);

const client = createClient(
    getDefaultClient({
        autoConnect: true,
        appName: "Galaxy Dumbies",
        chains,
        provider,
        webSocketProvider,
    })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <WagmiConfig client={client}>
            <ConnectKitProvider>
                <App/>
            </ConnectKitProvider>
        </WagmiConfig>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

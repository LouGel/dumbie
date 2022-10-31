import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const alchemyApiKey = "b6ef09c8221b46f29707d9d67eb6b3fa";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.polygonMumbai],
  [
    infuraProvider({ apiKey: alchemyApiKey, priority: 1 }),
    // alchemyProvider({ apiKey: "yourAlchemyApiKey", priority: 1 }),
    publicProvider({ priority: 0 }),
  ]
);
console.log(chain.hardhat.id);
//console.log("The chain we need to be on", chain.arbitrumGoerli.id);

const client = createClient(
  getDefaultClient({
    autoConnect: true,
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
        <App />
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

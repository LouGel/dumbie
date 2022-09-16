import { WagmiConfig, createClient, chain } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import { Buffer } from "buffer";
import { UpBar } from "./Components/UpBar";
import { PageCenter } from "./Components/PageCenter";
import { DownThings } from "./Components/DownThings";
import { isMobile, BrowserView, MobileView } from "react-device-detect";
import { Player } from "video-react";

if (!window.Buffer) window.Buffer = Buffer;
const alchemyId = process.env.ALCHEMY_API_KEY;
const chains = [chain.rinkeby];
const client = createClient(
  getDefaultClient({
    appName: "Galaxy Dumbies",
    alchemyId,
    chains,
  })
);

export const App = () => {
  let classeReact = isMobile ? "Browser" : "Mobile";

  return (
    <div className={classeReact}>
      <h1>{isMobile}</h1>
      <WagmiConfig client={client}>
        <ConnectKitProvider
          customTheme={{
            "--ck-font-family": '"Comic Sans MS", "Comic Sans", cursive',
          }}
        >
          <UpBar />

          <PageCenter portable={isMobile} />

          <DownThings />
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
};

import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import { Buffer } from "buffer";
import { UpBar } from "./Components/UpBar";
import { PageCenter } from "./Components/PageCenter";
import { DownThings } from "./Components/DownThings";

import { Player } from "video-react";
if (!window.Buffer) window.Buffer = Buffer;
const alchemyId = process.env.ALCHEMY_API_KEY;

const client = createClient(
  getDefaultClient({
    appName: "Galaxy Dumbies",
    alchemyId,
  })
);

export const App = () => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        customTheme={{
          "--ck-font-family": '"Comic Sans MS", "Comic Sans", cursive',
        }}
      >
        <UpBar />

        <PageCenter />

        <DownThings />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

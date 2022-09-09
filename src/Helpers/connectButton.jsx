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


export const App = () => {
    return (

<ConnectKitProvider
customTheme={{
  "--ck-font-family": '"Comic Sans MS", "Comic Sans", cursive',
}}
>)
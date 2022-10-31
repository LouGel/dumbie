import { ConnectKitButton } from "connectkit";
import logo from "../Images/logopetit.png";
import "../App.css";
import styled from "styled-components";
import "./UpBar.css";
import { useAccount } from "wagmi";

export const Header = () => {
  const { isConnected } = useAccount();
  return (
    <header className="fixed w-full h-[100px] top-0">
      <div className="flex justify-between items-center px-2">
        <img src={logo} className="h-[40px] md:h-[90px] m-3" alt="dumbies-logo" />
        {isConnected ? (
          <ConnectKitButton.Custom>
            {({ isConnected, show, truncatedAddress, ensName }) => {
              return(
                <button type="button" onClick={show} className="bg-purple/80 flex items-center rounded-full space-y-2 tracking-widest text-[12px] md:text-[16px] px-4 py-5 h-[45px] text-white font-inter">
                  <div className="h-[10px] w-[10px] bg-green rounded-full inline mr-2"/>
                  {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
                </button>
              );
            }}
          </ConnectKitButton.Custom>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

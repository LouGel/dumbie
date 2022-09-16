import { ConnectKitButton } from "connectkit";
import logo from "../Images/logopetit.png";
import "../App.css";
import styled from "styled-components";
import "./UpBar.css";
const StyledButton = styled.button`
  position: absolute;
  padding-left: 3%;
  padding-right: 3%;
  height: 6%;
  right: 1%;
  letter-spacing: 1.5px;
  top: 2%;
  font-family: F37Judge;
  color: #ffffff;
  background: #489b26;
  border-radius: 999px;
`;
export const UpBar = () => {
  const lol = () => {
    console.log("hahah");
  };
  return (
    <div className="upbar">
      <img src={logo} className="logo" />
      <ConnectKitButton.Custom>
        {({ isConnected, show, truncatedAddress, ensName }) => {
          return (
            <StyledButton onClick={show}>
              {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
            </StyledButton>
          );
        }}
      </ConnectKitButton.Custom>
    </div>
  );
};

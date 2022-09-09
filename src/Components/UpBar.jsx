import { ConnectKitButton } from "connectkit";
import logo from "../Images/logopetit.png";
import "../App.css";
import styled from "styled-components";
const StyledButton = styled.button`
  position: absolute;
  width: 207px;
  height: 54px;
  right: 1%;
  top: 21px;
  font-family: AttackOfMonster;
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

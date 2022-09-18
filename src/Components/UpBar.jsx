import {ConnectKitButton, ConnectKitProvider} from "connectkit";
import logo from "../Images/logopetit.png";
import "../App.css";
import styled from "styled-components";
import "./UpBar.css";

export const StyledButton = styled.button`
  position: absolute;
  padding-left: 3%;
  padding-right: 3%;
  height: 6vh;
  right: 1%;
  letter-spacing: 1.5px;
  top: 2%;
  font-family: F37Judge, system-ui;
  color: white;
  background: #489b26;
  border-radius: 999px;
  font-size: x-large;
  border-color: transparent;
`;

export const UpBar = () => {
    return (
        <div className="upbar">
            <img src={logo} className="logo" alt='dumbies-logo'/>
            <ConnectKitButton.Custom>
                {({isConnected, show, truncatedAddress, ensName}) => {
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

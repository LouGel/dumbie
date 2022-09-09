import { whitelist } from "../Helpers/whitelist";
import { ConnectKitButton } from "connectkit";
import styled from "styled-components";
import { useAccount } from "wagmi";

const StyledButton = styled.button`
  width: 207px;
  height: 54px;
  font-family: AttackOfMonster;
  color: #ffffff;
  background: #489b26;
  border-radius: 999px;
`;

export const NotMintPage = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  return (
    <div className="centered">
      {address ? (
        <div>
          <h1 className="centerWrite">GET YOUR GALACTIC DUMBIES</h1>
          <div className="warningRectangle">
            <a className="warningWrite">Sorry !</a>
            <br></br>
            <a className="warningWrite">
              You are on not on the whitelist with this wallet.
            </a>
            <br />
            <a className="warningWrite">
              You can mint your NFT during the public sale.
            </a>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="centerWrite">Enter the private sale</h1>
          <a>
            Connect your wallet and discover if you’re eligible to the private
            sale of Galactic Dumbies.Get up to 2 aliens.
          </a>
          <div>
            <ConnectKitButton.Custom>
              {({ isConnected, show, truncatedAddress, ensName }) => {
                return (
                  <StyledButton onClick={show}>
                    {isConnected
                      ? ensName ?? truncatedAddress
                      : "Connect Wallet"}
                  </StyledButton>
                );
              }}
            </ConnectKitButton.Custom>
          </div>
        </div>
      )}
    </div>
  );
};

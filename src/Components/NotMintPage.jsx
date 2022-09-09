import { whitelist } from "../Helpers/whitelist";
import { ConnectKitButton } from "connectkit";
import styled from "styled-components";
import { chainId, useAccount, useNetwork } from "wagmi";

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
  const { chain, chains } = useNetwork();

  return (
    <div className="centered">
      {chain?.id !== 4 ? (
        <div className="warningRectangle">
          <a className="warningWrite">
            ⛔ You need to be on the rinkeby chain !
          </a>
        </div>
      ) : (
        <div>
          {address ? (
            <div>
              <h1 className="centerWrite">GET YOUR GALACTIC DUMBIES</h1>
              <div className="warningRectangle">
                <a className="warningWrite">⛔Sorry !</a>
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
              <a className="Copyright">
                Connect your wallet and discover if you’re eligible to the{" "}
                <br />
                private sale of Galactic Dumbies.Get up to 2 aliens.
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
      )}
    </div>
  );
};
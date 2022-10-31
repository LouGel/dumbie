import { ConnectKitButton, ConnectKitProvider } from "connectkit";
import styled from "styled-components";
import { chainId, useAccount, useNetwork } from "wagmi";
import failIcon from "../Images/failIcon.svg";
import { contractChainid } from "../Helpers/contractInfo";

const StyledButton = styled.button`
  position: centered;
  padding-left: 3%;
  padding-right: 3%;
  height: 6vh;
  letter-spacing: 1.5px;
  font-family: F37Judge, system-ui;
  color: white;
  background: #489b26;
  border-radius: 10px;
  font-size: x-large;
  left: 50%;
  transform: translateX(-50%);
  border-color: transparent;
`;

export const NotMintPage = ({ step }) => {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const title = step == 2 ? "public" : "private";
  const talks =
    step == 2
      ? "Connect your wallet and be one of the first to mint your Galactic Dumbies."
      : "Connect your wallet and discover if you’re eligible to the  private sale of Galactic Dumbies.";

  return (
    <div className="centered">
      {isConnected && chain?.id !== contractChainid ? (
        <div className="warningRectangle">
          <div className="iconWarningRectangle">
            <img src={failIcon} />
          </div>
          <div className="textWarningRectangle">
            <a>You need to be in the Rinkeby chain !</a>
          </div>
        </div>
      ) : (
        <div>
          {isConnected ? (
            <div>
              <h1 className="centerWriteFail">GET YOUR GALACTIC DUMBIES</h1>
              <div className="warningRectangleFail">
                <div className="iconWarningRectangle">
                  <img src={failIcon} />
                </div>
                <div className="textWarningRectangle">
                  <p>Sorry !</p>
                  <p>
                    You are on not on the whitelist with this wallet. You can
                    mint your NFT during the public sale.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="centerWrite">Enter the {title} sale</h1>
              <div className="smallTalks">
                <p>{talks}</p>
              </div>

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
          )}
        </div>
      )}
    </div>
  );
};

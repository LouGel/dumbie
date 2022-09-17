import {ConnectKitButton, ConnectKitProvider} from "connectkit";
import styled from "styled-components";
import {chainId, useAccount, useNetwork} from "wagmi";

const StyledButton = styled.button`
  padding-left: 3%;
  padding-right: 3%;
  height: 6vh;
  letter-spacing: 1.5px;
  font-family: F37Judge, system-ui;
  color: white;
  background: #489b26;
  border-radius: 999px;
  font-size: x-large;
`;

export const NotMintPage = () => {
    const {address, isConnecting, isDisconnected} = useAccount();
    const {chain, chains} = useNetwork();

    return (
        <div className="centered">
            {address && chain?.id !== 4 ? (
                <div className="warningRectangle">
                    <div className="iconWarningRectangle">
                        ⛔
                    </div>
                    <div className="textWarningRectangle">
                        <a>
                            You need to be in the Rinkeby chain !
                        </a>
                    </div>
                </div>
            ) : (
                <div>
                    {address ? (
                        <div>
                            <h1 className="centerWrite">GET YOUR GALACTIC DUMBIES</h1>
                            <div className="warningRectangle">
                                <div className="iconWarningRectangle">
                                    ⛔
                                </div>
                                <div className="textWarningRectangle">
                                    <p>Sorry !</p>
                                    <p>
                                        You are on not on the whitelist with this wallet. You can mint
                                        your NFT during the public sale.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h1 className="centerWrite">Enter the private sale</h1>
                            <div className="smallTalks">
                                <p>
                                    Connect your wallet and discover if you’re eligible to the
                                    private sale of Galactic Dumbies.
                                </p>
                                <p>
                                    Get up to 2 aliens.
                                </p>
                            </div>
                            <div className="connect">
                                <ConnectKitButton.Custom>
                                    {({isConnected, show, truncatedAddress, ensName}) => {
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

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
  const title = step === 2 ? "public" : "private";
  const talks =
    step === 2
      ? "Connect your wallet and be one of the first to mint your Galactic Dumbies."
      : "Connect your wallet and discover if you’re eligible to the  private sale of Galactic Dumbies.";

  return (
    <div>
      {isConnected && chain?.id !== contractChainid ? (
        <div className="">
          <div className="">
            <img src={failIcon} alt="fail" />
          </div>
          <div className="">
            <a>You need to be in the Rinkeby chain !</a>
          </div>
        </div>
      ) : (
        <div>
          {isConnected ? (
            <div>
              <h1 className="text-[30px] md:text-[64px] leading-[30px] md:leading-[64px] mb-5">GET YOUR GALACTIC DUMBIES</h1>
              <div className="flex bg-white rounded-xl p-2 md:p-5 items-center">
                <div className="mr-5">
                  <img src={failIcon} alt="fail"/>
                </div>
                <div className="flex flex-col text-black items-start text-left text-xs md:text-sm">
                  <p>Sorry !</p>
                  <p>
                    You are on not on the whitelist with this wallet. You can
                    mint your NFT during the public sale.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center p-5 pb-10">
              <h1 className="text-[64px]">Enter the {title} sale</h1>
              <div className="font-inter font-bold text-xl max-w-[500px] px-3">
                <p>{talks}</p>
              </div>

              <ConnectKitButton.Custom>
                {({ isConnected, show, truncatedAddress, ensName }) => {
                  return (
                    <button type="button" onClick={show} className="bg-green rounded-xl space-y-2 font-judge tracking-widest text-[32px] px-4 py-5 mt-8">
                      {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
                    </button>
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

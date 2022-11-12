import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { MintNFT, WlMintNft } from "../Helpers/mintfunction";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

// Make sure that this component is wrapped with ConnectKitProvider
export const MintingComponnents = ({ step, portable, totalSupply }) => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [amountToMint, setAmountToMint] = useState(1);
  const [error, setError] = useState("");
  const [pError, setPError] = useState();
  const [hash, setHash] = useState();
  console.log("STep ", step);
  const increase = async () => {
    const inc = amountToMint === 10 ? 10 : amountToMint + 1;
    setAmountToMint(inc);
  };
  const decrease = async () => {
    const dec = amountToMint === 1 ? 1 : amountToMint - 1;
    setAmountToMint(dec);
  };
  return (
    <div className="text-center p-4 md:p-8 text-white text-sm text-md min-h-[400px]">
      <h1 className="text-[30px] md:text-[64px] leading-[30px] md:leading-[64px] mb-10">
        GET YOUR GALACTIC DUMBIES
      </h1>
      {step !== 2 ? (
        <div className="flex bg-white rounded-xl p-2 md:p-5 items-center">
          <div className="mr-5">&#127881;</div>
          <div className="flex flex-col text-black items-start text-left text-xs md:text-sm">
            <p>Congrats !</p>
            {!error && hash ? (
              <a
                className="font-judge text-blue"
                href={`https://testnets.opensea.io/${address}`}
                target="_blank"
                rel="noreferrer"
              >
                Thanks for your purchase,click here to see your NFTs on Opensea
                after a short delay
              </a>
            ) : (
              <p>You are whitelisted, you can mint before everyone.</p>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="text-white mt-5 text-left">
        <p className="font-judge text-xl tracking-wide">
          Number of nft to mint &#40; max. 10 per wallet &#41;
        </p>
        <div className="flex mt-3">
          <FaMinusCircle
            size={portable ? 25 : 35}
            onClick={decrease}
            className="text-white bg-green rounded-full"
          />
          <span className="font-judge text-[25px] mx-3 mt-2">
            &nbsp;{amountToMint}&nbsp;
          </span>
          <FaPlusCircle
            size={portable ? 25 : 35}
            onClick={increase}
            className="text-white bg-green rounded-full"
          />
        </div>
        <p className="mt-3 font-inter">Price: {0.01 * amountToMint}Ξ</p>
        <small className="font-inter font-thin">
          Please note that you will have to pay gas fees for each transaction.
        </small>
        <div className="flex flex-col sm:flex-row sm:items-center mt-3">
          {2 > step ? (
            <WlMintNft
              nb={amountToMint}
              setPerror={setPError}
              setError={setError}
              setHash={setHash}
              //TODO: update link
              etherscanUrl={`https://mumbai.polygonscan.com/tx/`}
              openseaUrl={`https://testnets.opensea.io/${address}`}
            />
          ) : (
            <MintNFT
              nb={amountToMint}
              setPerror={setPError}
              setError={setError}
              setHash={setHash}
              //TODO: update link
              etherscanUrl={`https://mumbai.polygonscan.com/tx/`}
              openseaUrl={`https://testnets.opensea.io/${address}`}
            />
          )}
          <p className="mt-2 sm:mt-0 sm:ml-2 text-xs sm-text:sm">
            {totalSupply}/12,000 Galactic Dumbies MINTED
          </p>
        </div>
        {!error ? (
          ""
        ) : (
          <p className="flex flex-col sm:flex-row sm:items-center mt-3">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

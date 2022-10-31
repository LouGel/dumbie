import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { MintNFT, WlMintNft } from "../Helpers/mintfunction";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

// Make sure that this component is wrapped with ConnectKitProvider
export const MintingComponnents = ({ step, portable, totalSupply }) => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [amountToMint, setAmountToMint] = useState(1);
  const [error, setError] = useState();
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
    <div className="centered">
      <h1 className="centerWriteConnected">GET YOUR GALACTIC DUMBIES</h1>
      <div className="warningRectangle">
        <div className="iconWarningRectangle">&#127881;</div>
        <div className="textWarningRectangle">
          <p>Congrats !</p>
          {!error && hash ? (
            <a
              style={{
                fontFamily: "F37Judge",
                // fontSize: "x-large",
                color: "blue",
                textDecoration: "none",
              }}
              href={`https://testnets.opensea.io/${address}`}
              target="_blank"
            >
              Thanks for your purchase,click here to see your NFTs on Opensea
              after a short delay
            </a>
          ) : (
            <p>You are whitelisted , you can mint before everyone.</p>
          )}
        </div>
      </div>
      <div className="rest">
        <p className="maxMint">
          Number of nft to mint &#40; max. 10 per wallet &#41;
        </p>
        <div className="mintNumbers">
          <FaMinusCircle
            size={portable ? 25 : 35}
            onClick={decrease}
            className="plusMinus"
          />
          <a className="maxMint">&nbsp;{amountToMint}&nbsp;</a>
          <FaPlusCircle
            size={portable ? 25 : 35}
            onClick={increase}
            className="plusMinus"
          />
        </div>
        <p className="toMint">Price: {0.01 * amountToMint}Ξ</p>
        <p className="prevent">
          Please note that you will have to pay gas fees for each transaction.
        </p>
        {2 > step ? (
          <WlMintNft
            nb={amountToMint}
            portable={portable}
            setPerror={setPError}
            setError={setError}
            setHash={setHash}
          />
        ) : (
          <MintNFT
            nb={amountToMint}
            portable={portable}
            setPerror={setPError}
            setError={setError}
            setHash={setHash}
          />
        )}
        <p>{totalSupply}/12,000 Galactic Dumbies MINTED</p>
      </div>
    </div>
  );
};

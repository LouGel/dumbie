import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { MintNFT } from "../Helpers/mintfunction";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

// Make sure that this component is wrapped with ConnectKitProvider
export const MintingComponnents = (step, portable) => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [amountToMint, setAmountToMint] = useState(1);
  const [error, setError] = useState("");

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
        <a>🎉Congrats !&nbsp;</a>
        <a>
          You are whitelisted , you can mint before everyone.
        </a>
      </div>
      <div className="rest">
        <p className="maxMint">
          Number of nft to mint &#40; max. 10 per wallet &#41;
        </p>
        <div className="mintNumbers">
          <FaMinusCircle onClick={decrease} className="plusMinus" />
          <a className="maxMint">&nbsp;{amountToMint}&nbsp;</a>
          <FaPlusCircle onClick={increase} className="plusMinus" />
        </div>
        <p className="maxMint">Price: {0.01 * amountToMint}Ξ</p>
        <p className="prevent">
          Please note that you will have to pay gas fees for each transaction.
        </p>
        <MintNFT nb={amountToMint} portable={portable} />
      </div>
    </div>
  );
};

import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { whitelist, getProof } from "../Helpers/whitelist";
import { useAccount } from "wagmi";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { contractAddress, contractAbi } from "../Helpers/contractInfo";
import styled from "styled-components";
import { MintNFT } from "../Helpers/mintfunction";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
const StyledButton = styled.button`
  // position: absolute;
  width: 207px;
  height: 54px;
  font-family: F37Judge;
  color: #ffffff;
  background: #489b26;
  border-radius: 999px;
`;

// Make sure that this component is wrapped with ConnectKitProvider
export const MintingComponnents = (step, portable) => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [amountToMint, setAmountToMint] = useState(1);
  const [error, setError] = useState("");

  const increase = async () => {
    const inc = amountToMint == 10 ? 10 : amountToMint + 1;
    setAmountToMint(inc);
  };
  const decrease = async () => {
    const dec = amountToMint == 1 ? 1 : amountToMint - 1;
    setAmountToMint(dec);
  };
  return (
    <div className="centered">
      <h1 className="centerWrite">GET YOUR GALACTIC DUMBIES</h1>
      <div className="warningRectangle">
        <a className="warningWrite">🎉Congrats !</a>
        <br></br>
        <a className="warningWrite">
          You are whitelisted , you can mint before everyone.
        </a>
      </div>

      <div className="rest">
        <p className="maxMint">
          Number of nft to mint &#40; max. 10 per wallet &#41;
        </p>
        <div className="mintNumbers">
          <FaMinusCircle onClick={decrease} className="plusMinus" />
          <a className="maxMint">{amountToMint}</a>
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

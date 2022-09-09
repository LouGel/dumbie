import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { whitelist, getProof } from "../Helpers/whitelist";
import { useAccount } from "wagmi";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { contractAddress, contractAbi } from "../Helpers/contractInfo";
import styled from "styled-components";
import { MintNFT } from "../Helpers/mintfunction";
const StyledButton = styled.button`
  position: absolute;
  width: 207px;
  height: 54px;
  font-family: AttackOfMonster;
  color: #ffffff;
  background: #489b26;
  border-radius: 999px;
`;

// Make sure that this component is wrapped with ConnectKitProvider
export const MintingComponnents = (step) => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [amountToMint, setAmountToMint] = useState(1);

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
        <a className="warningWrite">Congrats !</a>
        <br></br>
        <a className="warningWrite">
          You are whitelisted , you can mint before everyone.
        </a>
      </div>

      <p className="charte">
        Number of nft to mint &#40; max. 10 per wallet &#41;
      </p>
      <div>
        <button onClick={decrease}>-</button>
        {amountToMint}
        <button onClick={increase}>+</button>
      </div>
      <p className="charte">Price: {0.025 * amountToMint}Ξ</p>
      <p className="Copyright">
        Please note that you will have to pay gas fees for each transaction.
      </p>
      <MintNFT nb={amountToMint} />
    </div>
  );
};

// import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { ethers } from "ethers";

import { whitelist, getProof } from "./whitelist";
import { useAccount } from "wagmi";

import { contractAddress, contractAbi } from "./contractInfo";
import styled from "styled-components";

export function MintNFT({ nb, portable }) {
  const StyledButton = !portable
    ? styled.button`
        // position: absolute;
        padding-left: 3vw;
        padding-right: 3vw;
        height: 3vw;
        font-size: 1.2vw;

        font-family: F37Judge;
        color: #ffffff;
        background: #489b26;
        border-radius: 999px;
      `
    : styled.button`
        position: absolute;
        left: 30%;
        padding-left: 3vw;
        padding-right: 3vw;
        height: 3vh;
        font-size: 1.2vw;

        font-family: F37Judge;
        color: #ffffff;
        background: #489b26;
        border-radius: 999px;
      `;
  const { address } = useAccount();
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: contractAddress,
    contractInterface: contractAbi,
    functionName: "whitelistMint",
    args: [nb, getProof(address)],
    overrides: { value: ethers.utils.parseEther("0.01").mul(nb) },
  });
  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div className="mintStuff">
      <StyledButton disabled={!write} onClick={() => write()}>
        {false ? "Minting..." : "MINT"}
      </StyledButton>
      {!(isPrepareError || isError) && data?.hash && (
        <div>
          <a className="prevent">Mint asked</a>
          <div>
            <a href={`https://rinkeby.etherscan.io/tx/${data?.hash}`}>
              Etherscan
            </a>
          </div>
        </div>
      )}
      <div>
        {(isPrepareError || isError) && (
          <a className="error">{(prepareError || error)?.code}</a>
        )}
      </div>
    </div>
  );
}

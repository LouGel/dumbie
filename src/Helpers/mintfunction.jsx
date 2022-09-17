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
  const StyledButton = styled.button`
    padding-left: 5vh;
    padding-right: 5vh;
    height: 6vh;
    font-size: x-large;
    font-family: F37Judge,system-ui;
    color: white;
    background: #489b26;
    border-radius: 999px;
    border-color: transparent;
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
        {"MINT"}
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
    </div>
  );
}

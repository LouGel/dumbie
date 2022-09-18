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
    // position: absolute;
    padding-left: 5vh;
    padding-right: 5vh;
    height: 5vh;
    font-size: 2vh;

    font-family: F37Judge;
    color: #ffffff;
    background: #489b26;
    border-radius: 999px;
  `;
  const { address } = useAccount();
  // const {
  //   config,
  //   error: prepareError,
  //   isError: isPrepareError,
  // } = usePrepareContractWrite({
  //   addressOrName: contractAddress,
  //   contractInterface: contractAbi,
  //   functionName: "whitelistMint",
  //   args: [nb, getProof(address)],
  //   overrides: { value: ethers.utils.parseEther("0.01").mul(nb) },
  // });
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: contractAddress,
    contractInterface: contractAbi,
    functionName: "raffleMint",
    args: [nb /*getProof(address)*/],
    overrides: { value: ethers.utils.parseEther("0.01").mul(nb) },
  });
  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  console.log(error?.code);

  return (
    <div className="mintStuff">
      <StyledButton disabled={!write} onClick={() => write()}>
        {false ? "Minting..." : "MINT"}
      </StyledButton>
      {!(isPrepareError || isError) && data?.hash && (
        <div>
          <a className="prevent">Mint asked</a>
          <div>
            {/* <a href={`https://rinkeby.etherscan.io/tx/${data?.hash}`}>
              Etherscan
            </a> */}
            <a href={`https://testnets.opensea.io/${address}`}>
              Thanks for your purchase, see your NFTs on Opensea after a short
              delay
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

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

export function MintNFT({ nb, portable, setError, setPerror, setHash }) {
  const StyledButton = styled.button`
    padding-left: 5vh;
    padding-right: 5vh;
    height: 6vh;
    font-size: x-large;
    font-family: F37Judge, system-ui;
    color: white;
    background: #489b26;
    border-radius: 999px;
    border-color: transparent;
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
  setHash(data?.hash);
  setPerror(isPrepareError);
  setError(isError);
  console.log(error?.code);

  return (
    <div className="mintStuff">
      <StyledButton disabled={!write} onClick={() => write()}>
        {"MINT"}
      </StyledButton>
    </div>
  );
}

//{!(isPrepareError || isError) && data?.hash && (
//  <div>
//    <div>
//      {/* <a href={`https://rinkeby.etherscan.io/tx/${data?.hash}`}>
//        Etherscan
//      </a> */}
//      <a
//        style={{
//          fontFamily: "F37Judge",
//          // fontSize: "x-large",
//          textDecoration: "none",
//        }}
//        href={`https://testnets.opensea.io/${address}`}
//        target="_blank"
//      >
//        Thanks for your purchase, see your NFTs on Opensea after a short
//        delay
//      </a>
//    </div>
//  </div>
//)}

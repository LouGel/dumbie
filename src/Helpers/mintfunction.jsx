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

export function MintNFT({ nb }) {
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
    <div>
      <button disabled={!write} onClick={() => write()}>
        {false ? "Minting..." : "Mint"}
      </button>
      {!(isPrepareError || isError) && data?.hash && (
        <div>
          Mint asked
          <div>
            <a href={`https://rinkeby.etherscan.io/tx/${data?.hash}`}>
              Etherscan
            </a>
          </div>
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </div>
  );
}

// import * as React from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { ethers } from "ethers";
import os from "../Images/os.png";
import { whitelist, getProof } from "./whitelist";
import { useAccount } from "wagmi";
import { FaCircleNotch } from "react-icons/fa";
import { contractAddress, contractAbi } from "./contractInfo";

export function MintNFT({
  nb,
  setError,
  setPerror,
  setHash,
  etherscanUrl,
  openseaUrl,
}) {
  const [ethUrl, setEthUrl] = useAccount("");
  const { address } = useAccount();
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
  setEthUrl(etherscanUrl + data?.hash);
  setHash(data?.hash);
  setPerror(isPrepareError);
  setError(error ? error.code : null);
  console.log(error?.code);

  return (
    <div>
      <button
        type="button"
        disabled={!write}
        onClick={() => write()}
        className="bg-green rounded-lg space-y-2 font-judge tracking-widest text-[24px] px-16 py-2"
      >
        MINT
      </button>
      {(isLoading || isSuccess) && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vw]">
          <div className="flex w-full h-[100vh] justify-center items-center">
            <div className="bg-white rounded-xl p-10 md:p-20 text-black flex flex-col items-center justify-center w-full min-h-[70%] max-w-[800px] m-3 md:m-10">
              <h1 className="text-[30px] md:text-[50px] leading-[30px] md:leading-[64px] mb-5 text-center">
                {isLoading && "PROCESSING TRANSACTION..."}
                {isSuccess && <>WELCOME TO THE DUMBIES FAMILY &#127881;</>}
              </h1>
              {isLoading && (
                <>
                  <FaCircleNotch
                    size={50}
                    color="green"
                    className="animate-spin mx-auto"
                  />
                  <a className="mt-5 block" href={ethUrl}>
                    Open on Etherscan
                  </a>
                </>
              )}
              {isSuccess && (
                <div className="text-center w-full">
                  <p>Congrats!</p>
                  <p>You now own a Dumbie.</p>
                  <p className="mb-12">Make it evolve by playing the game</p>
                  <a
                    href={openseaUrl}
                    className="bg-green text-white mt-10 rounded-lg space-y-2 font-judge tracking-widest md:text-[24px] px-4 md:px-16 py-3"
                  >
                    SEE ON OPENSEA{" "}
                    <img alt="opean sea" className="linkLogo inline" src={os} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function WlMintNft({
  nb,
  setError,
  setPerror,
  setHash,
  etherscanUrl,
  openseaUrl,
}) {
  const { address } = useAccount();
  const [ethUrl, setEthUrl] = useAccount("");
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
  setEthUrl(etherscanUrl + data?.hash);
  setHash(data?.hash);
  setPerror(isPrepareError);
  setError(error ? error.code : null);
  console.log(error?.code);
  return (
    <div>
      <button
        type="button"
        disabled={!write}
        onClick={() => write()}
        className="bg-green rounded-lg space-y-2 font-judge tracking-widest text-[24px] px-16 py-2"
      >
        MINT
      </button>
      {(isLoading || isSuccess) && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vw]">
          <div className="flex w-full h-[100vh] justify-center items-center">
            <div className="bg-white rounded-xl p-10 md:p-20 text-black flex flex-col items-left justify-center w-full min-h-[70%] max-w-[800px] m-3 md:m-10">
              <h1 className="text-[30px] md:text-[50px] leading-[30px] md:leading-[64px] mb-5">
                {isLoading && "PROCESSING TRANSACTION..."}
                {isSuccess && <>WELCOME TO THE DUMBIES FAMILY &#127881;</>}
              </h1>
              {isLoading && (
                <>
                  <FaCircleNotch
                    size={50}
                    color="green"
                    className="animate-spin"
                  />
                  <a className="mt-5 block" href={ethUrl}>
                    Open on Etherscan
                  </a>
                </>
              )}
              {isSuccess && (
                <div className="text-left w-full">
                  <p>Congrats!</p>
                  <p>You now own a Dumbie.</p>
                  <p className="mb-12">Make it evolve by playing the game</p>
                  <a
                    href={openseaUrl}
                    className="bg-green text-white mt-10 rounded-lg space-y-2 font-judge tracking-widest md:text-[24px] px-4 md:px-16 py-3"
                  >
                    SEE ON OPENSEA{" "}
                    <img alt="opean sea" className="linkLogo inline" src={os} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

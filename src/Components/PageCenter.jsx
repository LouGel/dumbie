import { useState } from "react";
import { chain, useAccount, useNetwork } from "wagmi";
import { whitelist, getProof } from "../Helpers/whitelist";
import { NotMintPage } from "./NotMintPage";
import { MintingComponnents } from "./MintingComponnent";
import { contractAddress, contractAbi } from "../Helpers/contractInfo";
import Video from "../Images/Before_reveal.mp4";
import "./PageCenter.css";
export const PageCenter = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const [step, setStep] = useState();

  const { chain, chains } = useNetwork();
  async function fetchData() {
    // const { _data, isError, isLoading } = useContractRead({
    //   addressOrName: contractAddress,
    //   contractInterface: contractAbi,
    //   functionName: "variables",
    // });
    const _data = { step: 1, nothing: 2 };
    setStep(_data.step);
  }
  // if (address) fetchData();
  return (
    <div className="pageCenter">
      {(whitelist.includes(address) && chain.id == 4) ||
      (address && step > 1) ? (
        <MintingComponnents className="centered" step={step} />
      ) : (
        <NotMintPage />
      )}
      <video className="vid" loop src={Video} autoPlay muted></video>
    </div>
  );
};

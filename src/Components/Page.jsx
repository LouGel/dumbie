import { chain, useAccount, useNetwork, useContractRead } from "wagmi";
import { whitelist, getProof } from "../Helpers/whitelist";
import { NotMintPage } from "./NotMintPage";
import { MintingComponnents } from "./MintingComponnent";
import { contractChainid } from "../Helpers/contractInfo";

import { GetStep } from "./SubFonctions/Getters";

export const Page = ({ portable }) => {
  const { address, isConnected, isDisconnected } = useAccount();
  console.log(address);
  const { chain, chains } = useNetwork();
  const { variables, error } = GetStep();
  console.log("Data : " + variables);
  console.log(error);
  return (
    <div className="flex mx-auto mt-[100px]">
      <div className="bg-purple/80 rounded-xl md:mt-20 mx-7 !text-white overflow-scroll">
        {(whitelist.includes(address) && chain.id === contractChainid) ||
        (isConnected && variables.step > 1) ? (
          <MintingComponnents
            className="centered"
            step={variables.step}
            portable={portable}
            totalSupply={variables.totalSupply}
          />
        ) : (
          <NotMintPage className="centered" step={variables.step} />
        )}
      </div>
    </div>
  );
};

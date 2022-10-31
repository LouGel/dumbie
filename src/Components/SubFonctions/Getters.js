import { chain, useAccount, useNetwork, useContractRead } from "wagmi";
import { contractAddress, contractAbi } from "../../Helpers/contractInfo";

export function GetStep() {
  const { data, error } = useContractRead({
    addressOrName: contractAddress,
    contractInterface: contractAbi,
    functionName: "v",
  });
  const variables = data
    ? data
    : {
        maxSupply: 12000,
        totalSupply: 0,
        step: 0,
        merkleRoot:
          "0x0000000000000000000000000000000000000000000000000000000000000000",
        baseURI: "http://api.galacticdumbies-mint.io/nfts/",
      };
  console.log("Data : " + data);
  return { variables, error };
}

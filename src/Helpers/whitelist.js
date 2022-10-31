import keccak256 from "keccak256";
import { ethers } from "ethers";
import MerkleTree from "merkletreejs";
export const whitelist = [
  "0x2AF26B9d454be3768DdD62574738aAd05654C181",
  "0xD345aB68Fe7614170DFd279542A3c476CA234868",
  "0x012d2F61A4039AD4bF4DD7593eC4fa121Dc499D0",
  "0xE4452777a27D2F426532261BBA144f949A9bA9e9",
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
];

export const getProof = (address) => {
  const tree = new MerkleTree(
    whitelist.map((x) => keccak256(x)),
    keccak256,
    { sortPairs: true }
  );
  return tree.getHexProof(ethers.utils.keccak256(address.toString()));
};

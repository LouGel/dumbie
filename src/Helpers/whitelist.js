import keccak256 from "keccak256";
import { ethers } from "ethers";
import MerkleTree from "merkletreejs";
export const whitelist = [
  "0x2AF26B9d454be3768DdD62574738aAd05654C181",
  "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "0x39b8615718739fB2116254ab072BED2eC01b5bB5",
  "0x1EC75BaBD4CDe5Fe58D7268bb3F2C34B534F8d81",
];

export const getProof = (address) => {
  const tree = new MerkleTree(
    whitelist.map((x) => keccak256(x)),
    keccak256,
    { sortPairs: true }
  );
  return tree.getHexProof(ethers.utils.keccak256(address.toString()));
};

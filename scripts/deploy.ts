import { ethers, network } from "hardhat";

async function main() {
  const Wallet = await ethers.getContractFactory("Wallet");
  const wallet = await Wallet.deploy();
  await wallet.deployed();
  console.log(`Smart contract Wallet deployed to ${wallet.address}`);

  if (network.name  == "goerli") {
    //Console.log('')
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

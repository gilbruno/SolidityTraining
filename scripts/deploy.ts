import { ethers, network } from "hardhat";

//-----------------------------------------------------------------------------
/**
 * Main
 */
async function main() {

  //Deploy GasLess contract
  await deployGasLessContract()

  if (network.name  == "goerli") {
    //Console.log('')
  }
}

//-----------------------------------------------------------------------------
async function deployWalletContract() {
  const Wallet = await ethers.getContractFactory('Wallet');
  const wallet = await Wallet.deploy();
  await wallet.deployed();
  console.log(`Smart contract Wallet deployed to ${wallet.address}`);
}

//-----------------------------------------------------------------------------
async function deployGasLessContract() {
  const GasLess = await ethers.getContractFactory('GasLess')
  const gasLess = await GasLess.deploy()
  await gasLess.deployed()
  console.log(`Smart contract GasLess deployed to ${gasLess.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

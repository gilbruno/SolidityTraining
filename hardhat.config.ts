import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


const {ALCHEMY_RPC_URL, PRIVATE_KEY } = process.env

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: ALCHEMY_RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 5
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      //accounts : No accounts as it's provided by hardhat
      chainId: 31337
    }
  }
};

export default config;

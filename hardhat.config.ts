import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


const {ALCHEMY_KEY, PRIVATE_KEY } = process.env

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: ALCHEMY_KEY,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};

export default config;

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

## Deploy a contract

### Env variables
You need 2 main variables to deploy a contract : 

 - ALCHEMY_URL : The URL of your app created in the Alchemy RPC provider
 - PRIVATE_KEY: The private key of your metamask wallet (Never share it !)

### Deployment

Then you just have to deploy the smart contract in the blockchain by typing : 

```shell
npx hardhat run scripts/deploy.ts --network <network>
```

<network> is the network you configure in the hardhat.config.ts. 

For instance GOERLI Network: 

```typescript
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: ALCHEMY_KEY,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
```




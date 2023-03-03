import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect, assert } from "chai";
import { ethers } from "hardhat";
import { GasLess } from "../typechain-types/contracts";
import { Contract } from "ethers";
import "@nomicfoundation/hardhat-chai-matchers";

describe("GasLess", function () {

  let gaslessContract: Contract

  before(async function () {
    [this.address1, this.address2, ...this.addresses] = await ethers.getSigners()
    const GasLessContract = await ethers.getContractFactory('GasLess')
    gaslessContract = await GasLessContract.deploy()
  });

  describe("GasLess ", function () {
    it('Should be deployed with initial message', async function () {
      let message = await gaslessContract.getMessage()
      let awaitedMessage = 'Hello!'
      assert.equal(message, awaitedMessage)
    });

    it("Should not accept empty message", async function () {
      let emptyMessage = ''
      await expect(gaslessContract.setMessage(emptyMessage)).to.be.revertedWith('A message is required');
    });

    it("Should set message correctly", async function () {
      let message = 'Hola todos!'
      await gaslessContract.setMessage(message)
      let messageOnTheBlockchain = await gaslessContract.getMessage()
      assert.equal(message, messageOnTheBlockchain)

    });

  });

  describe("GasLess Events", function () {
    
    describe("Events", function () {
      it("Should emit an event 'MessageUpdated' on set message", async function () {
        const msg = 'Welcome!'
        await expect(gaslessContract.setMessage(msg)).to.emit(gaslessContract, "MessageUpdated")
      });
    });

    
  });
});

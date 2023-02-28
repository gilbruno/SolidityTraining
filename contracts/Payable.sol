// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Payable {

    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function withdrawal() public {
        uint amount = address(this).balance;

        //Send all amount of this smart contract to owner
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed withdrawal");
    }

    

}

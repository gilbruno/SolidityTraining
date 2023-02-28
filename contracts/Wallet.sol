// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Wallet is Ownable {

    mapping(address => uint) wallets;

    receive() external payable {
        wallets[msg.sender] += msg.value;
    }

    function getBalance() external view returns(uint) {
        return wallets[msg.sender];
    }

    function withdraw(uint _amount ) external{
        address payable receiver = payable (msg.sender);
        require(_amount <= wallets[receiver], 'Not enough money !');
        wallets[msg.sender] -= _amount;
        receiver.transfer(_amount);
    }

    fallback() external payable {
        
    }
}
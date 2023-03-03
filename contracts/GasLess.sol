//SPD// SPDX-License-Identifier: SEE LICENSE IN LICENSE

pragma solidity ^0.8.17;

contract GasLess {

    string public message = "Hello!";
    address public sender;

    event MessageUpdated(address sender, string newMessage);
    
    modifier messageNotNull(string memory _message) {
        require(keccak256(abi.encode(_message)) != keccak256(abi.encode("")), "A message is required");
        _;
    }

    /**
     * Set a newmessage on the blockchain
     */
    function setMessage (string memory _message) external messageNotNull(_message) {
        message = _message;
        sender = msg.sender;
        emit MessageUpdated(msg.sender, _message);
    }

    /**
     * Get the last message state variable
     */
    function getMessage() external view returns (string memory) {
        return message;
    }

    /**
     * Get the last sender state variable
     */
    function getSender() external view returns (address) {
        return sender;
    }


}


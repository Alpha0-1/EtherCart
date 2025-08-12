// EtherCart/contracts/PaymentProcessor.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title PaymentProcessor
 * @notice Stub processor to route payments (placeholder).
 */
contract PaymentProcessor {
    event Paid(address indexed from, address indexed to, uint256 amount);
    function pay(address to) external payable {
        (bool ok,) = to.call{value: msg.value}("");
        require(ok, "Failed");
        emit Paid(msg.sender, to, msg.value);
    }
}


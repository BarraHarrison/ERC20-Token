// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the OpenZeppelin ERC20 implementation
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title MyToken - A simple ERC-20 token example
/// @notice Demonstrates a basic fungible token using OpenZeppelin
contract MyToken is ERC20 {
    /// @notice Mint the initial supply to the deployer
    /// @param initialSupply The number of tokens to mint (without decimals)
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        // Mint the total supply to the address that deploys the contract
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title ProductNFT
 * @notice Minimal placeholder for a product NFT (non-ERC compliant stub).
 */
contract ProductNFT {
    mapping(uint256 => address) public ownerOf;
    event Minted(uint256 tokenId, address to);

    function mint(uint256 tokenId) external {
        require(ownerOf[tokenId] == address(0), "Exists");
        ownerOf[tokenId] = msg.sender;
        emit Minted(tokenId, msg.sender);
    }
}


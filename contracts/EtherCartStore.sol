pragma solidity ^0.8.20;

/**
 * @title EtherCartStore
 * @notice Minimal escrow-based listing and purchase contract (stub for demo).
 */
contract EtherCartStore {
    struct Listing { address seller; uint256 priceWei; bool active; }
    mapping(bytes32 => Listing) public listings;

    event Listed(bytes32 id, address seller, uint256 priceWei);
    event Purchased(bytes32 id, address buyer, uint256 priceWei);
    event Withdrawn(bytes32 id, address seller, uint256 amount);

    function list(bytes32 id, uint256 priceWei) external {
        require(!listings[id].active, "Already listed");
        listings[id] = Listing(msg.sender, priceWei, true);
        emit Listed(id, msg.sender, priceWei);
    }

    function buy(bytes32 id) external payable {
        Listing storage l = listings[id];
        require(l.active, "Not active");
        require(msg.value == l.priceWei, "Incorrect price");
        l.active = false;
        emit Purchased(id, msg.sender, msg.value);
    }

    function withdraw(bytes32 id) external {
        Listing storage l = listings[id];
        require(!l.active, "Still active");
        require(l.seller == msg.sender, "Only seller");
        uint256 amt = l.priceWei;
        l.priceWei = 0;
        (bool ok,) = msg.sender.call{value: amt}("");
        require(ok, "Transfer failed");
        emit Withdrawn(id, msg.sender, amt);
    }
}


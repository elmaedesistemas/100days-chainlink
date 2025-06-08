// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumer {
    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(
            0xA39434A63A52E749F02807ae27335515BA4b07F7
        );
    }

    function getLatestPrice() public view returns (int) {
        (, int price,,,) = priceFeed.latestRoundData();
        return price;
    }

    function getReadablePrice() public view returns (uint) {
        (, int price,,,) = priceFeed.latestRoundData();
        return uint(price) / 1e8;
    }
}

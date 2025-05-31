// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// Importamos la interfaz oficial de Chainlink para consultar precios
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

// Este contrato se conecta al Data Feed de ETH/USD en la red Sepolia
contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed;

    constructor() {
        // Dirección del contrato de Chainlink que contiene el precio ETH/USD en Sepolia
        priceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
    }

    // Esta función nos devuelve el último precio publicado
    function getLatestPrice() public view returns (int) {
        (, int price,,,) = priceFeed.latestRoundData();
        return price;
    }
}

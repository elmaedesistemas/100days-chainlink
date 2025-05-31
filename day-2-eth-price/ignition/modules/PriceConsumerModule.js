const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("PriceConsumerModule", (m) => {
  const priceConsumer = m.contract("PriceConsumerV3");
  return { priceConsumer };
});

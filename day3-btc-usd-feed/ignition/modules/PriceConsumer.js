import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PriceConsumerModule = buildModule("PriceConsumerModule", (m) => {
    const contract = m.contract("PriceConsumer");
    return { contract };
});

export default PriceConsumerModule;

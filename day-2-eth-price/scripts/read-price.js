const hre = require("hardhat");

async function main() {
  const contractAddress = "0xd60D6Ebf3461C20DeaC6FB0af5125d1A7acB6c04";

  const contract = await hre.ethers.getContractAt("PriceConsumerV3", contractAddress);
  const rawPrice = await contract.getLatestPrice();

  console.log("ETH/USD:", Number(rawPrice) / 1e8); // Ajuste de decimales
}

main().catch(console.error);

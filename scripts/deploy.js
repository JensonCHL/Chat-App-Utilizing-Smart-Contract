const { ethers } = require("hardhat");

async function main() {
  const ChatApp = await ethers.getContractFactory("ChatApp");
  const chatApp = await ChatApp.deploy();
  await chatApp.waitForDeployment();
  console.log(`Contract Address: `, await chatApp.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

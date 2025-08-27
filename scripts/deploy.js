const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("CryptonoutController");
  const contract = await Contract.deploy();

  await contract.deployed();

  const info = `Contract Address: ${contract.address}\nTxHash: ${contract.deployTransaction.hash}\n`;
  require("fs").writeFileSync("deployment-info.txt", info);
  console.log(info);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

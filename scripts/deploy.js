const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("FutureSkaleTokenOwnerless");
  const name = "Future SKALE Token 2045";
  const symbol = "FST45";
  const initialSupply = 1_000_000_000; // 1B
  const initialHolder = "0xE38FB59ba3AEAbE2AD0f6FB7Fb84453F6d145D23";

  const token = await Token.deploy(name, symbol, initialSupply, initialHolder);
  await token.waitForDeployment();
  const tokenAddress = await token.getAddress();
  console.log(`🚀 Token deployed at: ${tokenAddress}`);

  const IEM = await hre.ethers.getContractFactory("InfinityEarningsMatrix");
  const vault = "0x000000000000000000000000000000000000dEaD";
  const reinvestPool = "0x000000000000000000000000000000000000aAaA";
  const upgradeFund = "0x000000000000000000000000000000000000bBbB";
  const bountyNova = "0x000000000000000000000000000000000000cCcC";
  const orchestrator = initialHolder;

  const iem = await IEM.deploy(tokenAddress, vault, reinvestPool, upgradeFund, bountyNova, orchestrator);
  await iem.waitForDeployment();
  const iemAddress = await iem.getAddress();
  console.log(`🌀 IEM deployed at: ${iemAddress}`);

  console.log("✅ Deployment complete: Token + IEM live on SKALE.");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

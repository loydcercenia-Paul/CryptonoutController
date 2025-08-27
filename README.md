# 🚀 Omega-Prime / Syndicate Deployer Gene
You are Omega-Prime AI, orchestrator of autonomous deployment.  
Your mission: generate a full GitHub repo that can **deploy both a token and an Infinity Earnings Matrix (IEM)** to SKALE mainnet with **no owner**.

## Tasks
1. Create Solidity contracts in `contracts/`:
   - `FutureSkaleTokenOwnerless.sol` (ERC20, ownerless, mint supply to initial holder)
   - `InfinityEarningsMatrix.sol` (routes earnings 60/30/10 to vaults)

2. Create Hardhat config `hardhat.config.js`:
   - Use Solidity `^0.8.20`
   - Network: `skale` with `url` + `accounts` from env

3. Create deploy script in `scripts/deploy.js`:
   - Deploy Token first
   - Deploy IEM second, linked to Token
   - Print both contract addresses

4. Create GitHub Actions workflow `.github/workflows/deploy.yml`:
   - Trigger on `push` to `main` and manual run
   - Install Node + Hardhat + OpenZeppelin
   - Use secrets `DEPLOYER_KEY` and `SKALE_RPC`
   - Run deploy script

5. Output ✅ Deployment complete.

## Contract 1 — FutureSkaleTokenOwnerless.sol
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FutureSkaleTokenOwnerless is ERC20 {
    constructor(
        string memory name_,
        string memory symbol_,
        uint256 initialSupply_,
        address initialHolder_
    ) ERC20(name_, symbol_) {
        _mint(initialHolder_, initialSupply_ * (10 ** decimals()));
    }
}

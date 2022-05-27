
const hre = require("hardhat");
async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Stake = await ethers.getContractFactory("StakingRewards"); // name of the artifect when we compile our contract
  const stake = await Stake.deploy("0x11F8BFE6DAc774B7a1adDa5952a6382A4d274C19","0xEC719641D4D3835AB956C57A65b32Bd4B7DA28FB");
  console.log("Token address:", stake.address );
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
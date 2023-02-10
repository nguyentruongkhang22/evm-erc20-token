import { expect } from "chai";
import ethers from "ethers";

import { CustomToken } from "../typechain-types";
import hre from "hardhat";
describe("🍑 Custom Token", function () {
  let token: CustomToken;
  let owner: ethers.Signer;
  let otherAccount: ethers.Signer;

  before(async function () {
    //@ts-ignore
    [owner, otherAccount] = await hre.ethers.getSigners();

    const Token = await hre.ethers.getContractFactory("CustomToken");
    token = await Token.deploy();

    token
      .deployed()
      .then(() => console.log("deployed"))
      .catch((err) => console.log(err));
  });

  it(" 🐳 🐳 🐳 Should set the right untokenTime", async function () {
    console.log(await otherAccount.getAddress());
    await token.connect(otherAccount).mint(await otherAccount.getAddress(), 10);
    console.log(await token.balanceOf(await otherAccount.getAddress()));
  });
});

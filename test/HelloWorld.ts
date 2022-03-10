import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hello World", () => {
  it("should get the hello world", async () => {
    const HW = await ethers.getContractFactory("HelloWorld");
    const hello = await HW.deploy();

    expect(await hello.hello()).to.equal("Hello, world");
  });
});

// 1. setup
// 2. Deploy the contract
// 3. Call functions to test

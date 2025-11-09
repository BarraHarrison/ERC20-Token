import { expect } from "chai";
import { ethers } from "ethers";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config()

describe("MyToken (Local ERC20 Tests)", function () {
    let provider, wallet, abi, bytecode, token;

    before(async function () {
        provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
        wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

        abi = JSON.parse(fs.readFileSync("./build/contracts_MyToken_sol_MyToken.abi", "utf8"));
        bytecode = fs.readFileSync("./build/contracts_MyToken_sol_MyToken.bin", "utf8");

        const factory = new ethers.ContractFactory(abi, bytecode, wallet);
        const initialSupply = ethers.parseUnits("1000000", 18);
        token = await factory.deploy(initialSupply);
        await token.waitForDeployment();
    });

    it("should have a name and symbol", async function () {
        expect(await token.name()).to.equal("MyToken");
        expect(await token.symbol()).to.equal("MTK");
    });

    it("should assign the total supply to the deployer", async function () {
        const totalSupply = await token.totalSupply();
        const deployerBalance = await token.balanceOf(wallet.address);
        expect(deployerBalance).to.equal(totalSupply);
    });

    it("should allow token transfers between accounts", async function () {
        const accounts = await provider.listAccounts();
        const recipient = accounts[1];
        const amount = ethers.parseUnits("100", 18);

        const tx = await token.transfer(recipient, amount);
        await tx.wait();

        const recipientBalance = await token.balanceOf(recipient);
        expect(recipientBalance).to.equal(amount);
    });
});
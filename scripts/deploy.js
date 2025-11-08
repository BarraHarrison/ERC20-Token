import { ethers } from "ethers";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const abi = JSON.parse(fs.readFileSync("./build/contracts_MyToken_sol_MyToken.abi", "utf8"));
const bytecode = fs.readFileSync("./build/contracts_MyToken_sol_MyToken.bin", "utf8");

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const deploy = async () => {
    console.log("🚀 Deploying contract...");

    const factory = new ethers.ContractFactory(abi, bytecode, wallet);
    const initialSupply = ethers.parseUnits("1000000", 18);
    const contract = await factory.deploy(initialSupply);

    await contract.waitForDeployment();

    console.log("✅ Contract deployed at:", await contract.getAddress());
    console.log("Deployer:", wallet.address);
};

deploy().catch((error) => {
    console.error("❌ Deployment failed:", error);
});
import { ethers } from "ethers";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const abi = JSON.parse(fs.readFileSync("./build/contracts_MyToken_sol_MyToken.abi", "utf8"));
const bytecode = fs.readFileSync("./build/contracts_MyToken_sol_MyToken.bin", "utf8");

(async () => {
    console.log("🚀 Deploying contract...");

    const factory = new ethers.ContractFactory(abi, bytecode, wallet);
    const initialSupply = ethers.parseUnits("1000000", 18);
    const contract = await factory.deploy(initialSupply);
    await contract.waitForDeployment();

    const address = await contract.getAddress();
    console.log(`✅ Contract deployed at: ${address}`);
    console.log(`Deployer: ${wallet.address}`);

    const deploymentData = {
        contract: "MyToken",
        address: address,
        network: "local-ganache",
        deployer: wallet.address,
        timestamp: new Date().toISOString()
    };

    fs.writeFileSync("./deployment.json", JSON.stringify(deploymentData, null, 2));
    console.log("🧾 Deployment info saved to deployment.json");
})();

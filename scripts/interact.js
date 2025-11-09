import { ethers } from "ethers";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const CONTRACT_ADDRESS = "0x2e5a232F74751D2111F5e31427d6341421d95768";
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const abi = JSON.parse(fs.readFileSync("./build/contracts_MyToken_sol_MyToken.abi", "utf8"));
const token = new ethers.Contract(CONTRACT_ADDRESS, abi, wallet);

(async () => {
    try {
        console.log("🔗 Connected to ERC20 Token at:", CONTRACT_ADDRESS);

        const totalSupply = await token.totalSupply();
        console.log("💰 Total Supply:", ethers.formatUnits(totalSupply, 18));

        const balance = await token.balanceOf(wallet.address);
        console.log("👛 Deployer Balance:", ethers.formatUnits(balance, 18));

        const recipient = "0x"
        const tx = await token.transfer(recipient, ethers.parseUnits("100", 18));
        await tx.wait();
        console.log(`✅ Sent 100 tokens to ${recipient}`);

    } catch (error) {
        console.error("❌ Interaction failed:", error);
    }
})();

## ERC-20 Token Contract

This project demonstrates the creation and local deployment of a fully functional **ERC-20 token contract** using **Solidity**, **OpenZeppelin**, **Ethers.js**, and **Ganache**.

### 📘 Overview

An **ERC-20 token** is a type of **fungible token** built on the Ethereum blockchain. “Fungible” means each token is identical in type and value — just like how 1 ETH equals 1 ETH, or 1 USDT equals 1 USDT.
The ERC-20 standard defines a set of rules that tokens must follow, enabling compatibility with wallets, exchanges, and decentralized applications (dApps).
It’s the foundation behind many cryptocurrencies and **stablecoins** such as **USDC**, **DAI**, and **Tether (USDT)**.

### ⚙️ What This Project Does

This project includes:

* ✅ **A custom ERC-20 token contract** built using **OpenZeppelin’s** trusted smart contract library
* ✅ **Local blockchain deployment** on **Ganache** using **Ethers.js**
* ✅ **Automated testing** written in **Mocha** and **Chai** to verify token name, symbol, balance assignment, and transfers
* ✅ **Interaction scripts** to read the total supply, check balances, and perform token transfers

### 🧠 Key Learning Points

* Understanding how ERC-20 tokens are structured and deployed
* Using Ethers.js to deploy and interact with smart contracts
* Running a local Ethereum environment with Ganache
* Writing Mocha test cases to validate contract logic

### 💻 Technologies Used

* **Solidity** – Smart contract language
* **OpenZeppelin** – Secure ERC-20 implementation
* **Ethers.js** – Deployment and blockchain interaction
* **Ganache** – Local Ethereum blockchain for testing
* **Mocha & Chai** – JavaScript test framework

### 🚀 Deployment Summary

The ERC-20 token contract was successfully:

* Compiled and deployed on a **local Ganache blockchain**
* Verified to mint the **initial supply** to the deployer’s address
* Tested with **token transfers** between accounts
* Recorded in `deployment.json` for traceability

**Example Output:**

```
🚀 Deploying contract...
✅ Contract deployed at: 0x61f9e6F7a4bC578cbee06748b33094dCAA6258dF
Deployer: 0x61C45bbDBc2452ca3101fe35c7c862Eaee0Cb6BF
🧾 Deployment info saved to deployment.json
💰 Total Supply: 1000000000000000000000000.0
✅ Sent 100 tokens to 0xb159A89F0274810F5747ee4346B97449F3F8Fa13
```

### 🧩 Future Work

In future iterations, the contract will be deployed on a **public Ethereum testnet** such as **Sepolia**, using either **Alchemy** or **Infura** as the provider.
Once deployed, the contract can be **verified on Etherscan**, allowing public interaction and inspection of the ERC-20 token.

### 🏁 Conclusion

This project serves as a hands-on foundation for understanding how **fungible tokens** are created and managed on the Ethereum blockchain.
It can easily be extended for:

* Testnet/mainnet deployment
* Token distribution logic
* Integration with decentralized applications (dApps)

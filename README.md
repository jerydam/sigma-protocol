# Σ SIGMA Protocol

**The Sum of Secure Finance.**

Sigma is a next-generation Multisig (Multi-Signature) Treasury management protocol. Unlike traditional "1-person-1-vote" wallets, Sigma implements **weighted equity voting**, allowing organizations to mirror their actual corporate cap table on-chain.

---

## 🌟 Why Sigma?

Traditional multisigs treat every owner equally, regardless of their stake. Sigma recognizes that in a real company, the CEO, CTO, and Investors hold different levels of authority.

* **📊 Weighted Governance:** Assign voting power based on equity (e.g., Lead Developer 30%, Seed Investor 15%).
* **🛡️ Controller-Wallet Separation:** Logic and Funds are decoupled. The **Controller** manages governance, while the **CompanyWallet** acts as a secure, immutable vault.
* **⚡ High-Efficiency Batching:** Execute payroll, vendor payments, or token distributions to 50+ recipients in a single on-chain transaction.
* **⏳ Configurable Guardrails:** Built-in **Timelocks** for high-value transfers and **Expiry Periods** to clear stale proposals.

---

## 🚀 Key Features

### 💎 Treasury Intelligence

* **Real-time Valuation:** Track the total USD net worth of your treasury across native CELO and ERC20 tokens (cUSD, cEUR, WETH).
* **Asset Breakdown:** Transparent list of every token held by the multisig with direct links to block explorers.

### 📝 Advanced Proposing

* **Dynamic Proposals:** Propose native transfers, token swaps, or governance changes (adding/removing owners).
* **CSV Mass Payouts:** Upload payroll lists directly to the dashboard to initiate batch transfers.
* **DeFi Ready:** Simplified interface for generating swap calldata for Uniswap or Ubeswap.

### 🔐 Security & UX

* **Status Tracking:** Visual countdowns for timelocks and proposal expiration.
* **Responsive Modals:** User-friendly success/error handling with human-readable blockchain error messages.
* **Dark Mode:** A sleek, professional interface built for financial operators.

---

## 🏗️ Smart Contract Architecture

Sigma utilizes a modular "Factory" pattern to ensure individual treasuries are isolated and secure.

| Contract | Role | Key Responsibility |
| --- | --- | --- |
| **`MultiSigFactory`** | Registry | Deploys Controller/Wallet pairs and maps them to user addresses. |
| **`MultiSigController`** | Governance | Manages owners, voting weights, and transaction approval logic. |
| **`CompanyWallet`** | Vault | Holds assets. Only executes calls authorized by its specific Controller. |

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 14 (App Router), TypeScript
* **Styling:** Tailwind CSS, Shadcn/UI
* **Web3:** Ethers.js v6, Privy Auth (Safe, seamless wallet connection)
* **Smart Contracts:** Solidity 0.8.20 (OpenZeppelin standards)
* **Network:** Celo Sepolia

---

## 🏁 Getting Started

### Prerequisites

* Node.js v18+
* MetaMask or a Privy-supported wallet
* Celo sepolia Testnet funds ([Get Faucet Funds](https://faucet.celo.org/celo-sepolia))

### 1. Installation

```bash
git clone https://github.com/jerydam/sigma-protocol.git
cd sigma-protocol
npm install

```

### 2. Environment Setup

Create a `.env.local` file:

```env
NEXT_PUBLIC_PRIVY_APP_ID="your_privy_id"
NEXT_PUBLIC_FACTORY_ADDRESS="0x88D0bc0a224b4C1e6571bc51e2830bCF6BA86A41"

```

### 3. Development

```bash
npm run dev

```

---

## 📖 Usage Guide

### Creating a Treasury

1. Navigate to **Create Treasury**.
2. Input Owner addresses and their respective % weights (Total must be ≤ 100%).
3. Define the **Required Percentage** to pass any proposal.
4. Set the **Timelock** (Seconds) and **Expiry** (Seconds).

### Executing a Batch Transfer

1. Open your Treasury Dashboard.
2. Click **New Proposal** → **Send to Many**.
3. Upload a CSV formatted as `address, amount`.
4. Once the required owners sign, click **Execute** to process all payments in one go.

---

## 🤝 Contributing

We welcome contributions from the community!

1. Fork the repo.
2. Create your feature branch (`git checkout -b feature/NewAssetSupport`).
3. Commit your changes.
4. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Built with Σ by the Sigma Team.**


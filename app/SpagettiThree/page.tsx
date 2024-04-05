// About.js
"use client";

// About.tsx

export default function About() {
  class BankAccount {
    balance: number;

    // här bryts Objects and Data Structures principen om att data från objekt borde döljas för att undvika att data sprids.

    constructor() {
      this.balance = 0;
    }

    setBalance(newBalance: number) {
      this.balance = newBalance;
    }

    getBalance() {
      return this.balance;
    }
  }

  const account = new BankAccount();
  account.setBalance(50);
  const balance = account.getBalance();

  return (
    <main className="flex justify-center">
      <h2>Spagetti Three</h2>
      <p>Balance: {balance}</p>
    </main>
  );
}

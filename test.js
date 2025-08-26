import BankAccount from "./bankAccount.js";

// Create a savings account
const savingsAccount = new BankAccount("SA-12345", 1000, "savings");
console.log(savingsAccount.getAccountSummary());

// Create a checking account
const checkingAccount = new BankAccount("CA-67890", 500, "checking");
console.log(checkingAccount.getAccountSummary());

// Test deposit
savingsAccount.deposit(200);
savingsAccount.deposit(-50); // Invalid deposit

// Test withdraw
savingsAccount.withdraw(100);
savingsAccount.withdraw(1200); // Insufficient funds
savingsAccount.withdraw(-50); // Invalid withdrawal

// Test transfer
savingsAccount.transferFunds(150, checkingAccount);
savingsAccount.transferFunds(1000, checkingAccount); // Insufficient funds
savingsAccount.transferFunds(100, "invalid-account"); // Invalid target account

// Test interest
savingsAccount.applyInterest(0.02);
checkingAccount.applyInterest(0.01); // Not a savings account

// Get transaction history
console.log("\nSavings Account Transaction History:");
console.log(savingsAccount.getTransactionHistory());

console.log("\nChecking Account Transaction History:");
console.log(checkingAccount.getTransactionHistory());

// Get final summaries
console.log("\nFinal Account Summaries:");
console.log(savingsAccount.getAccountSummary());
console.log(checkingAccount.getAccountSummary());



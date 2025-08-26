class BankAccount {
  #accountNumber;
  #balance;
  #accountType;
  #transactionHistory;

  constructor(accountNumber, initialBalance, accountType) {
    this.#accountNumber = accountNumber;
    this.#balance = 0;
    this.#accountType = accountType;
    this.#transactionHistory = [];

    if (initialBalance > 0) {
      this.deposit(initialBalance);
    } else {
      console.error("Initial balance must be positive.");
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#recordTransaction("Deposit", amount);
      console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
    } else {
      console.error("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0) {
      if (this.#balance >= amount) {
        this.#balance -= amount;
        this.#recordTransaction("Withdrawal", amount);
        console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
      } else {
        console.error("Insufficient funds.");
      }
    } else {
      console.error("Withdrawal amount must be positive.");
    }
  }

  getBalance() {
    return this.#balance;
  }

  getTransactionHistory() {
    return this.#transactionHistory;
  }

  transferFunds(amount, targetAccount) {
    if (amount > 0) {
      if (targetAccount instanceof BankAccount) {
        if (this.#balance >= amount) {
          this.withdraw(amount);
          targetAccount.deposit(amount);
          this.#recordTransaction("Transfer to " + targetAccount.#accountNumber, amount);
          targetAccount.#recordTransaction("Transfer from " + this.#accountNumber, amount);
          console.log(`Transferred $${amount} to account ${targetAccount.#accountNumber}.`);
        } else {
          console.error("Insufficient funds for transfer.");
        }
      } else {
        console.error("Invalid target account for transfer.");
      }
    } else {
      console.error("Transfer amount must be positive.");
    }
  }

  applyInterest(rate) {
    if (this.#accountType === "savings" && rate > 0) {
      const interest = this.#balance * rate;
      this.#balance += interest;
      this.#recordTransaction("Interest", interest);
      console.log(`Applied interest: $${interest}. New balance: $${this.#balance}`);
    } else {
      console.error("Interest can only be applied to savings accounts with a positive rate.");
    }
  }

  getAccountSummary() {
    return this.#generateAccountSummary();
  }

  #recordTransaction(type, amount) {
    const timestamp = new Date().toISOString();
    this.#transactionHistory.push({ type, amount, timestamp });
  }

  #generateAccountSummary() {
    return `Account Number: ${this.#accountNumber}, Balance: $${this.#balance}, Account Type: ${this.#accountType}`;
  }
}

export default BankAccount;



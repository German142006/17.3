class BankAccount {
    constructor(initialBalance) {
      this.balance = initialBalance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Недостатньо коштів на рахунку");
      } else {
        this.balance -= amount;
      }
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  // Приклад використання:
  const account1 = new BankAccount(1000);
  
  console.log(account1.getBalance()); // 1000
  
  account1.deposit(500);
  
  console.log(account1.getBalance()); // 1500
  
  account1.withdraw(200);
  
  console.log(account1.getBalance()); // 1300
  
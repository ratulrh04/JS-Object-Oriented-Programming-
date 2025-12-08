class bankAccount {
    // customarName;
    // accountNumber;
    // balance;

    constructor (customarName, balance=0){
          this.customarName = customarName;
          this.accountNumber = Date.now();
          this.balance = balance
    }
    diposit(amount){
        this.balance += amount
    }
    withdraw(amount){
        this.balance -= amount
    }
}
 


const akash = new bankAccount('Akash Shil',1000)
akash.diposit(500)
console.log(akash)


class bankAccount {
      customarName ;
      accountNumber ;
      #balance;
    constructor (customarName, balance=0){
          this.customarName = customarName;
          this.accountNumber = Date.now();
          this.#balance = balance
    }
    diposit(amount){
        this.#balance += amount
    }
    withdraw(amount){
        this.#balance -= amount
    }
    set balance (amount){
        this.#balance = amount
    }
    get balance (){
       return this.#balance
    }
    
}

class savingsAccount extends bankAccount{
         transtionLimit = 1000;
     
     constructor (customarName, balance=0){
          super(customarName, balance)
     }
     calculateInterst(amount){
         console.log('Calculating Interset')
     }
     takepersonalLoan(amount){
          this.calculateInterst(amount)
          console.log('Taking personal Loan ' + amount)
     }
}
 

const akash = new savingsAccount('Akash Shil',1000)
// akash.balance = 5000 
console.log(akash.balance)



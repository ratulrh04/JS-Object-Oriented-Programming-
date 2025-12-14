
class bankAccount {
      customarName ;
      accountNumber ;
      #balance;
    constructor (customarName, balance=0){
          this.customarName = customarName;
          this.accountNumber = Date.now();
          this.#balance = balance   //private property
    }
    diposit(amount){
        this.#balance += amount
    }
    withdraw(amount){
        this.#balance -= amount
    }
    // Getter and Setter
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
          console.log(this.balance)
     }
    //  private property
     #calculateInterst(amount){  
         console.log('Calculating Interset')
     }
     takepersonalLoan(amount){
          this.#calculateInterst(amount)
          console.log('Taking personal Loan ' + amount)
     }
     
}
 

const akash = new savingsAccount('Akash Shil',1000)
// akash.balance = "Hello"      
akash.takepersonalLoan(40000)
console.log(akash)



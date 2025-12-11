// Class Function inheritance implement here
class bankAccount {
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

class savingsAccount extends bankAccount{
         transtionLimit = 1000;
     
     constructor (customarName, balance=0){
          super(customarName, balance)
        //   this.transtionLimit = 1000;
     }
     takepersonalLoan(amount){
          console.log('Taking personal Loan ' + amount)
     }
}
 

const akash = new savingsAccount('Akash Shil',1000)
akash.diposit(500)
console.log(akash)



// //Constructor Funtion inhreitance implement here:-

// function bankAccount (customarName, balance=0){
//     this.customarName = customarName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// bankAccount.prototype.diposit= function(amount){
//      this.balance += amount;
// };
// bankAccount.prototype.withdraw = function(amount){
//      this.balance -= amount;
// };

// //2nd Constructor Function
// function currentAccount (customarName, balance=0){
//     this.transacionLimt = 50000;
// }
// currentAccount.prototype.takeBussnessLoan= function(amount) {
//      console.log("Taking bussness loan" + amount)
// }
// //3rd Constructor Function
// function savingsAccount (customarName, balance=0){
//     bankAccount.call(this, customarName, balance)   //prant to chaild constructor property inheritance
//     this.transacionLimt = 10000;
// }
// savingsAccount.prototype = Object.create(bankAccount.prototype) //prant to child constructor prototype inheritance
// savingsAccount.prototype.takePersonalLoan= function(amount) {
//      console.log("Taking personal loan" + amount)
// }

// // object Cretion;-
// const riponAccount = new savingsAccount("Ripon Raha", 500)
// riponAccount.diposit(500);
// riponAccount.withdraw(200);
// riponAccount.takePersonalLoan()

// console.log(riponAccount)
function BankAccount (customarName, balance=0){
    this.customarName = customarName;
    this.accountNumber = Date.now();
    this.balance = balance;
   
   //  this.withdraw = function(amount){
   //                   this.balance -= amount
   //                }; 
   //  this.diposit = function(amount){
   //                   this.balance += amount
   //                };                

}

// Diposite Prototype Example Here 
BankAccount.prototype.diposit = function(amount){
                     this.balance += amount
}
// Withdraw Prototype Example Here 
BankAccount.prototype.withdraw = function(amount){
                     this.balance -= amount
}


// Ripon are diposite here
const riponAccount = new BankAccount('Ripon Raha', 500)
riponAccount.diposit(500)  
console.log(riponAccount)


// jone are withdraw here
const jonecornorAccount = new BankAccount('Jone Corner', 5000)
jonecornorAccount.withdraw(300)           
console.log(jonecornorAccount)               
function BangkAccount (customarName, balance=0){
    this.customarName = customarName;
    this.accountNumber = Date.now();
    this.balance = balance;
    this.diposit = function(amount){
                     this.balance += amount
                  };
    this.withdraw = function(amount){
                     this.balance -= amount
                  };               

}


// Property Access practise:-

// const shuvoAccount = new BangkAccount('Shuvo Raha', 10000);
// const ratulAccount = new BangkAccount('Ratul Raha',);

// shuvoAccount.diposit(2500)
// ratulAccount.diposit(20000)
// ratulAccount.withdraw(1000)
// console.log(shuvoAccount,ratulAccount)

// Property Access practise:-


// Dom Manupulation
const accounts = []
const accountForm = document.querySelector('#accountForm')
const customarName  = document.querySelector('#customarName')
const balance  = document.querySelector('#balance')

const dipositForm = document.querySelector('#dipositForm')
const accountNumber = document.querySelector('#accountNumber')
const amount = document.querySelector('#amount')

accountForm.addEventListener('submit', (e)=>{
   e.preventDefault()
   const account = new BangkAccount(customarName.value, + balance.value)
   accounts.push(account)
   console.log(accounts)
})

dipositForm.addEventListener('submit', (e)=>{
   e.preventDefault()
   const account = accounts.find((singleAccount)=>{
       return singleAccount.accountNumber === +accountNumber.value
   })
      account.diposit(+amount.value)
   console.log(accounts)
})

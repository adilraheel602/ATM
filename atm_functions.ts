let balance_inquiry = (balance:number) =>{
    return balance
}
let cash_withdrawl = (balance:number,am_need:number):number =>{
    return balance-am_need
}
let cash_deposit = (balance:number,am_deposit:number):number =>{
    return balance+am_deposit
}
export {balance_inquiry, cash_withdrawl, cash_deposit};
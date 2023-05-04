let balance_inquiry = (balance) => {
    return balance;
};
let cash_withdrawl = (balance, am_need) => {
    return balance - am_need;
};
let cash_deposit = (balance, am_deposit) => {
    return balance + am_deposit;
};
export { balance_inquiry, cash_withdrawl, cash_deposit };

// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }


function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    /*const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);*/


    const previousBalanceTotal = getCurrentBalance()
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}


function getInputValue(inputId) {
    //debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;

}

document.getElementById("deposit-button").addEventListener("click", function (e) {
    /*const depositInput = document.getElementById("deposit-input");
   const depositAmountText = depositInput.value;
   const depositAmount = parseFloat(depositAmountText);
   depositInput.value = '';*/

    const depositAmount = getInputValue("deposit-input");


    if (depositAmount > 0) {

        // current deposit

        /*const depositTotal = document.getElementById("deposit-total");
        const depositTotalText = depositTotal.innerText;
        const previousDepositTotal = parseFloat(depositTotalText);
        depositTotal.innerText = previousDepositTotal + depositAmount;*/
        updateTotalField("deposit-total", depositAmount);


        // update Balance field

        /*const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal + depositAmount;*/

        updateBalance(depositAmount, true)
    }
})


// handle Withdraw
document.getElementById("withdraw-button").addEventListener("click", function (e) {
    // const withdrawInput = document.getElementById("withdraw-input");
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {

        //withdrawInput.value = '';

        // current Withdraw

        // const withdrawTotal = document.getElementById("withdraw-total");
        // const withdrawTotalText = withdrawTotal.innerText;
        // const previousWithdrawTotal = parseFloat(withdrawTotalText);
        // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
        updateTotalField("withdraw-total", withdrawAmount);

        //Update Balance after withdraw

        /*const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount;*/
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        //console.log('you cannot withdraw');

        alert('you cannot withdraw')
    }
})


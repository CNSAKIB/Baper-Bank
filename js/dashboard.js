// Calling deposite button
document.getElementById('depo-button').addEventListener('click', function () {
    // calculating deposite amount 
    const depoAmountFeild = document.getElementById('depo-feild');
    const depoAmountText = depoAmountFeild.value;
    const depoAmount = parseFloat(depoAmountText);
    const depoAmountDisplay = document.getElementById('depo-amount');

    // Calculating total depo 
    if (depoAmount > 0) {
        const totalDepo = parseFloat(depoAmountDisplay.innerText) + depoAmount;
        depoAmountDisplay.innerText = totalDepo;
        depoAmountFeild.value = '';
        //Calculating Total balance

        const totalAmount = document.getElementById('total-amount');
        const totalAmountDisplay = parseFloat(totalAmount.innerText) + depoAmount;
        totalAmount.innerText = totalAmountDisplay;
    }
    else {
        window.alert('Invalid Input');
    }




})

// Calling Withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withDrawFeild = document.getElementById('withdraw-feild');
    const withDrawText = withDrawFeild.value;
    const withDrawAmount = parseFloat(withDrawText);
    const withdrawDisplay = document.getElementById('withdraw-amount');

    // calculting total withdraw 
    if (withDrawAmount > 0) {
        const totalWithdraw = parseFloat(withdrawDisplay.innerText) + withDrawAmount;
        withdrawDisplay.innerText = totalWithdraw;
        withDrawFeild.value = '';

        //Calculating total Balance

        const totalAmount = document.getElementById('total-amount');
        const totalAmountDisplay = parseFloat(totalAmount.innerText) - withDrawAmount;
        if (totalAmountDisplay < 0) {
            window.alert('You cannot withdraw more than your total balance')
        }
        else {
            totalAmount.innerText = totalAmountDisplay;
        }


    }
    else {
        window.alert('Invalid Input');
    }

})

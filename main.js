// All Transection Switcher 
document.getElementById('cashout-container').style.display = 'none'
    document.getElementById('transfer-container').style.display = 'none'
    document.getElementById('bonus-container').style.display = 'none'
    document.getElementById('pay-bill-container').style.display = 'none'
    document.getElementById('transection-section').style.display = 'none'


// Add money box 
document.getElementById('add-money-box')
.addEventListener('click', function(){
    document.getElementById('add-money-container').style.display ='block'
    document.getElementById('cashout-container').style.display = 'none'
    document.getElementById('transfer-container').style.display = 'none'
    document.getElementById('bonus-container').style.display = 'none'
    document.getElementById('pay-bill-container').style.display = 'none'
    document.getElementById('transection-section').style.display = 'none'
})

// Cashout box 
document.getElementById('cashout-box')
.addEventListener('click', function(){
    document.getElementById('cashout-container').style.display = 'block'
    document.getElementById('add-money-container').style.display ='none'
    document.getElementById('transfer-container').style.display = 'none'
    document.getElementById('bonus-container').style.display = 'none'
    document.getElementById('pay-bill-container').style.display = 'none'
    document.getElementById('transection-section').style.display = 'none'
})

// transfer box 
document.getElementById('transfer-box')
.addEventListener('click', function(){
    document.getElementById('transfer-container').style.display = 'block'
    document.getElementById('cashout-container').style.display = 'none'
    document.getElementById('add-money-container').style.display ='none'
    document.getElementById('bonus-container').style.display = 'none'
    document.getElementById('pay-bill-container').style.display = 'none'
    document.getElementById('transection-section').style.display = 'none'
})
// Get Bonus box 
document.getElementById('bonus-box')
.addEventListener('click', function(){
    document.getElementById('bonus-container').style.display = 'block'
    document.getElementById('transfer-container').style.display = 'none'
    document.getElementById('cashout-container').style.display = 'none'
    document.getElementById('add-money-container').style.display ='none'
    document.getElementById('pay-bill-container').style.display = 'none'
    document.getElementById('transection-section').style.display = 'none'
})
// Pay bill box
document.getElementById('pay-bill-box')
.addEventListener('click', function(){
    document.getElementById('pay-bill-container').style.display = 'block'
    document.getElementById('bonus-container').style.display = 'none'
    document.getElementById('transfer-container').style.display = 'none'
    document.getElementById('cashout-container').style.display = 'none'
    document.getElementById('add-money-container').style.display ='none'
    document.getElementById('transection-section').style.display = 'none'
})
// transection box
document.getElementById('transection-box')
.addEventListener('click', function(){
    document.getElementById('transection-section').style.display = 'block'
    document.getElementById('pay-bill-container').style.display = 'none'
    document.getElementById('bonus-container').style.display = 'none'
    document.getElementById('transfer-container').style.display = 'none'
    document.getElementById('cashout-container').style.display = 'none'
    document.getElementById('add-money-container').style.display ='none'
})


// add money calculation 
document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const bankAccountNumber = document.getElementById('bank-account-number').value;
    
    const addAmount = getElementValueById ('add-amount');
    const getPin = getElementValueByIdWithInt ('pin')
    const balance = getBalanceById ('balance')

    if (bankAccountNumber.length === 11) {

            if (getPin === 1234){
                const sum = addAmount + balance;
                document.getElementById('balance').innerText = sum;

                const transectionContainer = document.getElementById('transection-container');
                const createP = document.createElement('p');
                createP.innerText = `
                You have added ${addAmount} Tk From ${bankAccountNumber}
                `
                transectionContainer.appendChild(createP);

                document.getElementById('add-amount').value = ""
            }
            else{
                alert('Your Pin Number is Incorrect')
            }
        }
        
    
    else{
        alert('Your Account Number is Incorrect')
    }
})
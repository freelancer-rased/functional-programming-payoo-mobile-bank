document.getElementById('btn-login')
.addEventListener('click', function(event){
    event.preventDefault();
    
    const accountNumber = getElementValueById ('account-number');
    const pinNumber = getElementValueById ('pin');
    
    if (accountNumber.length === 11){
        if( pinNumber === '1234'){
            window.location.href = 'main.html'
        }
        else{
            alert('Your Pin Number is Incorrect')
        }
    }

    else{
        alert('Your Account Number is Incorrect')
    }
    



})
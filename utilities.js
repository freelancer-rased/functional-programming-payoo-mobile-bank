
// Get Input Value From Input With Parse Float
function getElementValueById (id){
    const getInputValue = document.getElementById(id).value;
    const convertedValue = parseFloat(getInputValue)
    return convertedValue;
}

// Get Input Value From Input With Parse int
function getElementValueByIdWithInt (id){
    const getInputValueWithInt = document.getElementById(id).value;
    const convertedValueWithInt = parseInt(getInputValueWithInt)
    return convertedValueWithInt;
}

function getBalanceById (id){
    const getBalance = document.getElementById(id).innerText;
    const convertedBalance = parseFloat(getBalance);
    return convertedBalance;

}
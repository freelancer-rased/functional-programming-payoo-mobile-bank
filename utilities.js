function getElementValueById (id){
    const getInputValue = document.getElementById(id).value;
    const convertedValue = parseFloat(getInputValue)
    return convertedValue;
}
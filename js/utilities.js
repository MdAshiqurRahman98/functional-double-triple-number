function getInputFieldValueById(inputFieldID) {
    const inputField = document.getElementById(inputFieldID);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}
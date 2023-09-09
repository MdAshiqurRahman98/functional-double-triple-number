document.getElementById('btn-double').addEventListener('click', function() {
    const newNumber = getInputFieldValueById('input-field');

    if(isNaN(newNumber)) {
        alert('Please provide a number.');
        return;
    }
    
    const outputElement = document.getElementById('output');
    
    const newOutput = newNumber * 2;
    outputElement.innerText = newOutput;
});
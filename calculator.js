// Getting the current value of the result input.
function getCurrentValue() {
    // Put the current value of result input in a variable.
    let currentValue = document.getElementById('result').value;

    return currentValue; // Return the current value.
}


// For displaying something in the result input.
function displayUpdatedValue(value) {
    document.getElementById('result').value = value;
}


// Get the value of the CLICKED btn and display it to the result input real time.
function enterInput(value) {
    // Get the current value inside the result input.
    let currentValue = getCurrentValue();

    // Concatenate the value of the CLICKED btn to the current value of result input.
    currentValue += value;

    // Display the value that is concatenated.
    displayUpdatedValue(currentValue);
}


// Calculate the equation inside the result input.
function calculate() {
    // Get the value inside result input.
    let currentValue = getCurrentValue();

    // Replace the "x" to "*" for it to be evaluated.
    let updatedCurrentValue = currentValue.replace('x', '*').replace('÷', '/')

    // Evaluate the equation using eval() function.
    const total = eval(updatedCurrentValue);

    // Display the evaluated value.
    displayUpdatedValue(total);
}


// Remove character individually to the end of the value inside result input. 
function deleteChar() {
    // Get the current value inside result input.
    let currentValue = getCurrentValue();

    // Remove the last character using .slice() method.
    let newValue = currentValue.slice(0, -1);

    // Display the new value.
    displayUpdatedValue(newValue);
}

// Clear the result input.
function clearInput() {
    // Display empty string (nothing). 
    displayUpdatedValue('');
}


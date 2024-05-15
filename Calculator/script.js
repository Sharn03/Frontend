


// Getting the HTML element with the id "display"
const display = document.getElementById("display");

// Function to append input to the display
function appendToDisplay(input){
    display.value += input; // Append the input to the current value of the display
}

// Function to clear the display
function clearDisplay(){
    display.value = ""; // Set the display value to an empty string
}

// Function to calculate the expression entered in the display
function calculate(){
    try{
        display.value = eval(display.value); // Evaluate the expression and set the display value to the result
    }
    catch(error){
        display.value = "Error"; // If an error occurs during evaluation, display "Error"
    }
}
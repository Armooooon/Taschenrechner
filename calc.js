const display = document.getElementById("display");

function addNumberOnDisplay(input) {
display.value += input;
}

function ClearNumbOnDisplay() {
    display.value = "";
}

function ShwResultOnDisplay() {
    try {
        display.value = math.evaluate(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
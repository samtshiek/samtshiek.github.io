window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');


    function simpleFunction() {
        console.log("This is a simple function");
        simpleFunctionDisplay.textContent = "simple";
        functionCallsAction.onclick = "Button Action";
    }
    simpleFunction();


function functionParameters(value) {
    console.log(value);
}
function add(a,b) {
    return a+b;
}
function functionReturn(addResult) {
    return "From function return " + addResult;
}


functionParameters("Many functions take parameters.");
const addResult = add(2,3);
console.log(addResult);
const returnValue = functionReturn(addResult);
console.log(returnValue);
}
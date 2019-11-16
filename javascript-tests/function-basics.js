window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionParameterDisplay = document.getElementById('functionParameterDisplay');
    const functionReturnDisplay = document.getElementById('functionReturnDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');
    const data = document.getElementById('nameDisplay'); 
    const listDisplay = document.getElementById('listDisplay');
    const addButton = document.getElementById('addButton');

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }

        addButton.onclick = () => {
            elfCode.appendToList(listDisplay, data.value);
        }
    


    function simpleFunction() {
        console.log("functions should consist of statements designed to perform a single task");
        simpleFunctionDisplay.textContent = "functions should consist of statements designed to perform a single task";
        functionCallsAction.onclick = "Button Action";
    }

    functionCallsAction.onclick = function() {
        simpleFunction();
        functionReturnDisplay.textContent = functionReturn(addResult);
        functionParameters("Many functions take parameters.");
    }

    

    


function functionParameters(value) {
    functionParameterDisplay.textContent = value;
    console.log(value);

}
function add(a,b) {
    return a+b;
}
function functionReturn(addResult) {
    return "Many functions return values. " + addResult;
}


const addResult = add(2,3);
console.log(addResult);
const returnValue = functionReturn(addResult);
console.log(returnValue);
}
function loader() {

const simpleObjectDisplay = document.getElementById("simpleObjectDisplay");
const functionObjectDisplay = document.getElementById("functionObjectDisplay");
const customClassDisplay = document.getElementById("customClassDisplay");

const simpleObjectAction = document.getElementById("simpleObjectAction");
const functionObjectAction = document.getElementById("functionObjectAction");
const customClassAction = document.getElementById("customClassAction");

simpleObjectAction.onclick = () => {
    simpleObjectDisplay.textContent = simpleObject.sayName();
}
functionObjectAction.onclick = () => {
    functionObjectDisplay.textContent = FunctionObject.sayName();
}
customClassAction.onclick = () => {
    customClassDisplay.textContent = c.sayName();
}


const simpleObject = {
    sayName: function() {

        return "Simple Object.";
    }
    
}
console.log(simpleObject.sayName());

simpleObject.dynamicMethod = function() {
        return "Dynamic Method";
    }


console.log(simpleObject.dynamicMethod());

function FunctionObject() {
    FunctionObject.prototype.sayName = function() {
        function privateFunction() {
            return "Private Function";
}
    console.log(privateFunction());
        return "sayName"
    }
}
FunctionObject = new FunctionObject();
console.log(FunctionObject.sayName());

class CustomClass {
    constructor () {

    }

     sayName() {
        return "Custom Class";
    }
}

const c = new CustomClass();
console.log(c.sayName());
}

window.onload = loader;
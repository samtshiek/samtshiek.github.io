var person = {"firstName": "Samuel", "lastName": "Kamanda", "fullName": function fullName() {
    const result = person.firstName + " " + person.lastName;
    return result;
}};

function divider(title) {
    console.log("\n====================================");
    console.log(title);
    console.log("====================================\n");
}

divider('Person');

console.log('First Name: ' + person.firstName);
console.log('Last Name: ' + person.lastName);
console.log('Full Name: ' + person.fullName());

var calculator = {"operand01": -1, "operand02": -1, "add": function add() {
    const result = calculator.operand01 + calculator.operand02;

    return result;
}, "subtract": function subtract() {
    const result = calculator.operand01 - calculator.operand02;

    return result;
}};
calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;
calculator.multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
}
divider('Calculator');

console.log('operand01 is the length of firstName: ' + calculator.operand01);
console.log('operand02 is the length of lastName: ' + calculator.operand02);
console.log('Add length of first and lastNames: ' + calculator.add());
console.log('Subtract length of first and lastNames: ' + calculator.subtract());
console.log('Multiply length of first and lastNames: ' + calculator.multiply(calculator.operand01, calculator.operand02));

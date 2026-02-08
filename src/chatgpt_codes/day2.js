"use strict";
//funtion in type script
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.studentInfo = exports.greeting = void 0;
exports.addNumbers = addNumbers;
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(1, 2));
const greeting = (name) => {
    return "Hello" + name;
};
exports.greeting = greeting;
console.log((0, exports.greeting)("sahil"));
const studentInfo = (name, age, course) => {
    return `my name is ${name} and my age is ${age} and I develope skills on ${course}`;
};
exports.studentInfo = studentInfo;
console.log((0, exports.studentInfo)("sahil", 26, "typescript"));
const multiply = (a, b) => {
    return a * b;
};
exports.multiply = multiply;
console.log((0, exports.multiply)(1, 2));

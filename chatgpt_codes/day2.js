"use strict";
//funtion in type script
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.studentInfo = exports.greeting = void 0;
exports.addNumbers = addNumbers;
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(1, 2));
var greeting = function (name) {
    return "Hello" + name;
};
exports.greeting = greeting;
console.log((0, exports.greeting)("sahil"));
var studentInfo = function (name, age, course) {
    return "my name is ".concat(name, " and my age is ").concat(age, " and I develope skills on ").concat(course);
};
exports.studentInfo = studentInfo;
console.log((0, exports.studentInfo)("sahil", 26, "typescript"));
var multiply = function (a, b) {
    return a * b;
};
exports.multiply = multiply;
console.log((0, exports.multiply)(1, 2));

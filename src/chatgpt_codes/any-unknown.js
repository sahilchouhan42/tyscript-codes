"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var value1;
value1 = "django";
if (typeof value1 == "string") {
    console.log(value1.toUpperCase());
}
function handleResponse(response) {
    if (typeof response === "object" && response !== null) {
        console.log("Valid response Object");
        console.log(response);
    }
}
handleResponse({ name: "sahil" });
function printData(data) {
    if (typeof data == "string") {
        console.log(data.toUpperCase());
    }
}
printData("sahil");
function processValue(val) {
    if (typeof val == "number") {
        console.log(val ** val);
    }
}
processValue(10);

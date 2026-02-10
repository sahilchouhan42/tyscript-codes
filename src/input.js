"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInfo() {
    console.log("get info function called");
    const nameInput = document.getElementById("username");
    // console.log(nameInput)
    // console.log(nameInput.value)
    const name = nameInput.value;
    console.log(name);
}

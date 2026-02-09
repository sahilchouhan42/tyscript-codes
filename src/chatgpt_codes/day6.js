"use strict";
//alias type = custom type 
Object.defineProperty(exports, "__esModule", { value: true });
var user1 = {
    id: 12,
    name: "sahil",
    email: "sahil@test.com"
};
console.log(user1);
var emp1 = {
    id: "101",
    name: "harish",
};
console.log(emp1);
var add = (x, y) => {
    return x + y;
};
console.log(add(1, 5));
var student1 = {
    name: "mohit",
    rollNo: 12,
    skills: ["HTML", "CSS"],
    isActive: true
};
console.log(student1);
console.log(student1.name);
console.log(student1.skills);
// console.log(student1.skills[skills.length-1])

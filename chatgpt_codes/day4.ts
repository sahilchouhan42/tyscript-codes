var user:[string, number, boolean] = ["sahil", 26, true]
console.log(user)
var employee:[number, string] = [101, "maya"]
console.log(employee)

//objects in ts

var obj:{
    name: string,
    age:number,
    isDeveloper: boolean
}={
    name: "vivek",
    age: 12,
    isDeveloper: false
}

console.log(obj)

var student:{name: string, age:number, course:string} = {name: "maya", age: 26, course: "js"}

console.log(student)

// var product:[number, string, number] = [1, "Laptop", 5000]
// console.log(product)

var profile:{name: string, age: number, skills: string[]}={
    name: "sahil",
    age: 27,
    skills: ["JS", "React", "NodeJs"]
}

console.log(profile)
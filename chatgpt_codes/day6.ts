//alias type = custom type 

type User = {
    id: number,
    name: string,
    email: string
}

var user1: User =  {
    id: 12,
    name: "sahil",
    email: "sahil@test.com"
}

console.log(user1)

type Employee = {
    "id": number|string,
    name: string,
    department?:string
}

var emp1: Employee={
    id: "101",
    name: "harish",
}

console.log(emp1)

type AddFn = (a: number, b: number)=>number

var add: AddFn = (x, y)=> {
    return x+y
}

console.log(add(1, 5))

type Student={
    name: string,
    rollNo: string|number,
    skills: string[],
    isActive?: boolean
}

var student1: Student={
    name: "mohit",
    rollNo: 12,
    skills: ["HTML", "CSS"],
    isActive: true
}

console.log(student1)
console.log(student1.name)
console.log(student1.skills)
// console.log(student1.skills[skills.length-1])
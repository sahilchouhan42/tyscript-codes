interface User {
    id: number;
    name: string;
    email: string
}

var user1: User={
    id: 12,
    name: "sahil",
    email: "sahil@test.com"
}

console.log(user1)

var employee: User={
    id: 1010,
    name: "employee1",
    email: "employee1@test.com"
}

console.log(employee)

interface Employee{
    id: number|string,
    name: string,
    email:string
}

var emp1: Employee={
    id: "101",
    name: "emp1",
    email: "emp1@test.com"
}

console.log(emp1);


interface Person{
    name: string
}

interface Person{
    age: number
}

var person: Person={
    name: "Person1",
    age: 45
}

console.log(person);

interface Addfn{
    (a:number, b:number): number
}

var add: Addfn = (x, y)=>x+y

console.log(add(4, 5));


//task 
interface Product{
    id: number,
    name: string,
    price: number,
    inStock?: boolean
}

var product1: Product = {
    id: 11,
    name: "Laptop",
    price: 45000,
    inStock: true
}

console.log(product1);

interface Profile{
    userName: string
}

interface Profile{
    bio: string
}


var profile1: Profile = {
    userName: "sahil",
    bio: "Learning Tsc"
}

console.log(profile1)
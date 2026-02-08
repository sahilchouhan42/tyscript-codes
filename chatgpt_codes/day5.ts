//unioon type

function printId(id:number|string): void {
    console.log("Your Id is", id)
}

printId(101)
printId("123")

var user:{name: string, age:number, city?:string} = {name: "sahil", age:27}
console.log(user)

var employees:{id: string|number, name: string, department?:string} = {id: 101, name: "manoj"}
console.log(employees)

var orderId:number|string = "123xxx"
console.log(orderId)

var student:{name: string, rollNo:number|string, address?:string} = {name: "maya", rollNo: 21, address: "Indore"}

console.log(student)

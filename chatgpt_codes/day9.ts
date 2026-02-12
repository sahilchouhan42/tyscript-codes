let value:any = "Hello Typescript"

console.log((value as String).length)
let myName:string = "Sahil";
let myNameLength = (myName as string).length
console.log(myNameLength);



let data: string|number
data = "vivek"
console.log((data as string).length)

let score: string|number
score = 45
console.log((score as number).toString())
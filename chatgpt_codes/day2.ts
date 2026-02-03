//funtion in type script

export function addNumbers(a:number, b:number): number{
    return a+b
}

console.log(addNumbers(1, 2))

export const greeting = (name: string)=>{
    return "Hello"+ name
}

console.log(greeting("sahil"))

export const studentInfo = (name:string, age:number, course: string):string=>{
    return `my name is ${name} and my age is ${age} and I develope skills on ${course}`
}

console.log(studentInfo("sahil", 26, "typescript"))

export const multiply = (a:number, b:number):number=>{
    return a*b
}

console.log(multiply(1, 2))
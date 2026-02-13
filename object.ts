var userData:{name: string, age:number, companyName: string}={
    name: "sahil", age: 23, companyName: "Techno"
}

console.log(userData);
userData.name = "Sam"
console.log(userData);

var userProfile:{[key:string]: string|number|undefined} = {
    name: "sahil",
    rollNo: 45,
    isVerified: undefined
}
userProfile.mobileNo = 91234566

console.log(userProfile);

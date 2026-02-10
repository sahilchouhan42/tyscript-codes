function getInfo(){
    console.log("get info function called")
    const nameInput = document.getElementById("username") as HTMLInputElement
    // console.log(nameInput)
    // console.log(nameInput.value)
    const name:string = nameInput.value
    console.log(name)
}
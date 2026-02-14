var value1:unknown;
value1 = "django"
 if(typeof value1=="string"){
    console.log(value1.toUpperCase());
    
 }

 function handleResponse(response:unknown){
    if(typeof response==="object" && response !==null){
        console.log("Valid response Object");
        console.log(response);
        
    }
 }

 handleResponse({name:"sahil"})

 function printData(data:unknown){
    if(typeof data=="string"){
        console.log(data.toUpperCase())
    }
 }

 printData("sahil")

 function processValue(val:unknown){
    if(typeof val=="number"){
        console.log(val**val)
    }
 }

 processValue(10)
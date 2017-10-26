
// youtube tutorial
//https://www.youtube.com/watch?v=gohSZNZ_BLU


//local storage example
let storage = () => {
    // "use Strict";

    let person = {
        id: 1,
        name: "Diego",
        age: "30 years old"
        }

    localStorage.setItem("Key", JSON.stringify(person));  // puts the object into a stringifyed version.

    // localStorage.removeItem("Key") uncomment to see the person object removed from storage
    
    console.log(JSON.parse(localStorage.getItem("Key"))); //take json.parse() off to see the stringifyed object person.
    console.log(JSON.parse(localStorage.getItem("Key")).name); // shows value "Diego" by acessing the prop name on the object
} 

storage();




// Session storage example

let saveSession = () => {
    // "use Strict";

    let person = {
        id: 1,
        name: "Diego",
         age: "30 years old"
        }

    sessionStorage.setItem("Key", JSON.stringify(person));
    console.log(JSON.parse(sessionStorage.getItem("Key"))); 
} 

saveSession();




//array in storage example
let storageOfArray = () => {
    // "use Strict";

    let person = ["Hello this is a test"]

    localStorage.setItem("Key", person);  // puts the object into a stringifyed version.
    console.log(localStorage.getItem("Key"));
    console.log(localStorage.getItem("Key")[0]);
    console.log(localStorage.getItem("Key").indexOf("H"),"letter H index"); // shows value "Nick" by acessing the prop name on the object
    console.log(localStorage.getItem("Key").length);
} 

storageOfArray();
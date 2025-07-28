
const obj = {
    name: "John",
    age: 25,
}

function printDetails(){
    console.log(`I am ${this.name} and I am ${this.age} years old.`);
}

printDetails.call(obj);



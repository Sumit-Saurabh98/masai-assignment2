const obj = { name: "Alice", hobbies: ["reading", "traveling"] }

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);

copy.hobbies.push("coding");

console.log(obj);

console.log(copy);

var countries = ["India", "USA", "JAPAN", "RUSSIA"];

var states  = new Array("Meghalaya", "Rajasthan",  "Delhi", "Assam");

// console.log(states[1]);

// console.log(states.length);
// states[1] = "Punjab";
// console.log(states);

var user = ["sourav", "sourav@gmail.com", 3, 34, true];
//console.log(user);

user.pop();
user.pop();
//console.log(user);
user.unshift("NEW VALUE");
//console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("new"));

console.log(Array.from("sourav"));

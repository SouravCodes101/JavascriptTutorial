const uid = "abc123";

var firstName = "Sourav";
var lastName = "Choudhury";
var email = "saurabc987@gmail.com";
var country = "India";
var state = "Meghalaya";
var password = "123456";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = true;

// fullName = prompt("Enter your name");

console.log(uid);
// console.log("Full name is : " , fullName);
console.log(email);

console.log(`
  With unique ID: ${uid}
  User is : ${firstName} 
  his email is: ${email}
  and uses the password: ${password} 
`);

console.log(`
  With User ID : ${uid}
  User is : ${firstName} ${lastName}
  his email is : ${email}
  he is from : ${country}
  and belongs to the state of : ${state}
  and uses the password : ${password}
  Logged in from google : ${isLoggedInFromGoogle}
  Logged in from Facebook : ${isLoggedInFromFacebook}
`);
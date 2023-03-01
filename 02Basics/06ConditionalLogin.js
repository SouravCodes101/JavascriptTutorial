// Allow user to access course if he is :
// logged in from Email
// logged in from Google
// logged in from Facebook

var email = false;
var facebook = true;
var google = false;

// if(email) {
//   console.log("Login Success");
// }
// if(google) {
//   console.log("Login Success");
// }
// if(facebook) {
//   console.log("Login Success");
// }

if (email || facebook || google) {
  console.log("Login Success")
} 
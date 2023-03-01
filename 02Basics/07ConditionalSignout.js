// Show user a Signout button if he is authenticated
// otherwise show him option to Login/SignIn


var authenticated = true;

// if (authenticated) {
//   console.log("Show signout button");
// } else {
//   console.log("Show login button");
// }

(authenticated) ? console.log("Signout button") : console.log("LOGIN");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#conditional_ternary_operator
/*
Define a function that can answer the role of a user.
A user can be on the following roles:\
  admin - gets full access
  subadmin - gets access to create/delete courses
  testprep - gets access to create/delete tests
  user - gets access to consume content 
  other - trial user.

Input: getUserRole(name, role)
*/


var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is a admin with all access`;
      break; //!This is not necessary
    case "subadmin":
      return `${name} is a sub-admin with access to create and delete courses`;
      break; //!This is not necessary 
    case "testprep":
      return `${name} is a test-prep with access to create and delete tests`;
      break; //!This is not necessary
    case "user":
      return `${name} is a user with access to consume content`;
      break; //!This is not necessary
  
    default:
      return `${name} is a trial user`;
      break;  //!This is not necessary
  }
}

console.log(getUserRole("Sourav", "admin"));

var getRole  = getUserRole("Sammy", "testprep");

console.log(getRole);
var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function() {
  console.log(`Your first name is : ${this.firstName}`);
}

var sourav = new User("Sourav", 2);
sourav.getCourseCount();
if(sourav.hasOwnProperty("firstName")) {
  sourav.getFirstName();
}

var sam = new User("Sam", 1);
sam.getCourseCount();
if(sam.hasOwnProperty("firstName")) {
  sam.getFirstName();
}

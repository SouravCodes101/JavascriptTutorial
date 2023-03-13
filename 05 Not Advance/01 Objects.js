var User = function(firstName, courseCount){ 
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
      console.log(`Course count is: ${this.courseCount}`);
    };
 };

 User.prototype.getFirstName = function(){
  console.log(`Your first name is : ${this.firstName}`);
 }

 var sourav = new User("sourav", 5);
 sourav.getCourseCount();

 if(sourav.hasOwnProperty("firstName")){
  sourav.getFirstName();
 }
//  console.log(sourav);

 var sam = new User("Sam", 4);
 sam.getCourseCount();
 if(sam.hasOwnProperty("firstName")) {
  sam.getFirstName();
 }
//  console.log(sam);
var User = function(firstName, courseCount){ 
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
      console.log(`Course count is: ${this.courseCount}`);
    };
 };


 var sourav = new User("sourav", 5);
 console.log(sourav);

 var sam = new User("Sam", 4);
 console.log(sam);
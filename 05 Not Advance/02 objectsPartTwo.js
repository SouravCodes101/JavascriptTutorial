var User = {
  name : "",
  getUserName : function() {
    console.log(`User name is : ${this.name}`);
  }
}

var sourav = Object.create(User);
console.log(sourav);
sourav.name = "Sourav Choudhury";
sourav.getUserName();

var sam = Object.create(User, {
  name : {value : "Sammy"},
  courseCount : {value : 3}
});

sam.getUserName();
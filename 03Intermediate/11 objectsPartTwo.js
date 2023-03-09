var user = {
  firstName: "Sourav",
  lastName: "Choudhury",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn : true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
  info: function() {
    return `User: ${this.firstName} ${this.lastName} is an ${this.role}, has logged in ${this.loginCount} times, is signed from facebook: ${this.facebookSignedIn} and is enrolled in ${this.courseList} courses`;
  }  
}
 var courseList = true;
// console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS Course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount());
console.log(user.info());

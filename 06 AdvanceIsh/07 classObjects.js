//import User from "./06classjs.js";

const User = require("./06classjs.js");

const sourav = new User("sourav", "sourav@sourav.com");

// console.log(sourav.getInfo());
sourav.enrollCourse("ReactJS Bootcamp");
sourav.enrollCourse("NodeJS Mastery");

// console.log(sourav.getCourseList());

const courses = sourav.getCourseList();
const name = sourav.getInfo().name;
// courses.forEach((c) => console.log(c))

console.log(`
            user : ${name}
            is enrolled in ${courses.length} courses
            the courses are ${courses}
`);

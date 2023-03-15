const sourav = {
  firstName: "Sourav",
  lastName: "Choudhury",
  role: "Admin",
  courseCount: 7,
  getInfo: function () {
    console.log(`
      First name is ${this.firstName}
      Last name is ${this.lastName}
      His role  is ${this.role}
      and he is studying ${this.courseCount} courses
    `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

// sourav.getInfo();

// var djInfo = sourav.getInfo.bind(dj);
// djInfo();

sourav.getInfo.call(dj);
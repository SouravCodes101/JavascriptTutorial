var name = "Sourav";

console.log("Line Number 3 " + name);

function sayName() {
  // var name= "MR.S";
  console.log("Line number 7 " + name);
  sayNameTwo();

  function sayNameTwo(){
    // var name = "MR.SC";
    console.log("Line number 12 " + name);
  }
}

sayName();
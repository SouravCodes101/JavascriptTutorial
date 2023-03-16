const uno = ()=> {
  console.log("Iam One");
}
const dos = ()=> {
  setTimeout(()=>{
    console.log("You are awesome!!!");
  },3000);
  console.log("Iam Two");
}
const tres = ()=> {
  console.log("Iam Three");
}

uno();
dos();
tres();
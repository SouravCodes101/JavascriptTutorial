const uno = () => {
  return "Iam One";
};
// const dos = ()=> {
//   setTimeout(()=>{
//    return "Iam Two";
//   },3000);
// }

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Iam two");
    }, 3000);
  });
};

const tres = () => {
  return "Iam Three";
};

const callMe = async () => {
  let valOne = uno();
  console.log(valOne);

  let valTwo = await dos();
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};

callMe();

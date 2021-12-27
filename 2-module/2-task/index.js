function isEmpty(obj) {
  let i = 0;
  for (let key in obj) {
    i++;
  }
  if (i < 1){
    return true;
  }
 //  console.log (i);
   return false;
}

let obj = {};
let obj3 = {age: 12};
let obj1 = {
  Name: "Anton",
  age: 10
};

console.log("obj " + isEmpty(obj));
console.log("obj1 " + isEmpty(obj1));
console.log("obj3 " + isEmpty(obj3));
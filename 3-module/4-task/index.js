function showSalary(users, age) {
  let name, str;
  let arr = [];
  users.forEach(function(user, index){
   
    if (user.age <= age) {
      arr.push( user.name + ", " + user.balance);
    }
    str = arr.join("\n");
        
  });
  console.log(str);
  return str;
}

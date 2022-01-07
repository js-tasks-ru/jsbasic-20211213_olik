function showSalary(users, age) {
  let name, str;
  let arr = [];
  users.forEach(function(user, index){
   
    if (user.age <= age) {
      arr.push( user.name + " " + user.balance);
    }
    str = arr.join("\n");
        
  });
  console.log(str);
  return str;
}



let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

let user2 = {
  "balance": "$2,500",
  "picture": "https://placehold.it/32x32",
  "age": 32,
  "name": "Duncan Randall",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 8 unread messages.",
  "favouriteFruit": "banana"
};

let user3 = {
  "balance": "$1,490.15",
  "picture": "https://placehold.it/32x32",
  "age": 29,
  "name": "Helen Fradman",
  "gender": "female",
  "greeting": "Hello, Helen! You have 7 unread messages.",
  "favouriteFruit": "apple"
};

// Массив пользователей
let users = [user1, user2, user3];
let result = showSalary(users, 29);
//console.log("users ", result);
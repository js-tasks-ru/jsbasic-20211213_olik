function namify(users) {
  let result = users.map(arrNames => arrNames.name ) ;
  return result;
}

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [ vasya, petya, masha ];

let names = namify(users);

console.log(names);
let calculator = {
  read: function read(a, b) { 
    a = +prompt("number a", 3);
    b = +prompt("number b", 5);
   
  },
 sum: (a, b) =>  this.a + this.b,
 mul: (a, b) =>  this.a * this.b,
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

calculator.read(3, 5);
console.log("Sum= " + calculator.sum()); 
console.log("Mult= " + calculator.mul()); 


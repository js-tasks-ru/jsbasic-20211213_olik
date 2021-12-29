let calculator = {
  read: function read(a, b) { 
    this.a = a;
    this.b = b;
   
  },
  
 sum() {  return this.a + this.b},
 mul() {  return this.a * this.b }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

calculator.read(4, 7);
console.log("Sum= " + calculator.sum()); 
console.log("Mult= " + calculator.mul()); 


function factorial(n) {
  
  let i = 1, factorial = n;

  if (n == 0) {
    return 1;
  }
  
  while (i < n) {
  
   factorial = factorial * i;
   i++;
  }

  return factorial;
}

console.log (factorial(5));

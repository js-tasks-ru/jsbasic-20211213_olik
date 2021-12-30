function filterRange(arr, a, b) {
  let result = arr.filter(item => (a <= item && item <= b));
  return result;
}


let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 5);

console.log("filtered = " + filtered ); 
console.log("arr = " + arr ); 
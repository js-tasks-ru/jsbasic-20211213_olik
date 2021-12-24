function ucFirst(str) {
  let string = "";
  string = str.charAt(0).toUpperCase() + str.slice(1);
  return string;
}

console.log(ucFirst("f"));

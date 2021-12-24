function truncate(str, maxlength) {
  let string = "";
  string = str.substring(0, maxlength -1 );

  if (str.length > maxlength ) {
    string += "…";
  }
console.log(str.length);
  return string;
}
 console.log (truncate("Усечённую строку, если длина исходной строки больше maxlength", 20));
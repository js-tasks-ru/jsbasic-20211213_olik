function checkSpam(str) {
  let string = "", spam1 = "1xBet", spam2 = "XXX";

  spam1 = spam1.toLowerCase();
  spam2 = spam2.toLowerCase();
  string = str.toLowerCase();

  if (string.indexOf(spam1) !== -1 || string.indexOf(spam2) !== -1){
    return true;
  }
 return false;
}
 console.log(checkSpam("innocent rabbitxxx"));
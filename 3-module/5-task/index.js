function getMinMax(str) {
  let arr = [], obj = {};
  obj.min = 0;
  obj.max = 0;
  let numItem = 0;

  arr = str.split(" ")
  .filter(function(el) { return Number(el); });

  arr.forEach(function(item, index) {

    numItem = Number(item);

    if(obj.min > numItem)
     {
      obj.min = numItem;
     }

     if(obj.max < numItem)
     {
      obj.max = numItem;
     }     
 
  });
  return obj;
}

const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }

function camelize(str) {

let result = str.split('-').map(
     
      (str, index) => index == 0 ? str : str[0].toUpperCase() + str.slice(1)
    )
    .join(''); 
   return result;
}


console.log(camelize('background-color'));// 'backgroundColor';
console.log(camelize('list-style-image'));// 'listStyleImage';
console.log(camelize('-webkit-transition')) ;//'WebkitTransition';

function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  let txt = document.querySelector("#text");
  btn.onclick =  function(){
    if (!txt.hasAttribute('hidden')){
      txt.setAttribute('hidden', 'true');
    } else {
      txt.removeAttribute('hidden');
    }
  }
}

function highlight(table) {
  let tbl = document.body.getElementsByClassName("js-teachers"); 

  console.log(tbl);
  console.log(table.rows.length );
  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    for (let j = 0; j < table.rows[0].cells.length; j++) {
      
      if (table.rows[i].cells[3].hasAttribute("data-available")) {
        if (table.rows[i].cells[3].getAttribute("data-available") == "true"){
          table.rows[i].cells[3].classList.add('available');
        } else {
          table.rows[i].cells[3].classList.add('unavailable');
        }
        
      } else {
        table.rows[i].cells[3].setAttribute("hidden", "");
      }
      
      if (table.rows[i].cells[2].innerHTML === "m" ) {
        table.rows[i].cells[2].classList.add('male');
      }
      if (table.rows[i].cells[2].innerHTML === "f" ) {
        table.rows[i].cells[2].classList.add('female');
      }

      if (table.rows[i].cells[1].innerHTML < 18 ) {
        table.rows[i].cells[1].style.textDecoration = "line-through";
        console.log(22)
      }
    }
  }
 
}

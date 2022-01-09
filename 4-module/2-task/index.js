function makeDiagonalRed(table) {
 console.log(1, table.rows[0].cells)
  for (let i = 0; i < table.rows.length; i++){
    for (let j = 0; j < table.rows[0].cells.length; j++){
      table.rows[j].cells[j].style.backgroundColor = 'red';
    }
  }
  
}

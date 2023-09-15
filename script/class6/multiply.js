const randomMax = 10;
function promptTable() {
  let rows = prompt("How many rows?");
  // user cancelled, leave
  if (rows == null) return;

  let cols = prompt("How many colums?");
  if (cols == null) return;

  let intRows = parseInt(rows);
  if (isNaN(intRows) || intRows == rows || intRows == 0)
    intRows = getRandomIntForm1();

  intRows = Math.abs(intRows);

  let intCols = parseInt(cols);
  if (isNaN(intCols) || intCols == cols || intCols == 0)
  intCols = getRandomIntForm1();

  intCols = Math.abs(intCols);
  rows = validatePromptInput(rows );
  cols = validatePromptInput ( cols );
}

function validatePromptInput(data){
    let newData = parseInt(data);
    if(isNaN(newData) || newData != data || newData ==0)
    newData = getRandomIntForm1;

    newData = Math.abs( newData);
    return newData;
}

function showTable(rows, cols){
    let newTable = document.createElement("table");
    newTable.style.border = "1px solid black";
    newTable.style.borderCollapse = "collapse";

    for(let r = 1 ; r <= rows; r++){
        let newRows = document.createElement("tr");
        

        for(let c = 1; c <= cols; c++){
            let newCols = document.createElement("td");
            newCols.style.boder = "1px solid black";

            let data = document.createTextNode( r * c);
            newCols.appendChild(data);
            newRows.appendChild(newCols);
        }
        newTable.appendChild( newRows);
    }
}

function getRandomIntForm1(){
}


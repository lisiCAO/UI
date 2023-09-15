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

    for(let r = 1 ; r <= rows; r++){
        
    }
}

function getRandomIntForm1(){

}


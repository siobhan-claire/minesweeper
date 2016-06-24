document.addEventListener('DOMContentLoaded', startGame)

function startGame() {
  var boardCells = document.getElementsByClassName('hidden')
  for (var i = 0; i < boardCells.length; i++) {
    addListeners(boardCells[i])
    console.log(getRow(boardCells[i]))
   }
}

function addListeners(element){
  
element.addEventListener('click', showCell);
element.addEventListener('contextmenu', markCell);

}

//create function showCell
function showCell(evt){
    evt.target.classList.remove('hidden');
}

//create function markCell
function markCell(evt){
    evt.preventDefault();
    evt.target.classList.toggle('marked');
}

var board = {cell: []};

function getRow(element){
    var classes = element.classList
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].substring(0,3) === "row") {
        var c = classes[i] 
        var arraySplit = c.split("-")
        var rowString = arraySplit[1]
        var row = parseInt(rowString)
        return row 
      }
  }
}

function getCol (element) {
  var classes = element.classList
  for (var i = 0; i < classes.length; i++) {
    if (classes[i].substring(0,3) === "col") {
      var c = classes[i] 
      var arraySplit = c.split("-")
      var colString = arraySplit[1]
      var col = parseInt(colString)
      return col 
    }
  }
}

  
 

function addCellToBoard(element){
  var newCell = {};

}

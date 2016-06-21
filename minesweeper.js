document.addEventListener('DOMContentLoaded', startGame)

function startGame() {
  var boardCells = document.getElementsByClassName('hidden');
//console.log(boardCells.length)
  for (i = 0; i < boardCells.length; i++){
  addListeners(boardCells[i]);
 }
}

function addListeners(element){
  console.log(element)
element.addEventListener('click', showCell);

}

function showCell(evt){
    evt.target.classList.remove('hidden');
}





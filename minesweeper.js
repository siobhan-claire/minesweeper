document.addEventListener('DOMContentLoaded', startGame)

function startGame() {
  var boardCells = document.getElementsByClassName('hidden');

  for (i = 0; i < boardCells.length; i++){
  addListeners(boardCells[i]);
 }
}

function addListeners(element){
  
element.addEventListener('click', showCell);
element.addEventListener('contextmenu', markCell);

}

function showCell(evt){
    evt.target.classList.remove('hidden');
}

function markCell(evt){
    evt.preventDefault();
    evt.target.classList.toggle('marked');
}






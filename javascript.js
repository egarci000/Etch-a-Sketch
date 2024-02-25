const parentDivElement = document.querySelector("#div-container");

function getUserInput(){
  let numberOfSquares = prompt("How many squares would you like the grid to be? - must be less than or equal to 100");

  if(numberOfSquares <= 100) return numberOfSquares;
}

function createUserSquares(){
  let numberOfSquares = getUserInput();
  console.log(numberOfSquares);
  let sizeInPx = 1000/numberOfSquares;
  console.log(sizeInPx);
  for(i = 0; i < (numberOfSquares * numberOfSquares); i++){
    const childDiv = document.createElement('div');
    childDiv.className = "child-div";
    childDiv.style.height = sizeInPx + "px";
    childDiv.style.width = sizeInPx + "px";
    parentDivElement.appendChild(childDiv);
  }
}

createUserSquares();
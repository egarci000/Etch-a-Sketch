const parentDivElement = document.querySelector("#div-container");
const btn = document.querySelector("#btn");
let divArray = [];
let gridDone = false;
let isDrawing = false;
let num = 0;

function getMouseDown(){
  isDrawing = true;
}

function getMouseUp(){
  isDrawing = false;
}

function getUserInput(){
  let numberOfSquares = prompt("What size grid would you like?");

  if(numberOfSquares <= 100) return numberOfSquares;
}

function createUserSquares(){
  let numberOfSquares = getUserInput();
  let sizeInPx = 695/numberOfSquares;

  if(gridDone){
    let originalChildDiv = parentDivElement.children;
    let ogChildDivArr = Array.from(originalChildDiv);
    for(i = 0; i < ogChildDivArr.length; i++){
      ogChildDivArr[i].remove();
    }
  }

  for(i = 0; i < (numberOfSquares * numberOfSquares); i++){
    const childDiv = document.createElement('div');
    childDiv.className = "child-div";
    childDiv.style.height = sizeInPx + "px";
    childDiv.style.width = sizeInPx + "px";
    divArray.push(childDiv);
    parentDivElement.appendChild(childDiv);
  }
}

parentDivElement.addEventListener("mousedown", function(){
  isDrawing = true;
  createHovering();
});

function createHovering(){
  if(gridDone){
    let childDivs = parentDivElement.children;
    for (const child of childDivs){ 
      child.addEventListener("mouseover", function(){
        child.style.backgroundColor = "black";
      });
    }
  }
}

btn.addEventListener("click", function(){
  num += 1;
  if(num === 1){
    gridDone = true;
  }
  createUserSquares();
  // createHovering();
  return num;
});

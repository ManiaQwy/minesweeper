var x = new Array(10);

for (var i = 0; i < x.length; i++) {
  x[i] = new Array(10);
}

function initializeMines() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      x[i][j] = 0;
    }
  }
  let minesPlaced = 0;
  while (minesPlaced < 15) {
    let z = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    if (x[z][y] !== "☀") {
      x[z][y] = "☀";
      minesPlaced++;
    }
  }
}
initializeMines();

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (x[i][j] !== "☀") {
      let mineCount = 0;
      for (let ni = Math.max(0, i - 1); ni <= Math.min(9, i + 1); ni++) {
        for (let nj = Math.max(0, j - 1); nj <= Math.min(9, j + 1); nj++) {
          if (x[ni][nj] === "☀") {
            mineCount++;
          }
        }
      }
      x[i][j] = mineCount;
    }
  }
}

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(x[i][j]);
  }
}


function GetArray() {
  
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const element = document.getElementById("pole" + i + j);
      if (element) {
        element.innerHTML = "<div id='opacity'style='opacity:0; width: 50px; height: 50px; font-size: 50px;' onclick='GetBombed(" + i + "," + j +")'>" + x[i][j] + "</div>";
        applyStyles(element, x[i][j]);
      }
    }
  }
}

function applyStyles(element, content) {
  if (content === "☀") {
    element.style.backgroundColor = "Gainsboro";
    element.style.color = "black";
    element.style.fontSize = "40px"
  } else if (content == 1) {
    element.style.backgroundColor = "Gainsboro";
    element.style.color = "Blue";
    element.style.fontSize = "40px"
  } else if (content == 2) {
    element.style.backgroundColor = "Gainsboro";
    element.style.color = "Green";
    element.style.fontSize = "40px"
  } else if (content == 3) {
  element.style.backgroundColor = "Gainsboro";
  element.style.color = "red";
  element.style.fontSize = "40px"
  }
else if (content == 4) {
  element.style.backgroundColor = "Gainsboro";
  element.style.color = "DarkBlue";
  element.style.fontSize = "40px"
}
else if (content == 5) {
  element.style.backgroundColor = "Gainsboro";
  element.style.color = "DarkRed";
  element.style.fontSize = "40px"
}
else if (content == 6) {
  element.style.backgroundColor = "Gainsboro";
  element.style.color = "MediumTurquoise";
  element.style.fontSize = "40px"
}
else if (content == 7) {
  element.style.backgroundColor = "Gainsboro";
  element.style.color = "DarkMagenta";
  element.style.fontSize = "40px"
} else if (content == 8) {
  element.style.backgroundColor = "Gainsboro";
  element.style.color = "DarkGrey";
  element.style.fontSize = "40px"
}
else if (content == 0) {
  element.style.backgroundColor = "Gainsboro";
  element.style.color = "white";
  element.style.fontSize = "40px"
}
}
GetArray();
let lost = 0;
let pointer = 0
function GetBombed(z, y) {
  const element = document.getElementById("pole" + z + y);
  element.innerHTML = "<div id='opacity'>" + x[z][y] + "</div>";
  pointer++;
  if(pointer == 85 && lost == 0){
    document.getElementById("status").innerHTML = "<div id='win'> YOU WIN!!! </div>";
    alert("you win!");
  }
  if (x[z][y] === "☀") {
    document.getElementById("status").innerHTML = "<div id='loss'> YOU LOSE!!! </div>";
    lost = 1;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        document.getElementById("pole" + i + j).innerHTML = "<div id='opacity'>" + x[i][j] + "</div>";
      }
    }
  }
}

function handleRightClick(event, z, y) {
  event.preventDefault();

  if (event.button === 2) {
    const element = document.getElementById("pole" + z + y);
    element.innerHTML = "<div id='opacity' style='opacity:1; width: 35px; height: 40px; font-size: 40px;' onclick='GetBombed(" + z + "," + y + ")'>" + "🚩" + "</div>";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.getElementById("pole" + i + j);
      cell.addEventListener("contextmenu", (event) => handleRightClick(event, i, j));
    }
  }
});






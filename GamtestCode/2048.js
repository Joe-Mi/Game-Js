// key vairble used to set and create logic
var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function(){
    SetGame();
}
  
function SetGame() {
    //Board stors the current values used within the game.
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    //This nested loop is used to create html elements within the board <div>.
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < columns; c++){

            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            
            UpdateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }

    //On start-up the game generete two 2 tiles at random postions.
    setTwo()
    setTwo()
}

// thsi function update the tile value.
function UpdateTile(tile, num) {
    // clears the current value and class.
    tile.innerText ="";
    tile.classList.value ="";
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num.toString();
        if (num <= 1024){
            tile.classList.add("X" + num.toString());
        } else{
            tile.classList.add("X2048");
        }
    }
}

document.addEventListener("keyup", (e) => {
    if (e.code == "ArrowLeft"){
        slideLeft();
        setTwo();

    } else if(e.code == "ArrowRight"){
        slideRight();
        setTwo();

    } else if(e.code == "ArrowUp"){
        slideUp();
        setTwo();

    } else if(e.code == "ArrowDown"){
        slideDown();
        setTwo();

    }
    document.getElementById("score").innerText = score;
})

function filterZero(row) {
    return row.filter(num => num != 0);
}

function slide(row) {
    row = filterZero(row);

    for (let i = 0; i < row.length-1; i++){
        if (row[i] == row[i+1]){
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
        }
    }

    row = filterZero(row);

    while (row.length < columns){
        row.push(0);
    }

    return row;
}

function slideLeft() {
    for(let r = 0; r < rows; r++){
        let row = board[r];
        row = slide(row);
        board[r] = row;

        for (let c =0; c < columns; c++){
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            UpdateTile(tile, num);
        }
    }
}

function slideRight() {
    for(let r = 0; r < rows; r++){
        let row = board[r];
        row.reverse();
        row = slide(row);
        board[r] =  row.reverse();

        for (let c =0; c < columns; c++){
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            UpdateTile(tile, num);
        }
    }
}

function slideUp() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);
        
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            UpdateTile(tile, num);
            
        }
    }
}

function slideDown() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
     
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            UpdateTile(tile, num)
        }
    }
}

function setTwo() {
    if (!EmptyTile()) {
        return;
    }
    let found = false;
    while (!found) {
        //find random row and column to place a 2 in
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        if (board[r][c] == 0) {
            board[r][c] = 2;
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            tile.innerText = "2";
            tile.classList.add("x2");
            found = true;
        }
    }
}

function EmptyTile() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0) { //at least one zero in the board
                return true;
            }
        }
    }
    return false;
}

function EmptyBoard() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] !== 0) {
                document.getElementById("board").innerHTML =  "";
                SetGame()
            }
        }
    }
}

//timer java script code.
//key varibales when creating a timer
let TIME_LIMIT = 60;
let timer_text = document.getElementById(".curr_time");
let timeLeft = TIME_LIMIT; 
let timeElapsed = 0;
let timer = null;

function startGame() { 
  
    resetValues(); 
    updateTimer();
    EmptyBoard();
    
    

    // clear old and start a new timer 
    clearInterval(timer); 
    timer = setInterval(updateTimer, 1000);
    
  } 
    
function resetValues() { 
    let timer_text = document.getElementById(".curr_time");
    timeLeft = TIME_LIMIT;
    timeElapsed = 0;
    score = 0 
  
    timer_text.innerHTML= timeLeft + 's';
} 
  
function updateTimer() {
    let timer_text = document.getElementById(".curr_time");

    if (timeLeft > 0) { 
      // decrease the current time left 
      timeLeft--; 
    
      // increase the time elapsed 
      timeElapsed++; 
    
      // update the timer text 
      timer_text.innerHTML = timeLeft + "s"; 
    } 
    else { 
      // finish the game 
      finishGame(); 
    } 
} 
  
function finishGame() { 
    // stop the timer 
    clearInterval(timer);
    
    // show finishing text 
    quote_text.innerHTML = "Click on restart to start a new game.";
     
} 
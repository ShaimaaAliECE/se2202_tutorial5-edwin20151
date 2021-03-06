let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

var btn = document.createElement('button'); 
btn.innerHTML = "<h2> Click Me </h2>";
document.getElementById('next-lbl').appendChild(btn);
// use the value stored in the nextPlayer variable to indicate who the next player is

player = document.getElementById('next-lbl');
player.innerText = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
 for(let i = 0; i<9; i++){
     var gameID = 'c'+(i+1);
     var button1 = document.createElement('button') ;
     document.getElementById(gameID).appendChild(button1);
 }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   event.target.innerText = nextPlayer;
    if(nextPlayer==='X'){
        nextPlayer = 'O';
        player = document.getElementById('next-lbl');
        player.innerText = nextPlayer;


    }else if(nextPlayer ==='O'){
        nextPlayer ='X';
        player = document.getElementById('next-lbl');
        player.innerText = nextPlayer;

    }
    event.target.disabled = 'disabled';
    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :slight_smile: )
    
    // Check if the game is over
    if (isGameOver())
    {

        let lbl=document.getElementById('game-over-lbl');
    
        lbl.innerHTML = '<h1> Game over </h1>' ;
       
        // lbl.appendChild(namelbl);
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let used = true;
    for(let i =0; i<btns.length; i++){
        if(!btns[i].disabled){
            used = false;
        }
    }
    return used;
}
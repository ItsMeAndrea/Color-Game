var numerSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBttn = document.querySelectorAll(".mode");

init();

function init(){
    //mode event listener
    setupModeButtons();

    setupSquares();

    reset();
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click to squares
        squares[i].addEventListener("click",function(){
            var clickedColor = (this.style.backgroundColor);
    
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    };
};

function setupModeButtons(){
    for(var i=0; i<modeBttn.length;i++){
        modeBttn[i].addEventListener("click", function(){
            modeBttn[0].classList.remove("selected");
            modeBttn[1].classList.remove("selected");
            this.classList.add("selected");
            //If textContent = easy then numbersq = 3 else numbersq = 6
            this.textContent === "Easy" ? numerSquares = 3: numerSquares = 6;
             reset();
        });
    };
};

function reset(){
    colors = generateRandomColors(numerSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent ="New Colors";
    //change colors of squares
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display ="block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
};

/* easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numerSquares = 3;
    colors = generateRandomColors(numerSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors [i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numerSquares = 6;
    colors = generateRandomColors(numerSquares);
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length;i++){
            squares[i].style.backgroundColor = colors [i];
            squares[i].style.display = "block";
        }
    }); */

resetButton.addEventListener("click", function(){
    reset();
});


function changeColors(color){
    //loop trought all square
    for(var i=0; i< squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i=0; i<num; i++){
    //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r +", "+ g +", "+ b +")";
}
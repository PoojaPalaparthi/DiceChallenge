var randonNumber1= Math.ceil(Math.random()*6);
var randonNumber2= Math.ceil(Math.random()*6);

randImage1= "./images/dice" + randonNumber1 + ".png";
randImage2= "./images/dice" + randonNumber2 + ".png";

document.getElementById("img1").setAttribute("src", randImage1);
document.getElementById("img2").setAttribute("src", randImage2);


function whoWins(){
    if(randonNumber1>randonNumber2){
        document.querySelector("h1").innerHTML="Player 1 Wins!";
    }
    else if (randonNumber2>randonNumber1)
    {
        document.querySelector("h1").innerHTML="Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML="Draw!"
    }
}

whoWins();
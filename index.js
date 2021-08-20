

var dice = [ "images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var  player1roll = (dice[Math.floor(Math.random()*dice.length)]);



document.querySelector("img").setAttribute("src", player1roll );



var  player2roll = (dice[Math.floor(Math.random()*dice.length)]);


document.querySelectorAll("img")[1].setAttribute("src", player2roll );








if (player1roll > player2roll) {
   document.querySelector("h1").innerHTML = ("Player 1 wins!");
} else if (player1roll < player2roll) { document.querySelector("h1").innerHTML = ("Player 2 wins!");
} else  { document.querySelector("h1").innerHTML = ("Draw!");
}

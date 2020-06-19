var dices = ["https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312625_960_720.png","https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312627_960_720.png","https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312624_960_720.png","https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312623_960_720.png","https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312622_960_720.png","https://cdn.pixabay.com/photo/2014/04/03/11/56/dice-312621_960_720.png"];

function choose_dice(){
	var dice1 = Math.floor(Math.random()*6)+1;
	var dice2 = Math.floor(Math.random()*6)+1;

	document.querySelector("#img1").setAttribute("src",dices[dice1-1]);
	document.querySelector("#img2").setAttribute("src",dices[dice2-1]);

	if (dice1>dice2)
		// alert("player 1 = " +dice1+ " and player 2 = " +dice2+ ", So player 1 wins.");
		document.querySelector("#winner").innerText = "Player 1 wins";
	else if (dice2>dice1)
		// alert("player 1 = " +dice1+ " and player 2 = " +dice2+ ", So player 2 wins.");
		document.querySelector("#winner").innerText = "Player 2 wins";
	else
		// alert("player 1 = " +dice1+ " and player 2 = " +dice2+ ", So Draw.");
		document.querySelector("#winner").innerText = "Draw";
}

choose_dice();
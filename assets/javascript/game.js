$( document ).ready(function(){

	var Random=Math.floor(Math.random()*101+19)
	//selects random number to be shown at the 
	//start of the game, numbers 19-120.

	$('.RanNum').append(Random);



var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

//Setting up random numbers for each jewels
//Random number has to be between 1-12

var userTotal= 0;
var wins= 0;
var losses= 0;

//declaring variables for tallies

$('.Win').append(wins);
$('.Lose').append(losses);

//resets the game

function reset() {

	Random=Math.floor(Math.random()*101+19)
	console.log(Random)
	
	$('.RanNum').text(Random);

	num1= Math.floor(Math.random()*11+1)
    num2= Math.floor(Math.random()*11+1)
    num3= Math.floor(Math.random()*11+1)
    num4= Math.floor(Math.random()*11+1)

    userTotal=0;

    $('.ScoreNumber').text(userTotal);


	
}

function yes(){

 alert("You Won!");

 wins++;

 $('.Win').text(wins);

 reset();

}

function loser(){

	alert ("You Lose!");

	losses++;

	$('.Lose').text(losses);
	reset();

}

//sets up clik for jewels


$('.purpleGem').on('click', function(){

userTotal = userTotal + num1;
console.log("New usetTotal = " + userTotal)

$('.ScoreNumber').text(userTotal)

// sets win/lose conditions

if(userTotal == Random){
	yes();

}

else if ( userTotal > Random){
	loser();

}


})

$('.blueGem').on('click', function(){

userTotal = userTotal + num2;
console.log("New usetTotal = " + userTotal)

$('.ScoreNumber').text(userTotal)

// sets win/lose conditions

if(userTotal == Random){
	yes();

}

else if ( userTotal > Random){
	loser();

}


})

$('.greenGem').on('click', function(){

userTotal = userTotal + num3;
console.log("New usetTotal = " + userTotal)

$('.ScoreNumber').text(userTotal)

// sets win/lose conditions

if(userTotal == Random){
	yes();

}

else if ( userTotal > Random){
	loser();

}


})

$('.redGem').on('click', function(){

userTotal = userTotal + num4;
console.log("New usetTotal = " + userTotal)

$('.ScoreNumber').text(userTotal)

// sets win/lose conditions

if(userTotal == Random){
	yes();

}

else if ( userTotal > Random){
	loser();

}


})












});
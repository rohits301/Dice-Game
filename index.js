
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// Reload feature
document.querySelector(".btn").addEventListener('click', ()=>{
    window.location.reload();
});

document.querySelector("img.img1").setAttribute("src",'images/dice' + randomNumber1 + '.png');

document.querySelector("img.img2").setAttribute("src",'images/dice' + randomNumber2 + '.png');

var result = "";
if(randomNumber1 > randomNumber2){
    result = "🚩Player 1 wins";
} else if (randomNumber1 === randomNumber2){
    result = "DRAW!";
} else {
    result = "Player 2 wins🚩";
}

document.querySelector("h1").textContent = result;
// console.log(randomNumber1);
// console.log(randomNumber2);
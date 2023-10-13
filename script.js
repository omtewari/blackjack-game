

let cards=[];
let sum = 0;
let hasblackjack = false;
let isalive = false;
let message = ""
let messageEl = document.getElementById("message-el");
console.log(messageEl)
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player={
    name:"om",chips:130
}

let playerel=document.getElementById("player-el")
playerel.textContent=player.name + "  $" +player.chips

function getrandomcard(){

    let randomnumer= Math.floor(Math.random()*13)+1;
    if (randomnumer==1){
        return 11;
    }
    else if(randomnumer>10){
        return 10;
    }
    else{
        return randomnumer;
    }
}
// function startgame(){
    

   
   

function startgame() {
    isalive=true;
    let firstcardd = getrandomcard();
    let secondcardd= getrandomcard();
    cards=[firstcardd,secondcardd]
    sum=firstcardd+secondcardd
    rendergame()}
    
    function rendergame(){
    sumEl.innerText = "Sum: " + sum;
    cardEl.innerText = "Cards: " 
    for( let i=0; i<cards.length; i++){
        cardEl.textContent+=cards[i] +" "
    }
    if (sum < 21) {
        message = "do you want to draw anothr card?";
    }
    else if (sum === 21) {
        message = "congrats you have won the game";
        hasblackjack = true;
    }
    else if (sum > 21) {
        message = "you have lost the game";
        isalive = false;

    }
    messageEl.innerText = message;
}
  function newcard(){
    if( isalive===true && hasblackjack===false){
    console.log("draw a new cad from deck");
    let card = getrandomcard();
    cards.push(card)
    sum+=card;
    rendergame()}
  }

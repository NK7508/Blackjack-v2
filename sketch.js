var playerTotal = 0
var dealerTotal = 0
var cardsimage = [];
var cards = {};
var playerHand = ["./cards/9-D.png"]
var dealerHand = ["./cards/6-D.png"]
var gameState = 0

let types = ["C", "D", "H", "S"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "K", "Q"];

var spimage;

function preload() {
  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++) {
      cardsimage.push("./cards/" + values[j] + "-" + types[i] + ".png");
    }
  }
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < cardsimage.length; i++ ) {
    if (parseInt(cardsimage[i][9]) === 0 || (cardsimage[i][8]) == "J"|| (cardsimage[i][8]) == "K"|| (cardsimage[i][8]) == "Q"){
      cards[cardsimage[i]] = 10
    }
    else if ((cardsimage[i][8]) == "A"){
      cards[cardsimage[i]] = 11
    }
    else {
      cards[cardsimage[i]] = parseInt(cardsimage[i][8])
    }
  }
  console.log(cards)

}

function draw() { 
  background(0);
  
  if (gameState === 0){
    textSize(60)
    text("Blackjack",width/2-100,height/2)
    textSize(40)
    text("Press Enter to start",width/2 - 140,height/2 +height/10)
    if (keyDown ("enter")){
      gameState = 1
    }
  }

  if (gameState === 1){
    dealerTotal = getTotal(dealerHand)
    playerTotal = getTotal(playerHand)
    c = createSprite(200, 200, 50, 300);
    c.addImage(loadImage(cardsimage[0]));
    c.scale = 0.35;

    drawSprites();
    textSize(50)
    fill("White")
    text (dealerTotal, width*3/4,height/4)
    textSize(50)
    fill("White")
    text( playerTotal,width*3/4,height*3/4)
    




  }

  
  
}


function getTotal(hand) {
  total = 0
  aces = 0
  for (i = 0; i< hand.length; i++){
    total += cards[hand[i]]
    if (cards[hand[i]] == 11){
      aces += 1
    }
  while(aces > 0 && total > 21){
    total -= 10
    aces -= 1
  }
  return total
  } 

}


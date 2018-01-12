var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
cardsInPlay.push(cards[0]);
cardsInPlay.push(cards[1]);
cardsInPlay.push(cards[2]);
cardsInPlay.push(cards[3]);
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1] || cardsInPlay[2] === cardsInPlay[3]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};
var flipCard = function (cardId) {
  checkForMatch ();
  console.log("User flipped " + cards[cardId]);
};
flipCard(0);

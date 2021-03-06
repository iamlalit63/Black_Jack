let deck = require('./deck.js');
let init =  ()=> {
  var theDeck = deck.init();
  var dealer = [],
  player = [];

  for (var i = 0; i < 2; i++) {
    player[i] = theDeck.shift();
    dealer[i] = theDeck.shift();
  }

  return {
            deck: theDeck,
            dealerHand: dealer,
            playerHand: player
         };

};

let tally = (hand)=>{
  var score = 0;
  var numAce = 0;
  for (var i = 0; i < hand.length; i++) {
    if (!!hand[i].gameVal) {
      score += hand[i].gameVal;
      if (hand[i].gameVal == 11) {
        numAce++;
      }
      for (var j = 0; j < numAce; j++) {
        if(score>21 && numAce>0) {
          score-= 10;
          numAce--;
        }
      }
    } else {
      console.log('messed');
    }
  }
  //console.log(score);
  return score;
}

let playerHit = (state)=>{
    state.playerHand.push(state.deck.shift());
    var playerScore = tally(state.playerHand);
    if (playerScore > 21) {
      state.status = 'bust';
    }
    return state;
};

let dealerHit = (state)=>{
    var playerScore = tally(state.playerHand);
    var dealerScore = tally(state.dealerHand);

    while (dealerScore < 17) {
      state.dealerHand.push(state.deck.shift());
      dealerScore = tally(state.dealerHand); //+= state.dealerHand[state.dealerHand.length - 1].gameVal;
    }
    if (dealerScore > 21 || playerScore > dealerScore) {
      state.status = 'win';
    } else if (dealerScore > playerScore || dealerScore == playerScore) {
      state.status = 'lose';
    }
};



module.exports.init = init;
module.exports.playerHit = playerHit;
module.exports.dealerHit = dealerHit;

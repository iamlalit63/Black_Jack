let card = require('./card.js');

//init deck of cards
let init = ()=>{

    var suits = ['H', 'D', 'C', 'S'],
        cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
        deck = [],
        count = 0;
        numberofdeck=3;


    function initCards() {
        for (var i = 0; i < suits.length; i++) {
            for (var x = 0; x < cardValues.length; x++) {
                deck[count] = new c.card(cardValues[x], suits[i], x + 1, "/images/cards/" + cardValues[x] +  suits[i] + '.svg');

        				if (x > 9) {
        					deck[count].gameVal = 10;
        				}
						
						if (x === 0) {
							deck[count].gameVal = 11;
						}

                count++;
            }
        }
        if(numberofdeck > 0)
        {
            initCards();
            numberofdeck--;
        }
    }

	function shuffle() {
			var m = deck.length, t, i;
			while (m) {
				i = Math.floor(Math.random() * m--);

				t = deck[m];
				deck[m] = deck[i];
				deck[i] = t;
			}
		}


	initCards();

	shuffle();

	return deck;

};

module.exports.init = init;

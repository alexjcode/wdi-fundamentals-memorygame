let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let card1 = cards[0];
cardsInPlay.push(card1);
console.log("User flipped " + card1);
let card2 = cards[2];
cardsInPlay.push(card2);
console.log("User flipped " + card2);

if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}

// console.log("User flipped " + card1);
// console.log("User flipped " + card4);

// const qh_flip = () => {
//     console.log('yo')
// }
// qh_flip()

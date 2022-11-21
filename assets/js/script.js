var cards = document.querySelectorAll('.card');

let hasFlipped = false;
let cardOne, cardTwo;
let lockedCard = false ; // can't flip another card until previous cards action completed

// Find the same card and leave it flipped
const flippedCard = e => {
        if (lockedCard) return; 

         const target = e.target.parentElement;

         if (target === cardOne) return; // if you click the same card twice it stays open, as 
         // it reacts as the same class while this card should flip back 

         target.classList.add("flipped");
        
         // Get cards by one tag
         console.log(target.dataset.animal);
         if (!hasFlipped) {
          // First click

          hasFlipped = true;
          cardOne = target;
         } else {
          // Second click

          hasFlipped = false;
          cardTwo = target;
          checkMatch();
        }
              
        
};

const checkMatch = () => {
            const isEqual = cardOne.dataset.animal === cardTwo.dataset.animal;
            isEqual ? disCards() : unflip();

  // if (cardOne.dataset.animal === cardTwo.dataset.animal) {
  //   //Cards are equal
  //   disCards();
  // }else {
  //   lockedCard = true;  
  //   //Cards are not equal
  //   setTimeout(() =>{
  //     cardOne.classList.remove("flipped");
  //     cardTwo.classList.remove("flipped");
  //     lockedCard = false;
  //   }, 1000)
      
};

// disable cards function
const disCards = () => {
  cardOne.removeEventListener("click", flippedCard);
  cardTwo.removeEventListener("click", flippedCard);
};

// unflip cards function
const unflip = () => {
        lockedCard = true; 

        setTimeout(() =>{
              cardOne.classList.remove("flipped");
              cardTwo.classList.remove("flipped");
              resetBoard();
            }, 1000)
};

const resetBoard = () => {
  // [hasFlipped, lockedCard] = [false, false];
  // [cardOne, cardTwo] = [null, null];

  hasFlipped = lockedCard = false;
  cardOne = cardTwo = null;
  
}

// Add Event Listener to every card
  cards.forEach(card => {
  card.addEventListener('click', flippedCard);
//shuffle cards for next game
  const randomShuffle = Math.floor(Math.random() * cards.length);
  card.style.order = randomShuffle;
});

// const gameover = () => {
//   gameOver = true;
//   window.location.reload();
//   randomShuffle();
//   unflip();
// };
// Restart game
document.querySelector('.restart').addEventListener('click', function(){
  window.location.reload();  
  return false;
  
});
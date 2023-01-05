/* jshint esversion: 11 */

var cards = document.querySelectorAll('.card');

let hasFlipped = false;
let cardOne, cardTwo;
let lockedCard = false; // can't flip another card until previous cards action completed

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
    addFlipCount();
    hasFlipped = false;
    cardTwo = target;
    checkMatch();
  }


};

const checkMatch = () => {
  const isEqual = cardOne.dataset.animal === cardTwo.dataset.animal;
  isEqual ? disCards() : unflip();

};

// disable cards function
const disCards = () => {
  cardOne.removeEventListener("click", flippedCard);
  cardTwo.removeEventListener("click", flippedCard);
};

// unflip cards function
const unflip = () => {
  lockedCard = true;

  setTimeout(() => {
    cardOne.classList.remove("flipped");
    cardTwo.classList.remove("flipped");
    resetBoard();
  }, 1000)
};

const resetBoard = () => {

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
// Time
// timeTag = document.querySelector(".timer"),
// flipsTag = document.querySelector(".flips"),
const startTime = 0.1;
let time = startTime * 60;
const timeTag = document.getElementById('timer');
let timerInterval;
startTimer();
function startTimer() {
  timerInterval = setInterval(countTimer, 1000)
};

function countTimer() {

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;



  timeTag.innerHTML = `${minutes}: ${seconds}`;
  time--;
  if (time < 0) {
    clearInterval(timerInterval);
    timeOver();
  };

};

// Restart game
document.querySelector('.restart').addEventListener('click', function () {
  window.location.reload();
  return false;

});

function timeOver() {
  cards.forEach(card => {
        card.classList.add("disable");
  });
}

let flipCount = 0;
let flipCounter = document.getElementById("flips");

function addFlipCount(){
  flipCount +=1;
  flipCounter.innerText = flipCount;
};

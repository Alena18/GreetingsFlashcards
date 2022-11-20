var cards = document.querySelectorAll('.card');
let cardOne, cardTwo;

cards.forEach(card => {
  card.addEventListener('click', flipped)
});

function flipped() {
  this.classList.toggle('flipped');
}
// function flipped(c) {
//     let clickedCard = c.target;
//     if(clickedCard !== cardOne) {
//       //return the cardOne value to clickedCard
//       this.classList.add("flipped");
//       if(!cardOne){
//       return cardOne = clickedCard;
//     }
//     cardTwo = clickedCard;
//     let cardOneImg = this.querySelector("img"),
//     cardTwoImg = this.querySelector("img");
//     matchCards(cardOneImg, cardTwoImg);
//   }
// }

// function matchCards(img1, img2) {
//   if(img1 === img2) {
//     return console.log("matched");    
//   }
//   console.log("not matched");
// }


// const cards = document.querySelectorAll(".card");


// cards.forEach((card) => {
//          card.addEventListener("click",
//         function() {
//           card.classList.toggle("flipped");
//         });
//    });

//  let cards = document.querySelectorAll(".card");
//  let card1 = card2 = this.dataset.animal;
//  let matchedCards ="";
//  let disCards = 0;

 
//  function flipCard() {
//     this.classList.toggle("flip");
    
//     if (card1 == card2 ){
//             console.log("correct");
//           }
//  }

//  cards.forEach(card => {
//       card.addEventListener("click", flipCard);
//  });


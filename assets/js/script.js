var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('flipped');
  });
});





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


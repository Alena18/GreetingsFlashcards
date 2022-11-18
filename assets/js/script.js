 const cards = document.querySelectorAll(".card");
 let card1 = this.dataset.animal;
 let card2 = this.dataset.animal;
 let matchedCards = [];
 let disCards = [];

 
 function flipCard() {
    this.classList.toggle("flip");
 }

 cards.forEach(card => {
      card.addEventListener("click", flipCard);
 });

 function match() {
  if(disCards.length != 2 ) return;
  const [card1, card2] = 
 }







//  if (card1 == card2 ){
//       console.log("correct");
//     }
// let boxOne;
// let boxTwo;
// let matchedBox = 0;
// let disBox = false;

// // function flip cards
// function flipBox(b) {
//     //getting click box  
//     let clickedBox = b.target;
//     if(clickedBox !== boxOne && !disBox) {
//         clickedBox.classList.add("flip");
//         if(!boxOne) {
//             // return the boxOne value to clickedBox
//             return boxOne = clickedBox; 
//         }
//     boxTwo = clickedBox;  
//     disBox = true;
//     let boxOneImg = boxOne.querySelector("assets/images").src,
//     boxTwoImg = boxTwo.querySelector("assets/images").src;
//     matchBoxes(boxOneImg, boxTwoImg);
//     }
// }

// // function match cards
// function matchBoxes(box1, box2) {
//     // if two cards match
//     if(box1 === box2) {
//         matchedBox++;
//         if(matchedBox ==8) {
//             shuffleBox();
//         }
//     boxOne.removeEventListener("click", flipBox);
//     boxTwo.removeEventListener("click", flipBox);
//     boxOne = boxTwo = ""; // setting both card to blank
//     return disBox = false;
// }
// // if two cards not matched, add shake to both card after 300ms
//     setTimeout (() => {
//        boxOne.classList.add("shake");
//        boxTwo.classList.add("shake");
//     }, 300);
// // removing shakes
// setTimeout (() => {
//     boxOne.classList.remove("shake", "flip");
//     boxTwo.classList.add("shake", "flip");
//     boxOne = boxTwo = "";
//     disBox = false;
// }, 1000);
// }
// // function shuffle cards
// function shuffleBox() {
//     let matchedBox = 0;
//     disBox = false;
//     boxOne = boxTwo = "";
//     let arr = ["budgie", "cat", "dog", "fish", "guineapig", "hamster", "rabbit", "turtle", "budgiebel", "catbel", "dogbel", "fishbel", "guineapigbel", "hamsterbel", "rabbitbel", "turtlebel" ];
//     arr.sort(() => Math.random() >0.5 ? 1:-1);
//     boxes.forEach((card, i) => {
//         box.classList.remove("flip");
//         let boxTag = box.querySelector(".back img");
//         boxTag.src = `assets/images/${arr[i]}.jpg`;
//         box.addEventListener("click", flipBox);
//     });
// }
//     shuffleBox();

// // adding event for all 
//     boxes.forEach(box => {
//         box.classList.add("flip");
//         box.addEventListener("click", flipBox);
//     });

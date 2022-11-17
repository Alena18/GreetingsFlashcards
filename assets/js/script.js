const boxes = document.querySelectorAll(".box");

let boxOne;
let boxTwo;
let matched = 0;
let disBox = false;

// flip cards
function flipBox({target: clickedBox}) {
    if(boxOne !== clickedBox && !disBox) {
        clickedBox.classList.add("flip");
        if(!boxOne) {
            return boxOne = clickedBox;
        }
        boxTwo = clickedBox;
        dis = true;
        let boxOneImg = boxOne.querySelector(".green img").src;
        cardTwoImg = cardTwo.querySelector(".green img").src;
        matchBoxes(boxOneImg, boxTwoImg);
    }
}

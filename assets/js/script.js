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
        disBox = true;
        let boxOneImg = boxOne.querySelector(".back img").src;
        let boxTwoImg = boxTwo.querySelector(".back img").src;
        matchBoxes(boxOneImg, boxTwoImg);
    }
}



const boxes = document.querySelectorAll(".box");

let boxOne;
let boxTwo;
let matched = 0;
let disBox = false;

// click event to all cards
boxes.forEach(box => {
    box.addEventListener("click", flipBox)
})


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
// match cards
function matchBoxes(box1, box2) {
    if(box1 === box2) {
        matched++;
        if(matched ==8) {
            setTimeout (() => {
                return shuffleBox();
            }, 1800);
        }
    }
    boxOne.removeEventListener("click", flipBox);
    boxTwo.removeEventListener("click", flipBox);
    boxOne = boxTwo = "";
    return disBox = false;
}
setTimeout (() => {
    boxOne.classList.add("shake");
    boxTwo.classList.add("shake");
}, 700);

setTimeout (() => {
    boxOne.classList.remove("shake", "flip");
    boxTwo.classList.add("shake", "flip");
    boxOne = boxTwo = "";
    disBox = false;
}, 1400);
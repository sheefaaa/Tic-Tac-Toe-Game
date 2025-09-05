let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");
let newBtn = document.querySelector(".new-btn");

let turn0 = true; //playerX, playerO

const boxDisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const boxEnabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turn0 = true;
    boxEnabled();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxDisabled();
};

let checkWinner = () => {
    for (let pattern of winningCombinations) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner", pos1);
                showWinner(pos1);
            }
        }
    }
};
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
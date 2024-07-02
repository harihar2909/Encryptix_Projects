let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rst-btn");

let turno = true; // player x player o

let newGameBtn = document.querySelector("#nbtn");

let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let msg2 = document.querySelector("#msg2");
let draww = document.querySelector(".draww");

let ClickMusic = document.getElementById("ClickMusic");
let DrawMusic = document.getElementById("DrawMusic");
let WinMusic = document.getElementById("WinMusic");

// 2
let winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// To Reset the Game

const resetGame = () => {
  turno = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  draww.classList.add("hide");
  win = 0;
  count = 0;
};

const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations !  Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const showDraw = () => {
  DrawMusic.play();
  msg2.innerText = " Draw !";
  draww.classList.remove("hide");
};

let count = 0;
let win = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count++;
    ClickMusic.play();
    console.log("Box was clicked");
    if (turno == true) {
      box.innerText = "O";

      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;

    checkWinner();
    if (count == 9 && win == 0) {
      showDraw();
    }
  });
});

const checkWinner = () => {
  for (pattern of winPattern) {
    // console.log(pattern[0],pattern[1],pattern[2]);

    // console.log(
    //     boxes[pattern[0]].innerText,
    //     boxes[pattern[1]].innerText,
    //     boxes[pattern[2]].innerText);

    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner");
        win = 1;
        WinMusic.play();
        showWinner(pos1val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
rstbtn.addEventListener("click", resetGame);

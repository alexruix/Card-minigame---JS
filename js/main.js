let userScore = 0;
let cpuScore = 0;
let closeBtn;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const watercard = document.getElementById("cardwater");
const firecard = document.getElementById("cardfire");
const naturecard = document.getElementById("cardnature");
// const scoreBoard_div = document.getElementById(".score-board")
const restart = document.getElementById("restart");
const result = document.getElementById("result")
const modal = document.querySelector(".modal");
const fire_div = document.getElementById("fire");
const water_div = document.getElementById("water");
const plant_div = document.getElementById("plant");


function getCpuChoice() {
  const choices = ['fire', 'water', 'nature'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function win(userChoice, cpuChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<h1 class="text-win">You win!</h1> <p>Computer choose <strong class="draw">${cpuChoice}</strong></p><button class="button button-again close">Play again</button>`;
  modal.style.display = 'block';

  if (cpuChoice == "water") {
    watercard.src = 'img/watercard.png';
    document.querySelector(".draw").style.color = "blue";
  } else if (cpuChoice == "fire") {
    firecard.src = 'img/firecard.png';
    document.querySelector(".draw").style.color = "red";
  } else {
    naturecard.src = 'img/naturecard.png';
    document.querySelector(".draw").style.color = "green";
  }
}

function lose(userChoice, cpuChoice) {
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = ` <h1 class="text-lose">You lost</h1> <p>Computer choose <strong class="draw">${cpuChoice}</strong></p><button class="button button-again close">Play again</button>`;
  modal.style.display = 'block';

  if (cpuChoice == "water") {
    watercard.src = 'img/watercard.png';
    document.querySelector(".draw").style.color = "blue";
  } else if (cpuChoice == "fire") {
    firecard.src = 'img/firecard.png';
    document.querySelector(".draw").style.color = "red";
  } else {
    naturecard.src = 'img/naturecard.png';
    document.querySelector(".draw").style.color = "green";
  }
}

function draw(userChoice, cpuChoice) {
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<h1>It's a draw</h1> <p>You both choose <strong class="draw">${cpuChoice}</strong></p><button class="button button-again close">Play again</button>`;
  modal.style.display = 'block'

  if (cpuChoice == "water") {
    watercard.src = 'img/watercard.png';
    document.querySelector(".draw").style.color = "blue";
  } else if (cpuChoice == "fire") {
    firecard.src = 'img/firecard.png';
    document.querySelector(".draw").style.color = "red";
  } else {
    naturecard.src = 'img/naturecard.png';
    document.querySelector(".draw").style.color = "green";
  }
}


function play(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case 'firenature':
    case 'waterfire':
    case 'naturewater':
      win(userChoice, cpuChoice);
      break;
    case 'firewater':
    case 'waternature':
    case 'naturefire':
      lose(userChoice, cpuChoice);
      break;
    case 'firefire':
    case 'waterwater':
    case 'naturenature':
      draw(userChoice, cpuChoice);
      break;
  }
}


function main() {

  fire_div.addEventListener('click', function() {
    play('fire');
  })

  water_div.addEventListener('click', function() {
    play('water');
  })

  plant_div.addEventListener('click', function() {
    play('nature');
  })
}


function clearModal(e) {
  closeBtn = document.querySelector('.close');

  if (e.target == modal) {
    modal.style.display = "none";
    cardwater.src = "img/cardgame.png";
    cardfire.src = "img/cardgame.png";
    cardnature.src = "img/cardgame.png";

  } else if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = "none";
      cardwater.src = "img/cardgame.png";
      cardfire.src = "img/cardgame.png";
      cardnature.src = "img/cardgame.png";
    });
  }
}


function restartGame() {
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
}

restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main();

var date = new Date().getFullYear();
document.getElementById("copyright").innerHTML = date;

const buttons = document.querySelectorAll('button');
const round = document.getElementById('round');
const match = document.getElementById('match');
const yourScore = document.getElementById('userScore');
const oppScore = document.getElementById('compScore');

let userScore = 0;
let compScore = 0;

buttons.forEach(button => {
button.addEventListener('click', () => {
  playRound(button.id);
  })
});

function disableButton () {
  buttons.forEach(button => {
    button.disabled = true;
  })
}

function computerPick() {
  return Math.floor(Math.random() * (3) + 1);
}

function playRound(userHero) {
  if (userHero == 'warrior') {
    userPick = 1;
  } else if (userHero == 'bowman') {
    userPick = 2;
  } else if (userHero == 'mage') {
    userPick = 3;
  }

  let compPick = computerPick();

  if (compPick === 1) {
    compHero = 'warrior';
  } else if (compPick === 2) {
    compHero = 'bowman';
  } else if (compPick === 3) {
    compHero = 'mage';
  }

  decision = (((userPick - compPick % 3) + 3) % 3);

  if (decision === 2) {
    round.textContent = `You win! A ${userHero} beats a ${compHero}!`;
    userScore++;
  } else if (decision === 1) {
    round.textContent = `You lose! A ${compHero} beats a ${userHero}..`;
    compScore++;
  } else if (decision === 0) {
    round.textContent = `It's a tie! You both chose a ${userHero}`;
  }

  yourScore.textContent = `Your Score: ${userScore}`; 
  oppScore.textContent = `Computer's Score: ${compScore}`;

  if (userScore == 5) {
  match.textContent = "You won the game!";  
  disableButton();  
  } else if (compScore == 5) {
  match.textContent = "You lose the game!! :(";
  disableButton();
  }
}












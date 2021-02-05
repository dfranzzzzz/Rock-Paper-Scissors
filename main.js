round();

function computerPick() {
  let compPick = Math.floor(Math.random() * (3) + 1);

  return compPick;
}

function round() {
  let userHero = prompt("Pick your hero(warrior | archer | mage)")

  if (userHero == 'warrior') {
    userPick = 1;
  } else if (userHero == 'archer') {
    userPick = 2;
  } else if (userHero == 'mage') {
    userPick = 3;
  }

  let compPick = computerPick();

  if (compPick === 1) {
    compHero = 'warrior';
  } else if (compPick === 2) {
    compHero = 'archer';
  } else if (compPick === 3) {
    compHero = 'mage';
  }

  decision = (((userPick - compPick % 3) + 3) % 3);

  if (decision === 2) {
    message = `You win! A ${userHero} beats a ${compHero}!`;
  } else if (decision === 1) {
    message = `You lose! A ${compHero} beats a ${userHero}..`;
  } else if (decision === 0) {
    message = `It's a tie!`;
  }

  console.log(userHero);
  console.log(compHero);

  console.log(message);
}

picking();
// score();

function picking() {
  let userPick = prompt("Pick your Hero(warrior|archer|mage)");
  let compPick = Math.floor(Math.random() * (3) + 1);

  if (userPick == 'warrior') {
    userPick = 1;
  } else if (userPick == 'archer') {
    userPick = 2;
  } else if (userPick == 'mage') {
    userPick = 3;
  }
  console.log(userPick);
  console.log(compPick);
  decision (userPick, compPick);
}



function decision(userHero, compHero) {
  winner = (((userHero - compHero) % 3) + 3) % 3;

  if (winner === 2) {
    console.log("user wins");
  } else if (winner === 1) {
    console.log("comp wins");
  } else if (winner === 0) {
    console.log("tie");
  }

}








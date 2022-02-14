
function superbowlWin() {



  const teams = ["Bengals", "Rams"];

  const winner = teams[Math.floor(Math.random() * teams.length)];
  document.getElementById("demo").innerHTML = winner;
  return new Promise((resolve) => {
    confetti();
    setTimeout(() => resolve(winner), 100);
  });
  // return `${winner} WINS SUPERBOWL IV`;
}


let animationId;

function updateAnimation(newSpeed) {
  if (animationId) clearInterval(animationId);

  animationId = setInterval(() => {
    value1.innerText = superbowlWin();

  }, 1000 / newSpeed);

}

// document;

// Math.random();
function superbowlWin() {
  const teams = ["Bangel", "Rams"];
  const winner = teams[Math.floor(Math.random() * teams.length)];
  document.getElementById("demo").innerHTML = winner;
  return winner;
}


let animationId;

function updateAnimation(newSpeed) {
  if (animationId) clearInterval(animationId);

  animationId = setInterval(() => {
    value1.innerText = superbowlWin();
    // value2.innerText = superbowlWin()
    // value3.innerText = getRandomValue()
  }, 1000 / newSpeed);
}

inpSpeed.onchange = function (ev) {
  // document.documentElement => this is ":root" of css
  document.documentElement.style.setProperty("--speed", ev.target.value);

  updateAnimation(ev.target.value);
};

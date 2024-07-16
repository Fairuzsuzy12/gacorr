function checkAnswer() {
  const answer = document.getElementById("answer").value.toLowerCase();
  if (answer === "piano" || answer === "ririn") {
    document.getElementById("riddle-container").style.display = "none";
    document.getElementById("birthday-container").style.display = "block";
    createFireworks();
    createFlowers();
  } else {
    alert("Wrong answer! Try again.");
  }
}

function playMusic() {
  const audio = document.getElementById("birthday-music");
  audio.play();
}

function createFireworks() {
  const container = document.getElementById("fireworks");
  for (let i = 0; i < 20; i++) {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    firework.style.backgroundColor = getRandomColor();
    container.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 3000);
  }
}

function createFlowers() {
  const container = document.getElementById("flowers");
  for (let i = 0; i < 20; i++) {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.top = `${Math.random() * 100}%`;
    container.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 3000);
  }
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("fireworks");
  container.addEventListener("click", createFireworks);
});

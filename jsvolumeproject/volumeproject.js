const canvas = document.getElementById("keypadCanvas");
const ctx = canvas.getContext("2d");
const display = document.getElementById("display");

ctx.font = "24px sans-serif";
ctx.fillStyle = "#222";


let buttons = [];
function random(min, max) { //from ICA13
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Returns shuffled digits
function getShuffledDigits() {
  return [...Array(10).keys()].sort(() => Math.random() - 0.5);
}

// Draw boxes for keypad
function drawKeypad() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  buttons = [];

  const digits = getShuffledDigits();
  const cols = 3;
  const boxSize = 60;
  const gap = 10;
  const startX = 10;
  const startY = 10;

  digits.forEach((digit, index) => {
    const col = index % cols;
    const row = Math.floor(index / cols);

    const x = random(0, canvas.width - boxSize);
    const y = random(0, canvas.height - boxSize);

    // Store box info for click detection
    buttons.push({ digit, x, y, size: boxSize });

    // Draw box
    ctx.fillStyle = "#ddd";
    const h = random(30, boxSize);
    ctx.fillStyle = "#ddd";
    ctx.fillRect(x, y, boxSize, h);

    ctx.strokeStyle = "#000";
    ctx.strokeRect(x, y, boxSize, h);


    // actually draw it VITAL
    ctx.fillStyle = "#000";
    ctx.font = "20px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(digit, x + boxSize / 2, y + h / 2);
  });
}

// Detect click inside box (a lot taken from online)
canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  for (let btn of buttons) {
    if (
      mouseX >= btn.x &&
      mouseX <= btn.x + btn.size &&
      mouseY >= btn.y &&
      mouseY <= btn.y + btn.size
    ) {
      if(rawInput.length < 12){
        adjustDisplay(btn.digit)
      }
      drawKeypad();
      break;
    }
  }
});

let rawInput = "";

function adjustDisplay(digit) {

  if (rawInput.length == 3 || rawInput.length == 7) {
    rawInput += "-";
  }
  rawInput += digit;

  display.value = rawInput;

  if(rawInput.length == 12){
    document.getElementById("completeTag").style.display = "";

     document.getElementById("completeTag2").style.display = "";
  }
}


drawKeypad();

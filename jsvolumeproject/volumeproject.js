const keypad = document.getElementById("keypad");
const display = document.getElementById("display");

let digits = [...Array(10).keys()];

// Shuffle digits using Fisher-Yates - TAKEN FROM ONLINE!
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderKeypad() {
  keypad.innerHTML = "";
  shuffle(digits);
  digits.forEach(d => {
    const btn = document.createElement("button");
    btn.textContent = d;
    btn.addEventListener("click", () => {
      display.value += d;
      renderKeypad(); 
    });
    keypad.appendChild(btn);
  });
}

renderKeypad();

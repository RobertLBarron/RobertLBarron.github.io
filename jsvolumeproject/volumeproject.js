const keypad = document.getElementById("keypad");
const display = document.getElementById("display");

function getShuffledDigits() {
  const digits = [...Array(10).keys()];
  return digits.sort(() => Math.random() - 0.5);
}

function updateKeypad() {
  keypad.innerHTML = "";

  const shuffled = getShuffledDigits();

  shuffled.forEach(digit => {
    const button = document.createElement("button");
    button.textContent = digit;
    button.onclick = () => {
      display.value += digit;
      updateKeypad();
    };
    keypad.appendChild(button);
  });
}

updateKeypad();

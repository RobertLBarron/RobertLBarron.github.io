const triviaEndpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
const adviceEndpoint = "https://api.adviceslip.com/advice";

const triviaButton = document.querySelector("#js-new-quote");
const adviceButton = document.querySelector("#js-new-advice");
const answerButton = document.querySelector("#js-tweet");

triviaButton.addEventListener("click", getTrivia);
adviceButton.addEventListener("click", getAdvice);
answerButton.addEventListener("click", displayAnswer);

document.addEventListener("DOMContentLoaded", getTrivia);

let answer = "";

async function getTrivia() {
  clearQuote();
  try {
    const response = await fetch(triviaEndpoint);
    if (!response.ok) throw new Error(response.statusText);
    const json = await response.json();
    displayQuote(json.question);
    answer = json.answer;
  } catch (err) {
    console.error(err);
    alert("Failed to fetch a trivia quote.");
  }
}

async function getAdvice() {
  clearQuote();
  try {
    const response = await fetch(adviceEndpoint);
    if (!response.ok) throw new Error(response.statusText);
    const json = await response.json();
    displayQuote(json.slip.advice);
    answer = "Just a piece of advice—no answer needed!";
  } catch (err) {
    console.error(err);
    alert("Failed to fetch advice.");
  }
}

function displayQuote(text) {
  const quoteEl = document.getElementById("js-quote-text");
  quoteEl.textContent = text;
}

function displayAnswer() {
  const answerEl = document.getElementById("js-answer-text");
  answerEl.textContent = answer;
}

function clearQuote() {
  document.getElementById("js-quote-text").textContent = "Loading...";
  document.getElementById("js-answer-text").textContent = "";
}


// used beautify to clean this up, it looks WAY better.
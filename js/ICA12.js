

const newQuote = document.querySelector("#js-new-quote");
newQuote.addEventListener('click', getQuote);
document.addEventListener('DOMContentLoaded', getQuote)
const quoteAnswer = document.querySelector("#js-tweet");
quoteAnswer.addEventListener('click', displayAnswer);
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
let answer = "";

async function getQuote(){
let answerArea = document.querySelector('#js-answer-text');
answerArea.textContent = '';

    try{
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.text);
        }

        const json = await response.json();
        console.log(json);
        displayQuote(json.question);
        answer = json.answer;
    } catch (err){
        console.log(err);
        alert('Failed to fetch a new trivia');
    }
}

function displayQuote(question){
   let textID = document.getElementById('js-quote-text');
   textID.textContent = question;

}

function displayAnswer(){
    let textANS = document.getElementById('js-answer-text');
   textANS.textContent = answer;
}
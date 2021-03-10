console.log('and again...');

let xhttps = new XMLHttpRequest();
const url = "http://jservice.io/api/random";

function getData () {
    xhttps.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)  {
            let jsondata = JSON.parse(this.responseText);
            console.log(jsondata);
            displayClue(jsondata);
        }
    }
    xhttps.open("GET", url, true);
    xhttps.send();
}

function displayClue(triviaObj) {
    let container = document.getElementById('container');
    let category = document.getElementById('category');
    let clue = document.getElementById('clue');
    let answer = document.getElementById('answer');

    let answerBtn = document.createElement('button');
    answerBtn.innerText = 'Correct Response';
    container.appendChild(answerBtn);

    let againBtn = document.createElement('button');
    againBtn.innerText = 'Next Question ';
    container.appendChild(againBtn);
    category.innerText = `Category:  ${triviaObj[0].category["title"]}`;
    clue.innerText = triviaObj[0].question;
    answerBtn.addEventListener('click', () => {
        answer.innerText = triviaObj[0].answer;
    });
    againBtn.addEventListener('click', () => {
        answer.innerText = "";
        answerBtn.remove();
        againBtn.remove();
        getData();
    });
}

getData();

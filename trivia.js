console.log('and again...');

let xhttps = new XMLHttpRequest();
const url = "http://jservice.io/api/random";

function getData () {
    xhttps.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)  {
            let jsondata = JSON.parse(this.responseText);
            console.log('initial jsondata');
            console.log(jsondata);
            // document.getElementById("clue").innerHTML = this.responseText;
            displayClue(jsondata);
        }
    }
    xhttps.open("GET", url, true);
    xhttps.send();
}

function displayClue(triviaObj) {
    let clue = document.getElementById('clue');
    let container = document.getElementById('container');
    let answer = document.getElementById('answer');

    let answerBtn = document.createElement('button');
    answerBtn.innerText = 'Correct Response';
    container.appendChild(answerBtn);

    let againBtn = document.createElement('button');
    againBtn.innerText = 'Next Question ';
    container.appendChild(againBtn);

    clue.innerText = triviaObj[0].question;
    answerBtn.addEventListener('click', () => {
        answer.innerText = triviaObj[0].answer;
    });
    answerBtn.addEventListener('click', getdata);
    
}

getData();



function loadClue(evt) {
    let answer = document.getElementById('clue');
    let target = url + evt.target.innerText;
    let xhttps = new XMLHttpRequest();

    xhttps.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200)  {
            let jsondata = JSON.parse(this.responseText);
            answer.innerHTML = this.responseText;
        }
    }

    xhttps.open("GET", target, true)
    xhttps.send();
}


// let demoEl = document.createElement('button');
//     for (let cat of triviaObj) {
//         console.log('in createBtns')
//         console.log(cat)
//         let btn = document.createElement('button');
//         btn.addEventListener('click', loadClue);
//         btn.innerText = cat;
//         demoEl.appendChild(btn);
//     }
// }
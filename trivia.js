console.log('and again...');

let xhttps = new XMLHttpRequest();
const url = "http://jservice.io/api/random";

xhttps.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200)  {
        let jsondata = JSON.parse(this.responseText);
        console.log(jsondata);
        document.getElementById("demo").innerHTML = this.responseText;
        createBtns(jsondata);
    }
}

xhttps.open("GET", url, true)
xhttps.send();

function createBtns(categories) {
    let demoEl = document.createElement('demo');
    for (let cat of categories) {
        let btn = document.createElement('button');
        btn.addEventListener('click', loadClue);
        btn.innerText = cat;
        demoEl.appendChild(btn);
    }
}

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


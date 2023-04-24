let jokeParaEl = document.getElementById("jokeText");
let BtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function jokes() {
    jokeParaEl.classList.add("d-none");
    spinnerEl.classList.remove("d-none");
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();

        })
        .then(function(jsonData) {
            let randomjoke = jsonData.value;
            spinnerEl.classList.add("d-none");
            jokeParaEl.classList.remove("d-none");
            jokeParaEl.textContent = randomjoke;


        })

}


BtnEl.addEventListener("click", jokes);

console.log(BtnEl);
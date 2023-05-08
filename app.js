let jokeParaEl = document.getElementById("jokeText"); // the input text id got here just for accessing the value
let BtnEl = document.getElementById("jokeBtn"); // this is button id for adding the evenets for button also call back function required.
let spinnerEl = document.getElementById("spinner");// this will gives the id of bootstrap spinnner element. 
// here we have to undersand that fetch required two elements

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

// this button is use to add the event , click is event and jokes is call back function //

BtnEl.addEventListener("click", jokes);

console.log(BtnEl);
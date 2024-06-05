//Inizializzazione variabili globali
let ticketPriceReduced;
let ticketPriceSenior;
let price;
let message;
//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
const userNameInput = document.querySelector(".name");
const userKmInput = document.querySelector(".km");
const userAgeInput = document.querySelector(".age");
const submit = document.querySelector(".ticket-submit");

//gestione interazione al click utente
submit.addEventListener("click",
    function(event) {
        event.preventDefault();
        let userName = userNameInput.value;
        let userKm = userKmInput.value;
        let userAge = userAgeInput.value;
        console.log(`L'utente si chiama ${userName}, percorre ${userKm}km ed è ${userAge}`);
    }
);

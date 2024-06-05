//Inizializzazione variabili globali
let ticketPriceReduced;
let ticketPriceSenior;
let price;
let message;
let ticketPrice;
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
        let userKm = parseInt(userKmInput.value);
        let userAge = userAgeInput.value;
        console.log(`L'utente si chiama ${userName}, percorre ${userKm}km ed è ${userAge}`);

        //il prezzo del biglietto è definito in base ai km (0.21 € al km)
        ticketPrice = (userKm * 0.21);
        console.log("Il prezzo intero del biglietto è €",ticketPrice);

        //Calcolo sconto
        if(userAge == "minorenne") { //va applicato uno sconto del 20% per i minorenni
            ticketPriceReduced = (ticketPrice - ((ticketPrice * 20) / 100)).toFixed(2);
            console.log("Biglietto ridotto €",ticketPriceReduced);
            price = ticketPriceReduced;
            message = "Reduced Ticket";
        } else if(userAge == "over-65") { //va applicato uno sconto del 40% per gli over 65.
            ticketPriceSenior = (ticketPrice - ((ticketPrice * 40) / 100)).toFixed(2);
            console.log("Biglietto senior €",ticketPriceSenior);
            price = ticketPriceSenior;
            message = "Senior Ticket";
        } else if(userAge == "maggiorenne") {
            price = ticketPrice;
            message= "Full price Ticket";
        }
    }
);

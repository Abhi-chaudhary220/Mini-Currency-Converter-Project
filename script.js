let amt = document.querySelector("#input");
let countryFlag1 = document.querySelector("#flag1");
let countryFlag2 = document.querySelector("#flag2");
let dropDown = document.querySelectorAll(".dropdown select");
let button = document.querySelector("#btn");
let message = document.querySelector("#msgText");


let url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json";

for(let select of dropDown){
    for(let currCode in currencyCode){
        let options = document.createElement("option");
        options.innerText = currCode;
        options.value = currCode;
        select.appendChild(options);
    }
}

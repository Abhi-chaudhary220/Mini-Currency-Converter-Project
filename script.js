let amt = document.querySelector("#input");
let dropDown = document.querySelectorAll(".dropdown select");
let button = document.querySelector("#btn");
let from = document.querySelector("#fromCurrency");
let to = document.querySelector("#toCurrency");
let message = document.querySelector("#msgText");

let API_KEY = "f3e2d3bc4004708e317c0b97";
let Base_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;
for(let select of dropDown){
    for(let currCode in currencyCode){
        let options = document.createElement("option");
        options.innerText = currCode;
        options.value = currCode;
        if(select.id ==="fromCurrency" && currCode === "USD"){
            options.selected = "selected";
        }
        else if(select.id === "toCurrency" && currCode === "INR"){
            options.selected = "selected";
        }
        select.appendChild(options)
    }
    select.addEventListener("change",(event)=>{
        updateFlg(event.target);

    })
};

const updateFlg = (select) => {
    let currCode = select.value;
    let countryCode = currencyCode[currCode];
    let link = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let image = select.parentElement.querySelector("img");
    image.src = link;
};

button.addEventListener("click", async(event)=>{
    event.preventDefault();
    let amtVal = amt.value;
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amt.value = "1";
    }


let URL = `${Base_URL}/${from.value}`;
let response = await fetch(URL);
let data = await response.json();
let rate = data.conversion_rates[to.value];
let finalRate =  amtVal * rate;
message.innerText = `${amtVal} ${from.value} = ${finalRate.toFixed(2)} ${to.value}`;

});


let amt = document.querySelector("#input");
let from = document.querySelector("#fromCurrency");
let to = document.querySelector("#toCurrency");
let button = document.querySelector("#btn");
let message = document.querySelector("#msgText");

button.addEventListener("click", async(evt)=>{
    evt.preventDefault();

        let fromCu = from.value;
        let toCu= to.value;
        let amount = amt.value;

        if(amount == "" || amount < 1){
            amount = 1;
            amt.value = "1";
        }
        message.innerHTML = "Fetching exchange rate";

        let fromKey = fromCu.toLowerCase();
        let toKey = toCu.toLowerCase();

        let url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/eur.json";
        try{
            let response = await fetch(url);
            if(!response.ok) throw new Error("Network issues");
            let data = await response.json() ;
            let rate = console.log("Data:",data.date);
            let result = amount * rate.toFixed(2);
            message.innerHTML = `${amount} ${fromCu} = ${result} ${toCu}`;
        }
        catch(e){
            console.log(e);
            message.innerHTML = `Something went wrong`;
            
        }


    });
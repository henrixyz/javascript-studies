const form = document.querySelector("form");
const numberReal = document.querySelector("#amount");
const select = document.querySelector("select");
const currentValueReal = 1;
const footer = document.querySelector("footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

let currentUSD = 5.17;
let currentGBP = 6.98;
let currentEUR = 6.10;

function convertToReal(type){
    let real = Number(numberReal.value);
    return real * type;
}

numberReal.addEventListener("input", () =>{
    const regex = /\D+/g
    numberReal.value = String(numberReal.value).replace(regex, "");
})


form.addEventListener("submit", (event) =>{
    event.preventDefault()

    try {
        let convert = 0;
    
        if (select.value === "USD"){
            convert = convertToReal(currentUSD);
            description.innerText = `$1 = R$${String(currentUSD).replace(".",",")}`
    
        }else if(select.value === "GBP"){
            convert = convertToReal(currentGBP);
            description.innerText = `£1 = R$${String(currentGBP).replace(".",",")}`
            
        }else{
            convert = convertToReal(currentEUR);
            description.innerText = `€1 = R$${String(currentEUR).replace(".",",")}`
        }
    
        result.innerText = convert.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
        footer.style.display = "block";

    } catch (error) {
        let real = Number(numberReal.value);

        if (!real) {
            alert("Digite um valor válido");
            return;
        }
    }
    
})


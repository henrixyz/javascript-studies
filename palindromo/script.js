const input_text = document.querySelector("#texto");
const btn_verify = document.querySelector("#verificar");
const result = document.querySelector("#resultado");

input_text.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        btn_verify.click(); 
    }
});

btn_verify.addEventListener("click", () =>{

    if (input_text.value.length === 0){
        result.classList.remove("on")
        alert("Assim não! Digite algo.")
        return
    }
    
    const formatted_text = input_text.value.toUpperCase().trim()

    const inverse_text = input_text.value.toUpperCase().trim().split("").reverse().join("");

    result.classList.add("on");
    if (formatted_text === inverse_text){
        result.style.color = "green";
        result.innerText = `"${formatted_text.toLowerCase()}" é um palíndromo!`;
    }else{
        result.style.color = "red"; 
        result.innerText = `"${formatted_text.toLowerCase()}" não é um palíndromo!`;
    }
    
})
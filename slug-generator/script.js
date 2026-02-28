const btn_gerar = document.querySelector("#gerar");
const form = document.querySelector("#form");
const result_box = document.querySelector(".result-box");
const result_output = document.querySelector("#resultado");
const btn_copy = document.querySelector("#copiar");



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input_text = document.querySelector("#texto").value
    const text_slug = input_text
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g,"-");

    result_box.classList.add("on");
    result_output.textContent = text_slug;

    console.log(text_slug);
})

btn_copy.addEventListener("click", () => {

    navigator.clipboard.writeText(result_output.innerText)
    .then(()=>{
        btn_copy.innerHTML = "Copiado!"
        setTimeout(()=>{
            btn_copy.innerHTML = "<i class='fa-regular fa-copy'></i>"
        }, 1000)
    })
})


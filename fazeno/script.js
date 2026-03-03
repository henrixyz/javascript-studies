// primeiro passo adicionar na lista
const ativities = [];
const btn_add = document.querySelector("#addBtn");
const input = document.querySelector("#tarefaInput");
const ul_list = document.querySelector("#listaTarefas");


btn_add.addEventListener("click", () =>{
    
    if (input.value.length === 0){
        alert("digite algo")
        return
    }
    
    ativities.push({
        text: input.value,
        concluido: false
    })
    
    input.value = ""
    render()
})

input.addEventListener("keydown", (event)=>{
    if (event.key === "Enter"){
        btn_add.click()
    }
})

function render(){
    ul_list.innerHTML = ""
    
    ativities.forEach((prop, index) => {
        
        ul_list.innerHTML += `
        <li
        class="tarefa"
        data-index= "${index}"
        >
        <span class="${prop.concluido ? "concluida" : "" }">${prop.text}</span>
        <i class="fa-solid fa-xmark remover"></i>
        </li>`
    })

    apagarAtividade()
    marcarAtividade()
}

// segundo passo marcar como concluida

function marcarAtividade(){
    
    const tarefas = document.querySelectorAll(".tarefa");
    let last_tap = 0
    
    tarefas.forEach((tarefa) =>{
        
        tarefa.addEventListener("dblclick", () => {
            const index = tarefa.dataset.index;
            ativities[index].concluido = !ativities[index].concluido;
            
            render();
        })
        
        tarefa.addEventListener("touchend", (e)=>{
            const now = Date.now()
            const delay = now - last_tap
            
            if (delay < 300 && delay > 0){
                e.preventDefault()
                const index = tarefa.dataset.index;
                ativities[index].concluido = !ativities[index].concluido;
                render()
            }
            
            last_tap = now
        }) 
        
    })
    
}

function apagarAtividade(){

    const btn_remover = document.querySelectorAll(".remover");

    btn_remover.forEach((btn)=>{

        btn.addEventListener("click", (e) =>{

            const index = e.target.closest(".tarefa").dataset.index
            ativities.splice(index, 1)
            render()
        })
        
    })

}



const botao_tema = document.querySelector("#botao-tema");
botao_tema.addEventListener("click", function(){
    document.body.classList.toggle("claro");
    
    if(document.body.classList.contains("claro")){
        botao_tema.textContent = "Modo escuro 🌜"
    }else{
        botao_tema.textContent = "Modo claro 🌞"
    }
})
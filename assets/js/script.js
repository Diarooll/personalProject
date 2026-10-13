const botao_tema = document.querySelector("#botao-tema");

function aplicarTema(tema) {
    if (tema === "claro") {
        document.body.classList.add("claro");
        botao_tema.textContent = "Modo escuro 🌜";
    } else {
        document.body.classList.remove("claro");
        botao_tema.textContent = "Modo claro 🌞";
    }
}

// Ao carregar: lê o tema salvo (null na primeira visita cai no "else", ou seja, escuro)
aplicarTema(localStorage.getItem("tema"));

botao_tema.addEventListener("click", function () {
    let novoTema;
    if (document.body.classList.contains("claro")) {
        novoTema = "escuro";
    } else {
        novoTema = "claro";
    }   
    aplicarTema(novoTema);
    localStorage.setItem("tema", novoTema);
});
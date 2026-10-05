console.log("Aquivo Javascript conectado com sucesso")
//=========================================
//FUNCIONALIDADE 1: MODO ESCURO (DACK MODE)
//==========================================

// Selecione o botão de tema que criamos no HTML pelo ID
const themeButton = document.getElementById("theme-button");    
// Adiciona um evento de clique ao botão de tema
themeButton.addEventListener("click", () => {
    // Sellecione o corpo (body) da página
    const corpoPagina = document.body;

    // Se o fundo atual for branco, muda para o escuro. Se for escuro, volta para o claro
    if (corpoPagina.style.backgroundColor === "rgb(26, 37, 47)"
corpoPagina.style.backgroundColor === "#1a252f") {
    //Restaura o padrão do CSS original (Modo Claro)
    corpo Paguina.style.backgroundColor = "#f4f716";
    corpoPagina.style.color = "#333333";
    }else {
        //alterapara cores escuras (Modo Escuro)
        corpoPagina.style.backgroundColor = "#1a252f";
        corpoPagina.style.color = "#ffffff";
    }
});


//----------------------------------------
//FUNCIONALIDADE 2: EFEITO NAS TECNOLOGIAS
//----------------------------------------

// Selecione todos os elementos da lista que possuem a classe ''tech-item'' 
const techItems = document.querySelectorAll(".tech-item");

//Como são váriso itens, usamos o forEach (para) para aplicar o efeito em um por um
itensTecnologia.forEach((item) => {

//Evento: Quando o ponteiro do mouse entra no item
item.addEventListener("mouseenter", (){
    item.style.color = ''#3498db''; // Muda a cor do item para azul
    item.style.fontWeight = "bold"; // Deixa o item em negrito
    item.style.cursor = "pointer"; // transfoma a seta do mause em uma mãozinha''
});

//Evento: Quando o mouse sai do item(restaura o padrão)
item.addEventListener("mouseleave", function() {
    item.style.color = ""; // Remove a cor customizada (volta ao CSS
    padão)
    item.style.fontWeight = "nomal"; // Remove o negrito
   });
});


// ---------------------------------------
//FUNCIONALIDADE 3: COTADOR DE CLIQUES SECRETOS
//----------------------------------------

// Seleciona o título principal (seu nome) dentro do cabeçalho
const tituloNome = document.querySelector("header h1");
const emojis = [
    "🤡",
    "🤡",
    "🦄",
    "🦄",
    "👽",
    "👽",
    "👾",
    "👾",
    "🐵",
    "🐵",
    "🐳",
    "🐳",
    "🐥",
    "🐥",
    "🍿",
    "🍿",
];

// Array para armazenar temporariamente as cartas abertas
let openCards = [];
// Embaralha os emojis de forma aleatória
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1));

/* 
1-Cria uma div para cada carta
2- Adiciona a classe "item" para aplicar os estilos do CSS
3- Define o conteúdo da carta (o emoji embaralhado)
4- Define a função que será executada ao clicar na carta
5- Adiciona a carta dentro do contêiner com classe ".game"
*/
for (let i =0; i < emojis.length; i++)
{
    let box = document.createElement ("div");
    box.className ="item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick =handleClick;
    document.querySelector(".game"). appendChild(box);
}

/* 
1-Função executada quando o jogador clica em uma carta
2-Verifica se há menos de duas cartas abertas
3-Adiciona a classe "boxOpen" para mostrar a carta
4-Armazena a carta aberta dentro do array "openCards"
4- Define a função que será executada ao clicar na carta
*/
function handleClick () {
    if(openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    // Quando duas cartas estiverem abertas, aguarda 0.5s e chama a função de comparação
    if (openCards.length == 2) {
        setTimeout(checkMatch,500);

    }
}
// Função responsável por verificar se as duas cartas abertas são iguais
function checkMatch () {
    // Compara o conteúdo (emoji) das duas cartas abertas

    if (openCards[0].innerHTML=== 
        openCards[1].innerHTML) {
        // Se forem iguais, adiciona a classe "boxMatch" em ambas
        // Isso faz com que elas permaneçam viradas
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        } else {
        // Se forem diferentes, remove a classe "boxOpen"
        // Assim, elas "viram" novamente e escondem o emoji
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
        }
        // Limpa o array para permitir novas jogadas
        openCards = [];
        // Verifica se o número de cartas com a classe "boxMatch" é igual
        // ao número total de emojis — ou seja, o jogador encontrou todos os pares
        if (document.querySelectorAll(".boxMatch") .length == emojis.length) {
            alert("Parabéns, você venceu !!!");
        }
    }

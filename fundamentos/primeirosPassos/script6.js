//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

const peca = "";

switch (peca.toLowerCase()) {
    case "peao":
        console.log("frente");
        break;
    case "torre":
        console.log("reto");
        break;
    case "cavalo":
        console.log("em L");
        break;
    case "bispo":
        console.log("diagonais");
        break;
    case "rainha":
        console.log("qualquer direção");
        break;
    case "rei":
        console.log("uma casa ao seu redor");
        break;
    default:
        console.log("Erro!!");
        break;
}
// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 5;
let ast = "*"
let quadrado = '';

for (let c = 0; c < n; c++) {
    quadrado = quadrado + ast
}

for (let c = 0; c <n; c++){
    console.log(quadrado)
}
// Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let ast = '*'
let linha = ''
let posicao = n;

for (let c = 0; c <= n; c++) {
    for (let c = 0; c < n; c++) {
        if (c < posicao) {
            linha += ' '
        } else {
            linha += ast
        }
    }
    console.log(linha)
    linha = ''
    posicao--

}
//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 3;
const b = 6;
const c = 9;

if ( a > b && a > c){
    console.log("O maior numero é o", a)
} else if (b > a && b >  c){
    console.log("O maior numero é o", b)
}else {
    console.log("O maior numero é o", c)
}
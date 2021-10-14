// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let c = 0; c < numbers.length; c++) {
    sum += numbers[c];
}
console.log(sum/numbers.length)
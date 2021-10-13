// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBrut = 3000;
let descInss = 0;
let descIr = 0;

if (salarioBrut < 1556.94) {
    // Salário bruto até R$ 1.556,94: alíquota de 8%
    descInss = salarioBrut * 0.08
} else if (salarioBrut > 1556.95 && salarioBrut < 2594.92) {
    // Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
    descInss = salarioBrut * 0.09
} else if (salarioBrut > 2594.93 && salarioBrut < 5189.82) {
    // Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
    descInss = salarioBrut * 0.11
} else {
    // Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    descInss = 570.88
}

let salarioLiq = salarioBrut - descInss;

if (salarioLiq < 1903.98) {
    // Até R$ 1.903,98: isento de imposto de renda
    salarioLiq = salarioLiq
} else if (salarioLiq > 1903.99 && salarioLiq < 2826.65) {
    // De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
    descIr = (salarioLiq * 0.075) - 142.80;
} else if (salarioLiq > 1903.99 && salarioLiq < 2826.65) {
    // De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
    descIr = (salarioLiq * 0.15) - 345, 80;
} else if (salarioLiq > 4664.68 && salarioLiq < 2826.65) {
    // De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
    descIr = (salarioLiq * 0.225) - 636.13;
} else {
    // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
    descIr = (salarioLiq * 0.275) - 869.36;
}

salarioLiq = salarioBrut - descInss - descIr;
console.log(salarioLiq)



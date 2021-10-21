let h1 = document.createElement('h1');
let body = document.querySelector('body');
let main = document.createElement('main');
let sectionCenter = document.createElement('section');
let sectionL = document.createElement('section');
let sectionR = document.createElement('section');
let paragrafo = document.createElement('p');
let img = document.createElement('img');
let list = document.createElement('ul');
let listItens = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']


for (let c =0; c < listItens.length; c++){
    let listItem = listItens[c]
    let item = document.createElement('li')
    item.innerText = listItem
    list.appendChild(item)
}

h1.innerText = 'Exercício 5.2  - JavaScript DOM';
paragrafo.innerText = 'Algum texto';
h1.className = 'title'
main.className = 'main-content';
sectionCenter.className = 'center-content';
sectionL.className = 'left-content';
sectionR.className = 'right-content';
img.className = 'small-image'
img.src = 'https://picsum.photos/200';
sectionR.appendChild(list)

body.appendChild(h1)
body.appendChild(main)
main.appendChild(sectionCenter)
sectionCenter.appendChild(paragrafo)
main.appendChild(sectionL)
main.appendChild(sectionR)
sectionL.appendChild(img)

// function createElement(nome, pai, tag){
//     nome = document.createElement(tag)
//     pai.appendChild(nome)
// }
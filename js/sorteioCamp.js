//esta listaGeral funciona como um banco de dados
let listaGeral = ["1 CTG Os Vaqueanos - 13ª RT - Restinga Seca","2 CTG Paixão Cortes - 25ª RT - Caxias do Sul","3 CTG Porteira da Serra - 25ª RT - São Marcos","4 CTG Ginetes da Tradição 25ª RT - Caxias do Sul"];

let listaFinalG = [];

let f = 0;
let n = 1;

//executa a função o número de vezes devidas
window.onload = function sorteioSenior() {
    while (listaFinalG.length < listaGeral.length) {
        sorteioBlocoG();
    }
}

//gera um número 'z' aleatório e assim pega um objeto de índice aleatório 'z' na lista geral 
function sortearG() {
    let z = Math.floor(Math.random() * listaGeral.length);
    return listaGeral[z];
}

//inclui o grupo sorteado na lista final caso o mesmo já não esteja presente
function sorteioBlocoG() {
    let sorteado = sortearG();
    if (listaFinalG.includes(sorteado)) {
        return sortearG();
    }
    else {
        listaFinalG.push(sorteado);
    }
}


//exibe apenas o nome do grupo no elemento HTML, retirando seu número executa funções necessárias
function exibirBlocosG() {
    document.getElementById(n).innerHTML = (`${listaFinalG[f].substring(2)}`);
    numeroGrupoG();
    animarBolaG();
    n++;
    f++;
}

//Subtrai e exibe o número do grupo na bola
function numeroGrupoG() {
    sistemaNumeroG("b1");
}

//Realiza a troca de cores na bola
function animarBolaG() {
    sistemaAnimar("b1");
}

//Realiza a troca de classes necessárias na bola
function sistemaAnimar(tag) {
    let animar = document.getElementById(tag);
    animar.classList.toggle("bola__ver__animado");
    animar.classList.toggle("desespero1");
}

//Transforma o nome de um grupo em uma lista e utiliza os índices [0] e [1] como o número e o exibe
function sistemaNumeroG(tag1, tag2) {
    let nomeG = listaFinalG[f];
    let numero1G = nomeG[0];
    let numero2G = nomeG[1];
    let numeroG = numero1G+numero2G;
    
    document.getElementById(tag1).innerHTML = (`${numeroG}`);
}
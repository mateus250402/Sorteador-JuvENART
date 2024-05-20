let listaGeral = ["1 CTG Os Vaqueanos - 13ª RT - Restinga Seca","2 CTG Paixão Cortes - 25ª RT - Caxias do Sul","3 CTG Porteira da Serra - 25ª RT - São Marcos","4 CTG Ginetes da Tradição 25ª RT - Caxias do Sul"];

let listaFinalG = [];

let f = 0;
let n = 1;

//REALIZA O SORTEIO O NÚMERO DE VEZES ADEQUADAS AO LOAD
window.onload = function sorteioSenior() {
    while (listaFinalG.length < listaGeral.length) {
        sorteioBlocoG();
    }
}

//REALIZA O SORTEIO EM SI (POSIÇÃO NO ARRAY)
function sortearG() {
    let z = Math.floor(Math.random() * listaGeral.length);
    return listaGeral[z];
}

//INCLUI O GRUPO SORTEADO NA LISTA DEVIDA
function sorteioBlocoG() {
    let sorteado = sortearG();
    if (listaFinalG.includes(sorteado)) {
        return sortearG();
    }
    else {
        listaFinalG.push(sorteado);
    }
}


//EXIBE OS GRUPO SORTEADO NA TABELA
function exibirBlocosG() {
    document.getElementById(n).innerHTML = (`${listaFinalG[f].substring(2)}`);
    numeroGrupoG();
    animarBolaG();
    n++;
    f++;
}

//SUBTRAI E EXIBE O NÚMERO DO GRUPO
function numeroGrupoG() {
    sistemaNumeroG("b1");
}

//REALIZA A TROCA DE CORES DA BOLA
function animarBolaG() {
    sistemaAnimar("b1");
}

//SISTEMA RESPONSÁVEL POR TROCAR AS CLASSES DA BOLA
function sistemaAnimar(tag) {
    let animar = document.getElementById(tag);
    animar.classList.toggle("bola__ver__animado");
    animar.classList.toggle("desespero1");
}

//SISTEMA RESPONSÁVEL POR COLOCAR O NÚMERO NA BOLA
function sistemaNumeroG(tag1, tag2) {
    let nomeG = listaFinalG[f];
    let numero1G = nomeG[0];
    let numero2G = nomeG[1];
    let numeroG = numero1G+numero2G;
    
    document.getElementById(tag1).innerHTML = (`${numeroG}`);
}
let listaCabeça = ["CTG Querência da Serra - 9ª RT", "CTG Gildo de Freitas - 1ªRT", "CTG Guapos do Itapuí 30ª RT", "GN Ibirapuitã - 4ª RT", "CPF Piá do Sul - 13ª RT", "PTG Bocal de Prata - 23ª RT", "CTG Coronel Thomaz Luiz Osorio - 26ª RT", "CTG M'Bororé - 30ª RT", "CTG Aldeia dos Anjos - 1ª RT", "CTG Rancho da Saudade - 1ª RT"];
let listaGeral = [];
let listaFinal= [];
let bloco1 = [];
let bloco2 = [];
let bloco3 = [];
let y = listaGeral.length;
let z = listaCabeça.length;
let i = 0;

function sorteioSenior() {
    sorteioBloco1();
    sorteioBloco2();
    sorteioBloco3();
    console.log(`BLOCO 1\n${bloco1.join('\n')}\n\nBLOOCO 2\n${bloco2.join('\n')}\n\nBLOCO 3\n${bloco3.join('\n')}`);
}

function sortearGruposGeral() {
    let x = parseInt(Math.random() * y);
    return listaGeral[x];
}

function sortearCabeça() {
    let w = parseInt(Math.random() * z);
    return listaCabeça[w];
}

function sorteioBloco1() {
    if (listaFinal.length < 10) {
        let cabeça = sortearCabeça();
        if (listaFinal.includes(cabeça)) {
            sortearCabeça();
        }
        else{
            listaFinal.push(cabeça);
            exibirBlocos(listaFinal, listaFinal.length);
        }
    }
    if (listaFinal.length < 35) {
        let sorteado = sortearGruposGeral();
        if (listaFinal.includes(sorteado)) {
            sortearGruposGeral();
        }
        else {
            listaFinal.push(sorteado);
            exibirBlocos(listaFinal, listaFinal.length);
        }
   }
}

function sorteioBloco2() {
    if (bloco2.length < 12) {
        let sorteado2 = sortearGruposGeral();
        if (listaFinal.includes(cabeça2)) {
            sortearGruposGeral();
        }
        else {
            bloco2.push(sorteado2);
            exibirBlocos(bloco2, bloco2.length);
        }
    }
}

function sorteioBloco3() {
    if (bloco3.length < 11) {
        let sorteado3 = sortearGruposGeral();
        if (listaFinal.includes(cabeça3)) {
            sortearGruposGeral();
        }
        else {
            bloco3.push(sorteado3);
            exibirBlocos(bloco3, bloco3.length);
        }
    }
}


function exibirBlocos(bloco, id) {
    let exibirBloco = bloco.slice(0).reverse();
    document.getElementById(id).innerHTML = (`${exibirBloco[i]}`)
}
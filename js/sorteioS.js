//esta lista funciona como um banco de dados
let listaCabeça = ["1 CTG Querência da Serra - 9ª RT - Cruz Alta", "2 CTG Gildo de Freitas - 1ªRT - Porto Alegre", "3 CTG Guapos do Itapuí - 30ª RT - Campo Bom", "4 GN Ibirapuitã - 4ª RT - Alegrete", "5 CPF Piá do Sul - 13ª RT - Santa Maria", "6 PTG Bocal de Prata - 23ª RT - Osório", "7 CTG Coronel Thomaz Luiz Osorio - 26ª RT - Pelotas", "8 CTG M'Bororé - 30ª RT - Campo Bom", "9 CTG Aldeia dos Anjos - 1ª RT - Gravataí"];
//esta lista funciona como um banco de dados
let listaGeral = ["11Centro Farroupilha de Tradições Gaúchas - 4ª RT - Alegrete", "12CTF Alma Gaúcha - 13ª RT - Santa Maria", "13CTG Aldeia Farroupilha - 25ª RT - Farroupilha", "14CTG Camacuã - 16ª RT - Camaquã", "15CTG Campeiros do Sul - 1ª RT - Alvorada", "16CTG Estância da Serra - 23ª RT - Osório", "17CTG Heróis Farroupilhas - 25ª RT - Caxias do Sul", "18CTG Independência Gaúcha - 12ª RT - Esteio", "19CTG Lalau Miranda - 7ª RT - Passo Fundo", "20CTG Moacyr da Motta Fortes - 7ª RT - Passo Fundo", "21CTG Os Farrapos - 26ª RT - Pelotas", "22CTG Os Gaudérios - 5ª RT - Cachoeira do Sul", "23CTG Patrulha do Rio Grande - 23ª RT - Santo Antônio da Patrulha", "24CTG Porteira da Tradição - 1ª RT - Eldorado do Sul", "25CTG Pousada do Imigrante - 11ª RT - Nova Bassano", "26CTG Província de São Pedro - 16ª RT - Tapes", "27CTG Sentinela da Querência - 13ª RT - Santa Maria", "28CTG Tarumã - 18ª RT - São Gabriel", "29CTG Tiarayú - 1ª RT - Porto Alegre", "30DT do Clube Recreativo Juvenil - 7ª RT - Passo Fundo", "31DTG Camboatá 30ª RT - Novo Hamburgo", "32DTG DC Alma Gaúcha - 18ª RT - Dom Pedrito", "33DTG Juventude de Alegrete - 4ª RT - Alegrete", "34GAN Anita Garibaldi - 24ª RT - Encantado", "35União Gaúcha João Simões de Lopes Neto - 26ª RT - Pelotas"];

let listaFinalC = [];
let listaFinalG = [];

let f = 0;
let m = 101;
let g = 1;


//executa a função o número de vezes devidas
window.onload = function sorteioSenior() {
    while (listaFinalC.length < listaCabeça.length) {
        sorteioBlocoC();
    }
    while (listaFinalG.length < listaGeral.length) {
        sorteioBlocoG();
    }
}

/*gera um número ('z' para geral e 'w' para os cabeça de chave) aleatório e assim 
pega um objeto de índice aleatório ('z' ou 'w') na lista referente*/
function sortearC() {
    let w = Math.floor(Math.random() * listaCabeça.length);
    return listaCabeça[w];
}
function sortearG() {
    let z = Math.floor(Math.random() * listaGeral.length);
    return listaGeral[z];
}

//inclui o grupo sorteado na lista final referente caso o mesmo já não esteja presente
function sorteioBlocoC() {
    let cabeça = sortearC();
    if (listaFinalC.includes(cabeça)) {
        return sortearC();
    }
    else {
        listaFinalC.push(cabeça);
    }
}
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
function exibirBlocosC() {
    document.getElementById(m).innerHTML = (`${listaFinalC[f].substring(2)}`);
    numeroGrupoC();
    animarBolaC();
    m++;
    f++;
}
function exibirBlocosG() {
    document.getElementById(g).innerHTML = (`${listaFinalG[f].substring(2)}`);
    numeroGrupoG();
    animarBolaG();
    g++;
    f++;
}

//Transforma o nome de um grupo em uma lista e utiliza os índices [0] e [1] como o número e o exibe
function numeroGrupoC() {
    let nomeC = listaFinalC[f];
    let numero1C = nomeC[0];
    let numero2C = nomeC[1];
    let numeroC= numero1C+numero2C;

    document.getElementById("b").innerHTML = (`${numeroC}`);
}
function numeroGrupoG() {
    if (g < 10) {
        sistemaNumeroG("b1")
    }
    else if (g >= 10 && g < 19) {
        sistemaNumeroG("b1", "b2");
    }
    else if (g >= 19 && g < 26) {
        sistemaNumeroG("b2", "b3");
    }
}

//Realiza a troca de cores na bola
function animarBolaG() {
    sistemaAnimar("b1");
    sistemaAnimar("b2");
    sistemaAnimar("b3");
}
function animarBolaC() {
    sistemaAnimar("b");
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
    
    if (g < 10) {
        document.getElementById(tag1).innerHTML = (`${numeroG}`);
    }
    else {
        document.getElementById(tag1).innerHTML = ("X");
        document.getElementById(tag2).innerHTML = (`${numeroG}`);
    }
}
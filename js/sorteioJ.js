let listaCabeça = [" 1 CTG Passo dos Tropeiros - 22ª RT - Rolante", " 2 GF Chaleira Preta - 9ª RT - Ijuí", " 3 CTG Última Tropeada - 11ª RT - Guaporé", " 4 CTG Rodeio de Encruzilhada - 5ª RT - Encruzilhada do Sul", " 5 CTG Felipe Portinho - 7ª RT - Marau", " 6 CTG Tapera Velha - 9ª RT - Tupanciretã", " 7 CTG Tropilha Crioula - 19ª RT - Getúlio Vargas", " 8 CTG Negrinho do Pastoreio - 25ª RT - Caxias do Sul"];

let listaGeral = [" 9 CTG Doze Braças - 29ª RT - Sananduva"," 10DTG Sentinelas da Tradição - 9ª RT - Tupanciretã"," 11CTG Rincão das Coxilhas - 24ª RT - Teutônia"," 12GTCN Velha Carreta - 25ª RT - Caxias do Sul"," 13GPF Aldebarã - 12ª RT - Canoas"," 14CTG Estripe Gaúcha - 11ª RT - Guaporé"," 15CTG Os Legalistas - 3ª RT - Santo Ângelo"," 16CTG Piazito do Litoral - 23ª RT - Cidereira"," 17CTG Galpão Campeiro - 19ª RT - Erechim"," 18CTG Dom Feliciano - 16ª RT - Dom Feliciano"," 19CTG Tropel de Caudilhos - 7ª RT - Passo Fundo"," 20CCTG Lila Alves - Invernada Alma Gaúcha - 21ª RT - Pinheiro Machado"," 21CTG Harmonia Gaúcha - 30ª RT - Ivoti"," 22CTG Negrinho do Pastoreio - 26ª RT - Pelotas"," 23CTG Estância do Chimarrão - 5ª RT - Cachoeira do Sul"," 24CTG Lanceiros do Sul - 5ª RT - Cachoeira do Sul"," 25GR Caami Folclore e Arte Nativa - 13ª RT - São Sepé"," 26CTG Raízes da Tradição - 2ª RT - Charqueadas"," 27CTG Fogo de Chão - 19ª RT - Viadutos"," 28CTG Coração do Rio Grande - 13ª RT - Faxinal do Soturno"," 29CTG Pedro Serrano - 30ª RT - Sapiranga"," 30CTG Porteira das Missões - 3ª RT - Santo Antônio das Missões"," 31CTG João Sobrinho - 23ª RT - Capão da Canoa"," 32CTGPorteira da Restinga - 1ª RT - Porto Alegre"," 33CTG Corredir Missioneiro - 3ª RT - Porto Xavier"," 34CTG Galpão da Boa Vontade - 17ª RT - Palmeira das Missões"," 35CTG Sinuelo da Liberdade - 5ª RT - Encruzilhada do Sul"," 36CTG Osorio de Assis - 14ª RT - Fontoura Xavier"," 37CTG Velha Carreta - 9ª RT - Santa Bárbara do Sul"," 38CTG Rincão da Amizade - 1ª RT - Gravataí"," 39CTG Erva Mate - 24ª RT - Venâncio Aires"," 40GAN Campo Aberto - 18ª RT - Bagé"," 41CTG Terra Nativa - 30ª RT - Novo Hamburgo"," 42CTG Laço Velho - 11ª RT - Bento Gonçalves"," 43CTG Querência do Arroio do Meio - 24ª RT - Arroio do Meio"," 44CTG Patrulha do Oeste - 4ª RT - Uruguaiana"," 45DTG Estância de São Pedro - 6ª RT - Rio Grande"," 46CTG Farroupilha - 6ª RT - Rio Grande"," 47DN Carlos Bastos do Prado - 3ª RT - São Luiz Gonzaga"," 48CTG Palanques da Tradição - 30ª RT - Campo Bom"," 49CTG Sentinela da Seraa - 11ª RT - Garibaldi"," 50CTG Rincão da Alegria - 5ª RT - Santa Cruz do Sul"," 51CTG Sinuelo do Caverá - 18ª RT - Santana do Livramento"," 52CTG Pelego Branco - 15ª RT - Itaquari"," 53CTG Pedro Telles Tourem - 10ª RT - São Francisco de Assis"," 54CTG Carreiteiros do Sul - 26ª RT - Pelotas"," 55CTG Sincero Lemes - 18ª RT - Vila Nova do Sul"," 56CTG Manoel Teixeira - 7ª RT - Tapejara"," 5735 CTG - 1ª RT - Porto Alegre"," 58CTG Dom Luiz Felipe de Nadal - 7ª RT - Passo Fundo"," 59CTG Guapos da Amizade - 1ª RT - Cachoeirinha"," 60CCTG Lila Alves - Raízes da Tradição - 21ª RT - Pinheiro Machado"," 61CTG Tropeiros da Amizade - 21ª RT - Canguçu"," 62CTG Porteira das Missões - 3ª RT - Cerro Largo", " 63CTG Sentinela do Rio Grande - 1ª RT - Glorinha", " 64CTG Sentinela Farroupilha - 16ª RT - Camaquã"," 65CTG Caiboaté - 18ª RT - São Gabriel"," 66CTG Galpão Crioulo - 19ª RT - Aratiba"," 67CTG Adaga Velha - 18ª RT - Rosário do Sul"," 68CTG Candeeiro do Pago - 18ª RT - Candiota"," 69CTG Rodeio da Fronteira - 18ª RT - Dom Pedrito"," 70CTG Sepé Tiaraju - 3ª RT - Santa Rosa"," 71CTG Rancho dos Tropeiros - 9ª RT - Ibirubá"," 72CTG Sentinela dos Cerros - 18ª RT - Caçapava do Sul"," 73CTG Farroupilha - 19ª RT - Erechim"," 74CTG Querência do Prata - 11ª RT - Nova Prata"," 75CTG Sentinela do Forte - 18ª RT - São Gabriel"," 76CTG Sentinela dos Pampas - 5ª RT - Candelária"," 77DT Querência da Medianeira - 13ª RT - Santa Maria"," 78CTG Raízes do Sul - 1ª RT - Porto Alegre"," 79CTG Sinuelo - 35ª RT - Caxias do Sul"," 80CTG Sentinela do Forte - 18ª RT - Caçapava do Sul"," 81CTG Candeeiro da Amizade - 5ª RT - Vera Cruz"," 82CTG Unidos da Querência - 26ª RT - Pelotas"," 83CTG Rancho Amigo - 19ª RT - Barão do Cotegipe"," 84CTG Tropilha Crioula - 3ª RT - São Borja"," 85CTG Sovéu de Ouro - 12ª RT - Nova Santa Rita"," 86CTG Lanceiros de Santa Cruz - 5ª RT - Santa Cruz do Sul"," 87CTG Porteira da Querência - 7ª RT - Sarandi"," 88CTG Querência de Nova Hartz - 30ª RT - Nova Hartz"," 89DTG Lanceiros do Mar - 23ª RT - Tramandaí"," 90PTG Jayme Caetano Braun - 18ª RT - Santana do Livramento"," 91CTG Sentinelas do Pago - 7ª RT - Marau"," 92CTG Querência Crioula - 3ª RT - Giruá"," 93CTG Retorno à Querência - 11ª RT - Nova Prata"," 94CTG Rincão da Cruz - 3ª RT - Itaqui"," 95CTG OS Lanceiros - 15ª RT - Montenegro"," 96CTG Ronda Crioula - 13ª RT - São Sepé"," 97CTG Fronteira Aberta - 18ª RT - Santana do Livramento"," 98GT Sepé Tiarajú - 12ª RT - São Leopoldo"," 99CTG Rodeio dos Palmares - 6ª RT - Santa Vitória do Palmar","100CTG Rodeio da Querência - 19ª RT - Campinas do Sul","101CTG Sentinela da Querência - 19ª RT - Erechim","102GTC 20 de Setembro - 23ª RT - Xangrilá","103CTG Luiz Chivirinho - 18ª RT - Candiota","104CTG José Bonifácio Gomes - 5ª RT - Cachoeira do SUl","106CTG Exemplo - 0ª RT - Manguaco"];

let listaFinalC = [];
let listaFinalG = [];

let i = 0;
let f = 0;
let m = 101;
let n = 1;
let g = 1;
let h = 1;


//REALIZA O SORTEIO EM SI (POSIÇÃO NO ARRAY)
function sortearC() {
    let w = Math.floor(Math.random() * listaCabeça.length);
    return listaCabeça[w];
}
function sortearG() {
    let z = Math.floor(Math.random() * listaGeral.length);
    return listaGeral[z];
}

//INCLUI O GRUPO SORTEADO NA LISTA DEVIDA
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

//REALIZA O SORTEIO O NÚMERO DE VEZES ADEQUADAS AO LOAD
window.onload = function sorteioSenior() {
    while (listaFinalC.length < listaCabeça.length) {
        sorteioBlocoC();
    }
    while (listaFinalG.length < listaGeral.length) {
        sorteioBlocoG();
    }
    console.log(`${listaFinalC}`)
}

//EXIBE OS GRUPO SORTEADO NA TABELA
function exibirBlocosC() {
    document.getElementById(m).innerHTML = (`${listaFinalC[i].substring(3)}`);
    numeroGrupoC();
    animarBolaC();
    m++;
    i++;
}
function exibirBlocosG() {
    document.getElementById(n).innerHTML = (`${listaFinalG[f].substring(3)}`);
    numeroGrupoG();
    animarBolaG();
    n++;
    f++;
}

//SUBTRAI E EXIBE O NÚMERO DO GRUPO
function numeroGrupoC() {
    if (h <= 3) {
        sistemaNumeroC("B1");
    }
    else if (h > 3 && h <= 6) {
        sistemaNumeroC("B1","B2");
    }
    else if (h > 6 && h <= 8) {
        sistemaNumeroC("B2","B3");
    }
    h++;
}
function numeroGrupoG() {
    if (g < 10) {
        sistemaNumeroG("b1");
    }
    else if (g >= 10 && g < 19) {
        sistemaNumeroG("b1","b2");
    }
    else if (g >= 19 && g < 29) {
        sistemaNumeroG("b2","b3");
    }
    else if (g >= 29 && g < 39) {
        sistemaNumeroG("b3","b4");
    }
    else if (g >= 39 && g < 48) {
        sistemaNumeroG("b4","b5");
    }
    else if (g >= 48 && g < 57) {
        sistemaNumeroG("b5","b6");
    }
    else if (g >= 57 && g < 67) {
        sistemaNumeroG("b6","b7");
    }
    else if (g >= 67 && g < 77) {
        sistemaNumeroG("b7","b8");
    }
    else if (g >= 77 && g < 87) {
        sistemaNumeroG("b8","b9");
    }
    else if (g >= 87 && g < 97) {
        sistemaNumeroG("b9","b10");
    }
    g++;
}

//REALIZA A ALTERNÂNCIA NA COR DA BOLA
function animarBolaC() {
    sistemaAnimar("B1");
    sistemaAnimar("B2");
    sistemaAnimar("B3");
}
function animarBolaG() {
    sistemaAnimar("b1");
    sistemaAnimar("b2");
    sistemaAnimar("b3");
    sistemaAnimar("b4");
    sistemaAnimar("b5");
    sistemaAnimar("b6");
    sistemaAnimar("b7");
    sistemaAnimar("b8");
    sistemaAnimar("b9");
    sistemaAnimar("b10");
}

//SISTEMA RESPONSÁVEL POR ALTERAR AS CLASSES DA BOLA
function sistemaAnimar(tag) {
    let animar = document.getElementById(tag);
    animar.classList.toggle("bola__ver__animado");
    animar.classList.toggle("desespero1");
}

//SISTEMA RESPONSÁVEL POR COLOCAR O NÚMERO NA BOLA
function sistemaNumeroC(tag1, tag2) {
    let nomeC = listaFinalC[i];
    let numero1C = nomeC[0];
    let numero2C = nomeC[1];
    let numero3C = nomeC[2];
    let numeroC = numero1C+numero2C+numero3C;

    if (h <= 3) {
        document.getElementById(tag1).innerHTML = (`${numeroC}`);
    }
    else {
        document.getElementById(tag1).innerHTML = ("X");
        document.getElementById(tag2).innerHTML = (`${numeroC}`);
    }    
}
function sistemaNumeroG(tag1, tag2) {
    let nomeG = listaFinalG[f];
    let numero1G = nomeG[0];
    let numero2G = nomeG[1];
    let numero3G = nomeG[2];
    let numeroG = numero1G+numero2G+numero3G;

    if (g < 10) {
        document.getElementById(tag1).innerHTML = (`${numeroG}`);
    }
    else {
        document.getElementById(tag1).innerHTML = ("X");
        document.getElementById(tag2).innerHTML = (`${numeroG}`);
    }
}
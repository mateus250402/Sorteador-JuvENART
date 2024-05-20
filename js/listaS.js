let lista = ["0 CTG Rancho da Saudade - 1ª RT - Cachoeirinha","1 CTG Querência da Serra - 9ª RT - Cruz Alta", "2 CTG Gildo de Freitas - 1ªRT - Porto Alegre", "3 CTG Guapos do Itapuí - 30ª RT - Campo Bom", "4 GN Ibirapuitã - 4ª RT - Alegrete", "5 CPF Piá do Sul - 13ª RT - Santa Maria", "6 PTG Bocal de Prata - 23ª RT - Osório", "7 CTG Coronel Thomaz Luiz Osorio - 26ª RT - Pelotas", "8 CTG M'Bororé - 30ª RT - Campo Bom", "9 CTG Aldeia dos Anjos - 1ª RT - Gravataí","11Centro Farroupilha de Tradições Gaúchas - 4ª RT - Alegrete", "12CTF Alma Gaúcha - 13ª RT - Santa Maria", "13CTG Aldeia Farroupilha - 25ª RT - Farroupilha", "14CTG Camacuã - 16ª RT - Camaquã", "15CTG Campeiros do Sul - 1ª RT - Alvorada", "16CTG Estância da Serra - 23ª RT - Osório", "17CTG Heróis Farroupilhas - 25ª RT - Caxias do Sul", "18CTG Independência Gaúcha - 12ª RT - Esteio", "19CTG Lalau Miranda - 7ª RT - Passo Fundo", "20CTG Moacyr da Motta Fortes - 7ª RT - Passo Fundo", "21CTG Os Farrapos - 26ª RT - Pelotas", "22CTG Os Gaudérios - 5ª RT - Cachoeira do Sul", "23CTG Patrulha do Rio Grande - 23ª RT - Santo Antônio da Patrulha", "24CTG Porteira da Tradição - 1ª RT - Eldorado do Sul", "25CTG Pousada do Imigrante - 11ª RT - Nova Bassano", "26CTG Província de São Pedro - 16ª RT - Tapes", "27CTG Sentinela da Querência - 13ª RT - Santa Maria", "28CTG Tarumã - 18ª RT - São Gabriel", "29CTG Tiarayú - 1ª RT - Porto Alegre", "30DT do Clube Recreativo Juvenil - 7ª RT - Passo Fundo", "31DTG Camboatá 30ª RT - Novo Hamburgo", "32DTG DC Alma Gaúcha - 18ª RT - Dom Pedrito", "33DTG Juventude de Alegrete - 4ª RT - Alegrete", "34GAN Anita Garibaldi - 24ª RT - Encantado", "35União Gaúcha João Simões de Lopes Neto - 26ª RT - Pelotas"];

let m = 1001;
let n = 1;
let i = 0;

window.onload = function gerarLista() {
    while (i <= lista.length) {
        let nome = document.getElementById(m);
        let numero = document.getElementById(n);

        nome.innerHTML = (`${lista[i].substring(2)}`);
        numero.innerHTML = (`${n}`);

        if (n % 2 === 0) {
            nome.classList.add("tabela2");
            numero.classList.add("tabela2h");
        }
        else {
            nome.classList.add("tabela1");
            numero.classList.add("tabela1h");
        }

        m++;
        n++;
        i++;
    }
}
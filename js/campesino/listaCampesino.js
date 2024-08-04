import { lista_campesino } from "../modelos/grupos_campesino.js"

let m = 1001;
let n = 1;
let i = 0;

window.onload = function gerarLista() {
    while (i < lista_campesino.length) {
        //variáveis para facilitar a escrita do código
        let nome = document.getElementById(m);
        let numero = document.getElementById(n);
        let grupo = lista_campesino[i]

        //modifica o elemento html 
        nome.innerHTML = (`${grupo}`);
        numero.innerHTML = (`${n}`);

        //adiciona o estilo ao elemento
        nome.classList.add("tabela");
        numero.classList.add("tabelaH");

        //realiza a troca de id e posição no array
        m++;
        n++;
        i++;
    }
}
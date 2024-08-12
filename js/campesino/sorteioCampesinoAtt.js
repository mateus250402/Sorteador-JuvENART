import {lista_campesino} from "../modelos/grupos_campesino.js"
import {shuffle} from "../modelos/shuffle.js"
import { mensagem_de_sucesso, mensagem_do_grupo } from "../modelos/swetalert.js";

let f = 0;
let n = 1;

//Embaralha a lista
window.onload = shuffle(lista_campesino)

//Por algum motivo (que ainda não descobri) precisei fazer isso para o "onclick" funcionar
let botao = document.getElementById("botao")

//Exibe o nome do grupo em seu devido local pelo id"n"
botao.onclick = function exibirGruposGeral() {
    mensagem_de_sucesso();
}

document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        let nome = document.getElementById(n);
        let bola = document.getElementById("b1");
        let grupo = lista_campesino[f];
    
        mensagem_do_grupo(`${grupo}`,`${grupo.numero}`);   
        nome.innerHTML = (`${grupo}`);
        bola.innerHTML = (`${grupo.numero}`);
        n++;
        f++;
    }
}
);


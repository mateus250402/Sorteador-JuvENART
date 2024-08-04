import {lista_campesino} from "../modelos/grupos_campesino.js"
import {shuffle} from "../modelos/shuffle.js"

let f = 0;
let n = 1;

//Embaralha a lista
window.onload = shuffle(lista_campesino)

//Por algum motivo (que ainda não descobri) precisei fazer isso para o "onclick" funcionar
let botao = document.getElementById("botao")

//Exibe o nome do grupo em seu devido local pelo id"n"
botao.onclick = function exibirGruposGeral() {
    let nome = document.getElementById(n)
    let bola = document.getElementById("b1")
    let grupo = lista_campesino[f]

    nome.innerHTML = (`${grupo}`);
    bola.innerHTML = (`${grupo.numero}`);
    n++;
    f++;
}




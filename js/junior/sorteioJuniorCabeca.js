import {lista_cabeça} from "../modelos/grupos_junior.js";
import {shuffle} from "../modelos/shuffle.js";

let f = 0;
let n = 101;

//Embaralha a lista
window.onload = shuffle(lista_cabeça)

//Por algum motivo (que ainda não descobri) precisei fazer isso para o "onclick" funcionar
let botao = document.getElementById("botao")

//Exibe o nome do grupo em seu devido local pelo id"n"
botao.onclick = function exibirGruposCabeca() {
    let nome = document.getElementById(n)
    let grupo = lista_cabeça[f]

    nome.innerHTML = (`${grupo}`);
    
    numeroGrupoC();

    n++;
    f++;
}

//O querySelectorAll seleciona todos os elementos com a classe "bola__ver__animado1" e os transforma em um arrat "selection", então o método forEach lê o array e executa algo         ((element) => algo) 
function numeroGrupoC() {
    let selection = document.querySelectorAll('.bola__ver__animado');
    selection.forEach((element) => element.innerHTML = lista_cabeça[f].numero); 
}

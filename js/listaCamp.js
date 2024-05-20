let lista = ["1 CTG Os Vaqueanos - 13ª RT - Restinga Seca","2 CTG Paixão Cortes - 25ª RT - Caxias do Sul","3 CTG Porteira da Serra - 25ª RT - São Marcos","4 CTG Ginetes da Tradição 25ª RT - Caxias do Sul"];

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
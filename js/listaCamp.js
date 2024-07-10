let lista = ["1 CTG Os Vaqueanos - 13ª RT - Restinga Seca","2 CTG Paixão Cortes - 25ª RT - Caxias do Sul","3 CTG Porteira da Serra - 25ª RT - São Marcos","4 CTG Ginetes da Tradição 25ª RT - Caxias do Sul"];

let m = 1001;
let n = 1;
let i = 0;


/*esta função alteara para o nome na lista (tendo representada sua posição pela variável 'i') 
os elementos HTML referentes, as variáveis 'm' e 'n' 
são referentes aos id desses elementos HTML, os quais estão em PA de razão +1.
Além disso, adicona a classe correta ao elemento, que antigamente possuia cores alternadas 
(tal funcionalidade permanece existente - mesmo que inativa - devido à possíveis alterações)*/
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
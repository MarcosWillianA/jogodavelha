const tabuleiro = document.querySelector('#tabuleiro');
const celulas = document.querySelectorAll('.celula');
const reiniciar = document.querySelector('#reiniciar');
const O = 'O';
const X = 'X';
const escolhas = [O, X];

console.log(celulas);

let cliques = 0;

celulas.forEach(celula => {
    celula.addEventListener('click', () => {
        if (celula.classList.contains(O) || celula.classList.contains(X)) {
            return;
        } else {
            cliques++;
        }
        celula.classList.add(O);
        celula.innerHTML = O;
        
        
        console.log(`Cliques válidos: ${cliques}`);
        
    });
});
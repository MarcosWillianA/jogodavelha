const tabuleiro = document.querySelector('#tabuleiro');
const celulas = document.querySelectorAll('.celula');
const reiniciar = document.querySelector('#reiniciar');
const O = 'O';
const X = 'X';
const combinacoes = [
    [0, 1, 2], // linha 1
    [3, 4, 5], // linha 2
    [6, 7, 8], // linha 3
    [0, 3, 6], // coluna 1
    [1, 4, 7], // coluna 2
    [2, 5, 8], // coluna 3
    [0, 4, 8], // diagonal
    [2, 4, 6]  // diagonal
];

console.log(celulas);

let cliques = 0;

celulas.forEach(celula => {
    celula.addEventListener('click', () => {
        if (celula.classList.contains(O) || celula.classList.contains(X)) {
            return;
        } else {
            cliques++;
        }

        if (cliques % 2 != 0) {
            celula.classList.add(O);
            celula.innerHTML = O;
        } else {
            celula.classList.add(X);
            celula.innerHTML = X;
        }
        console.log(`Cliques válidos: ${cliques}`);

        for (const combinacao of combinacoes) {
            const [a, b, c] = combinacao;

            const classeA = celulas[a].classList.contains(O) ? O :
                            celulas[a].classList.contains(X) ? X : null;

            if (classeA && celulas[b].classList.contains(classeA) && celulas[c].classList.contains(classeA)) {
                //Adiciona uma segunda classe CSS
                celulas[a].classList.add('vencedor');
                celulas[b].classList.add('vencedor');
                celulas[c].classList.add('vencedor');

                celulas.forEach(clique => clique.style.pointerEvents = 'none');
                //Interrompe a função!
                return;
            }
        }
    });
});

reiniciar.addEventListener('click', () => {
    celulas.forEach(celula => {
        celula.classList.remove('vencedor');
        celula.classList.remove(O);
        celula.classList.remove(X);
        celula.innerHTML = '';
        cliques = 0;
        celulas.forEach(clique => clique.style.pointerEvents = 'auto');
    })
})


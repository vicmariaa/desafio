const container = document.querySelector('.container');

// Array com os dados dos jogos (nome e imagem)
const jogos = [
    { nome: 'Pac-Man', imagem: 'Pac-man.png' },
    { nome: 'Mario Bros', imagem: 'mario-bros.jpg' },
    { nome: 'Pitfall', imagem: 'pitfall.png' },
    { nome: 'Enduro', imagem: 'euduro.png' },
    { nome: 'Donkey Kong', imagem: 'Donkey Kong.png' },
    { nome: 'Galaxy', imagem: 'Galaxy.png' },
    { nome: 'Tennis', imagem: 'Tennis.png' },   
    // ... adicione os demais jogos aqui ...
];

// Função para criar um elemento da grade
function criarGameBox(jogo) {
    const gameBox = document.createElement('div');
    gameBox.classList.add('game-box');
    gameBox.innerHTML = `<img src="${jogo.imagem}" alt="${jogo.nome}"><h2>${jogo.nome}</h2>`;
    return gameBox;
}

// Preenchendo a grade
jogos.forEach(jogo => {
    container.appendChild(criarGameBox(jogo));
});
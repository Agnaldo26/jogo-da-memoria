const cards = document.querySelectorAll('.card');
let hasFlippedCard =false;
let firstCard, secondCard;
let lockBoard = false;

alert('Bem vindo ao Jogo da Memória do Mario. Jogue sozinho ou com um amigo. Divirta(m)-se!!!')

//Função para virar a carta
function flipCard() {
    if(lockBoard) return;

    if(this === firstCard) return;

    this.classList.add('flip')
    if(!hasFlippedCard) { 
        hasFlippedCard =true;
        firstCard = this;
        console.log(firstCard)
        return;
    }

    secondCard =this;
    hasFlippedCard = false;
    console.log(secondCard)
    checkFormMatch();
}


//Função que checa se as cartas são iguais
function checkFormMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
       
        return;
    }

    unflipCards();
}


//Função que desabilita as cartas
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
    console.log(firstCard, secondCard);
}

//Função que desvira as cartas
function unflipCards(){
    lockBoard = true

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard() //lockBoard =false
}, 1500)
}


//Função que reseta o tabuleiro
function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


//Função que embaralha as cartas
(function shuffle() {
    cards.forEach((card) =>{
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.style.order = ramdomPosition;
    })
})(); //Immediately Invoked Function Expression(IIFE)


//Adiciona evento de clique na carta
cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});


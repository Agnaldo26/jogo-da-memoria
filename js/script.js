const cards = document.querySelectorAll('.card');
let hasFlippedCard =false;
let firstCard, secondCard;
let lockBoard = false;

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

function checkFormMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
       
        return;
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
    console.log(firstCard, secondCard);
}

function unflipCards(){
    lockBoard = true

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard() //lockBoard =false
}, 1500)
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});


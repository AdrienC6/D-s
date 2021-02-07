const rules = document.getElementById('rules'); // Voir les règles
const newGame = document.getElementById('new'); // Démarrer une nouvelle partie
const de = document.querySelector('#de'); // Jeu de dé
const save = document.querySelector('#save'); // Sauvegarder les points
const tour1 = document.querySelector('#tour1'); // Tour J1
const total1 = document.querySelector('#total1'); // Total J1
const tour2 = document.querySelector('#tour2'); // Tour J2
const total2 = document.querySelector('#total2'); // Total J2
const activePlayerTour = document.getElementById('active-player-tour'); // Annonce du tour
const player1 = { "name": "1", "tour": tour1.innerHTML, "total": total1.innerHTML }; // J1
const player2 = { "name": "2", "tour": tour2.innerHTML, "total": total2.innerHTML }; // J2
var activePlayer = player1; // Joueur actif

activePlayerTour.innerHTML = "C'est au tour du Joueur " + activePlayer.name;

rules.addEventListener('click', () => {
    alert('Règles du jeu : Cliquez sur le dé pour le lancer. Le résultat du dé est ajouté à votre Tour Score. Vous pouvez relancer le dé pour augmenter votre score, ou sauvegarder vos points dans votre Total. Attention, si vous obtenez un 1, vous perdez vos points et c\'est à l\'autre joueur de lancer le dé. Le premier joueur à atteindre un Total de 100 remporte la partie.');
})

de.addEventListener('click', () => {
    var randomNumber = Math.floor(Math.random() * (1 - 7) + 7);
    de.style.border = "none";
    de.setAttribute('class', 'animate__animated animate__bounce');
    setTimeout(() => {
        de.removeAttribute('class', 'animate__animated animate__bounce');
    }, 500);
    switch (randomNumber) {
        case 1:
            de.src = "../images/1.png";
            de.style.border = "2px solid red";
            scoreZero();
            roles();
            activePlayerTour.innerHTML = "C'est au tour du Joueur " + activePlayer.name; // Annonce du joueur
            randomNumber = 0;
            break;
        case 2:
            de.src = "../images/2.png";
            break;
        case 3:
            de.src = "../images/3.png";
            break;
        case 4:
            de.src = "../images/4.png";
            break;
        case 5:
            de.src = "../images/5.png";
            break;
        case 6:
            de.src = "../images/6.png";
            break;
    }

    activePlayer === player1 ? tour1.innerHTML = parseInt(tour1.innerHTML) + randomNumber : tour2.innerHTML = parseInt(tour2.innerHTML) + randomNumber;
});

save.addEventListener('click', () => {

    if (activePlayer === player1) { // Si joueur 1, total = + tour 1
        total1.innerHTML = parseInt(total1.innerHTML) + parseInt(tour1.innerHTML)
    } else {
        total2.innerHTML = parseInt(total2.innerHTML) + parseInt(tour2.innerHTML); // Sinon total = 2
    }

    scoreZero();
    roles();

    activePlayerTour.innerHTML = "C'est au tour du Joueur " + activePlayer.name;

    if (parseInt(total1.innerHTML) >= 100) {
        activePlayerTour.innerHTML = "Victoire du joueur " + player1.name;
        refresh()
    }

    if (parseInt(total2.innerHTML) >= 100) {
        activePlayerTour.innerHTML = "Victoire du joueur " + player2.name;
        refresh();
    }
})

newGame.addEventListener('click', () => {
    clean();
})

function clean() {
    total1.innerHTML = 0
    total2.innerHTML = 0;
    tour1.innerHTML = 0;
    tour2.innerHTML = 0;
}

function refresh() {
    clean();
    setTimeout(() => {
        activePlayerTour.innerHTML = "C'est au tour du Joueur " + activePlayer.name;
    }, 2000)
}

function scoreZero() {
    if (activePlayer === player1) {
        tour1.innerHTML = 0;
    } else {
        tour2.innerHTML = 0;
    }
}

function roles() {
    if (activePlayer === player1) {
        activePlayer = player2;
        return activePlayer;
    } else {
        activePlayer = player1;
        return activePlayer;
    }
}
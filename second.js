// DOM
const rules = document.getElementById('rules'); // Voir les règles
const de = document.getElementById('de'); // Dés
const start = document.getElementById('start'); // Lancer / Recommencer la partie
const total1 = document.getElementById('total1'); // Total J1
const total2 = document.getElementById('total2'); // Total J2
const tour1 = document.getElementById('tour1'); // Tour J1
const tour2 = document.getElementById('tour2'); // Tour J2
const save = document.getElementById('save'); // Sauvegarder ses points
const again = document.getElementById('again'); // Rejouer
// ------------------------------------------------
// JEU DE BASE
const activePlayerTour = document.getElementById('active-player-tour'); // A qui le tour
activePlayerTour.innerHTML = "C'est au tour du Joueur 1";
start.innerHTML = "Nouvelle Partie";
var activeGame = false; // Jeu actif

// ------------------------------------------------

// LANCER PARTIE
start.addEventListener('click', () => {
    activePlayerTour.innerHTML = "C'est au tour du " + activePlayer;
    total1.innerHTML = 0;
    total2.innerHTML = 0;
    tour1.innerHTML = 0;
    tour2.innerHTML = 0;
    activeGame = true;
    de.src = "../images/1.png";
})
// ------------------------------------------------
rules.addEventListener('click', () => {
    alert('Règles du jeu : Cliquez sur le dé pour le lancer. Le résultat du dé est ajouté à votre Tour Score. Vous pouvez relancer le dé pour augmenter votre score, ou sauvegarder vos points dans votre Total. Attention, si vous obtenez un 1, vous perdez vos points et c\'est à l\'autre joueur de lancer le dé. Le premier joueur à atteindre un Total de 100 remporte la partie.');
})
// ------------------------------------------------
de.addEventListener('click', () => {
    var number = Math.floor(Math.random() * (1 - 7) + 7);
    console.log(number)
    tour1.innerHTML = (number + parseInt(tour1.innerHTML)).toString()

    de.setAttribute('class', 'animate__animated animate__bounce');
    setTimeout(() => {
        de.removeAttribute('class', 'animate__animated animate__bounce');
    }, 500);

    switch (number) {
        case 1:
            de.src = "../images/1.png";
            de.style.border = "2px solid red";
            activePlayer = "Joueur 2";
            activePlayerTour.innerHTML = "C'est au tour du Joueur 2";
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
})













const de = document.querySelector('#de');
const save = document.querySelector('#save');
const again = document.querySelector('#again');
const tour1 = document.querySelector('#tour1');
const total1 = document.querySelector('#total1');
const tour2 = document.querySelector('#tour2');
const total2 = document.querySelector('#total2');

const activePlayerTour = document.getElementById('active-player-tour'); // A qui le tour
const player1 = { "name": "1", "tour": tour1.innerHTML, "total": total1.innerHTML };
const player2 = { "name": "2", "tour": tour2.innerHTML, "total": total2.innerHTML };
var activePlayer = player1;

// console.log(player1);
// console.log(player2);
activePlayerTour.innerHTML = "C'est au tour du Joueur " + activePlayer.name;

de.addEventListener('click', () => {
    var randomNumber = Math.floor(Math.random() * (1 - 7) + 7);
    de.style.border = "none";
    console.log(randomNumber)
    switch (randomNumber) {
        case 1:
            de.src = "../images/1.png";
            de.style.border = "2px solid red";
            activePlayer === player1 ? tour1.innerHTML = 0 : tour2.innerHTML = 0; // Score du tour passe à 0
            activePlayer = activePlayer === player1 ? player2 : player1; // Si joueur = 1 alors devient 2, si 2 devient 1
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
    activePlayer === player1 ? tour1.innerHTML = 0 : tour2.innerHTML = 0; // Score du tour passe à 0

    activePlayer = activePlayer === player1 ? player2 : player1;


    activePlayerTour.innerHTML = "C'est au tour du Joueur " + activePlayer.name;

    if (parseInt(total1.innerHTML) >= 100) {
        activePlayerTour.innerHTML = "Victoire du joueur " + player1.name;
    }

    if (parseInt(total2.innerHTML) >= 100) {
        activePlayerTour.innerHTML = "Victoire du joueur " + player2.name;
    }
})


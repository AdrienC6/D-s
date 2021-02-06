const rules = document.getElementById('rules');

rules.addEventListener('click', () => {
    alert('Règles du jeu : Cliquez sur le dé pour le lancer. Le résultat du dé est ajouté à votre Tour Score. Vous pouvez relancer le dé pour augmenter votre score, ou sauvegarder vos points dans votre Total. Attention, si vous obtenez un 1, vous perdez vos points et c\'est à l\'autre joueur de lancer le dé. Le premier joueur à atteindre un Total de 100 remporte la partie.');
})

// ------------------------------------------------

const activePlayerTour = document.getElementById('active-player-tour');
var activePlayer = "Joueur 1";

activePlayerTour.innerHTML = "C'est au tour du " + activePlayer;


const de = document.getElementById('de');


function play() {
    de.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * (1 - 7) + 7)
        console.log(randomNumber)

        de.setAttribute('class', 'animate__animated animate__bounce');
        setTimeout(() => {
            de.removeAttribute('class', 'animate__animated animate__bounce');
        }, 500);

        switch (randomNumber) {

            case 1:
                de.src = "../images/1.png";
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

}

// -------------------------------------------------
/**
 * Créez une batterie en utilisant HTML, CSS, JS.
 * @author: Konate Mamadou
 */

/** jouer l'audio a l'aider du click */

// Ajoute un écouteur d'événement "click" aux éléments de classe "audio-button"
const buttons = document.querySelectorAll('.audio-button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Récupère l'identifiant de l'audio à lire à partir de l'attribut "data-audio" de l'élément cliqué
        const audioId = this.getAttribute('data-audio');

        // Récupère l'élément audio à lire à partir de son identifiant
        const audioElement = document.getElementById(audioId);

        // Joue l'élément audio
        audioElement.play();
    });
});

/** jouer l'audio a l'aider du clavier en fonction des touches afficher a l'ecran */


// Ajoute un écouteur d'événement "keydown" au document
document.addEventListener('keydown', function(event) {
        // Récupère la touche appuyée
        const key = event.keyCode;

        // Récupère tous les boutons audio
        const buttons = document.querySelectorAll('.audio-button');

        // Parcourt tous les boutons audio
        buttons.forEach(button => {
        // Récupère la touche associée au bouton
        const buttonKey = button.getAttribute('data-key');

        // Si la touche appuyée correspond à la touche associée au bouton
        if (key == buttonKey) {
            // Récupère l'identifiant de l'audio à lire à partir de l'attribut "data-audio" du bouton
            const audioId = button.getAttribute('data-audio');

            // Récupère l'élément audio à lire à partir de son identifiant
            const audioElement = document.getElementById(audioId);

            // Joue l'élément audio
            audioElement.play();
        }
    });
});
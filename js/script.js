// Sélectionnez l'élément contenant le compteur
const counterElement = document.getElementById('counter');

// Définissez la valeur initiale du compteur à 0
let count = 0;

// Définissez la fonction pour incrémenter le compteur jusqu'à 100
function incrementCounter() {
    // Incrémentez la valeur du compteur
    count++;
    
    // Mettez à jour le contenu de l'élément du compteur
    counterElement.textContent = "+" + count + "satisfactions";
    
    // Si le compteur n'a pas encore atteint 100, répétez l'incrémentation
    if (count < 200) {
        setTimeout(incrementCounter, 50); // Appel récursif après 50 millisecondes
    }
}

// Démarrez l'incrémentation du compteur
incrementCounter();

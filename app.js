//on recupere les elements dont on a besoin 
let heuresDiv = document.querySelector('.heures');
let dateDiv = document.querySelector('.date');

const affichageHeure = () => {
    //on déclare les variables dont on va avoir besoin 
    let today, annee, listeMois, mois, listeJours, jourNumero, jourNom, heures, minutes, secondes, deuxChiffres;
    //on récupère la data actuelle 
    today = new Date();
    //on recupere l'année 
    annee = today.getFullYear();
    listeMois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"];
    mois = listeMois[today.getMonth()];
    jourNumero = today.getDate();
    console.log(jourNumero)
    listeJours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    jourNom = listeJours[today.getDay()];
    
    deuxChiffres = function(element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }
    //on recupere les heures : 
    heures = deuxChiffres(today.getHours());
    //on recupere les minutes 
    minutes = deuxChiffres(today.getMinutes());
    //on recupere les secondes 
    secondes = deuxChiffres(today.getSeconds());
    console.log(heuresDiv)
    //on affiche dans les balises selectionner
    heuresDiv.textContent = `${heures}:${minutes}:${secondes}`;
  dateDiv.textContent = jourNom +" / "+ jourNumero + " / " + annee;
    setTimeout(affichageHeure, 1000);
}
affichageHeure();

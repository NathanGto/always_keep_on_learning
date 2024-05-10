let score = 0;

function afficherResultat(score, nbTotalMots) {
  let message = "Votre score est de " + score + " sur " + nbTotalMots; //nbTotaldeMots n'est pas définie.
  return message;
}

function choisirPhrasesOuMots() {
  let choix = prompt(
    "Avec quelle liste désirez-vous jouer ? 'Mots' ou 'Phrases' ?"
  );
  while (choix !== "Mots" && choix !== "Phrases") {
    choix = prompt("Veuillez taper votre choix : 'Mots' ou 'Phrases' !");
  }
  return choix;
}

function lancerBoucleDeJeu(listePropositions) {
  for (let i = 0; i < listePropositions.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i]);
    if (motUtilisateur === listeMots[i]) {
      score++;
    }
  }
  return score;
}

function lancerJeu() {
  let choix = choisirPhrasesOuMots();
  let score = 0;
  let nbMotsProposes = 0;
  afficherResultat(score, nbTotalMots);
  if (choix === 'mots'){
    lancerBoucleDeJeu(listeMots)
  }
  else (choix === 'phrases'){
    lancerBoucleDeJeu(listePhrases)
  }

}

lancerJeu();
 
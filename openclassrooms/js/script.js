function afficherResultat(score, nbMotsProposes) {
  message = console.log(
    "Votre score est de " + score + " sur " + nbMotsProposes
  ); //nbTotaldeMots n'est pas définie.
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
  let score = 0;
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

  if (choix === "Mots") {
    score = lancerBoucleDeJeu(listeMots);
    nbMotsProposes = listeMots.length;
  } else {
    score = lancerBoucleDeJeu(listePhrases);
    nbMotsProposes = listePhrases.length;
  }

  afficherResultat(score, nbMotsProposes);
}

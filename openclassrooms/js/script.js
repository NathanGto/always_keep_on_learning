let score = 0;

let choix = prompt(
  "Avec quelle liste désirez-vous jouer ? 'Mots' ou 'Phrases' ?"
);
while (choix !== "Mots" && choix !== "Phrases") {
  choix = prompt("Veuillez taper votre choix : 'Mots' ou 'Phrases' !");
}

if (choix === "Mots") {
  for (let i = 0; i < listeMots.length; i++) {
    let motUtilisateur = prompt("Entrez le mot : " + listeMots[i]);
    if (motUtilisateur === listeMots[i]) {
      score++;
    }
  }
  console.log("Votre score s'élève à " + score + " sur " + listeMots.length);
}

if (choix === "Phrases") {
  for (let i = 0; i < listePhrases.length; i++) {
    let phraseUtilisateur = prompt(
      "Entrez la phrase suivante " + listePhrases[i]
    );
    if (phraseUtilisateur === listePhrases[i]) {
      score++;
    }
  }
  console.log("Votre score s'élève à " + score + " sur " + listePhrases.length);
}

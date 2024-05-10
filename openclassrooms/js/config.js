const listeMots = ["Cachalot", "Pétunia", "Serviette"];
const listePhrases = [
  "Pas de panique !",
  "La vie, l'univers et le reste",
  "Merci pour le poisson !",
];

const listes = listeMots + listePhrases;

let score = 0;
let nbTotalMots = 3;

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

function lancerBoucleDeJeu() {
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
    console.log(
      "Votre score s'élève à " + score + " sur " + listePhrases.length
    );
  }
}

function lancerJeu() {
  choisirPhrasesOuMots();
  lancerBoucleDeJeu();
  afficherResultat(score, nbTotalMots);
}

//funzione che sposta le chips dopo aver cliccato il bottone
document.getElementById("allIn").onclick = function () {
  document.getElementById("chips").classList.toggle("align-self-end");
  document.getElementById("chips").classList.toggle("align-self-center");
};
;
//funzione che crea le carte coperte in mano al giocatore
let dealButtonClicked = false;

document.getElementById("deal").onclick = function() {
  if (!dealButtonClicked) {
    for (let i = 0; i < 2; i++) {
      const div = document.createElement("div");
      div.className = "back-card";
      const img = document.createElement("img");
      img.src = "img/red-back.png";
      img.alt = "back-card";
      div.appendChild(img);
      document.getElementById("cards-back").appendChild(div);
    }
    dealButtonClicked = true; // Imposta il flag a true dopo il primo click
  }
};


// Faccio una chiamata API per ottenere le immagini delle carte
fetch("https://www.deckofcardsapi.com/api/deck/new/draw/?count=52")
  .then((response) => response.json())
  .then((data) => {
    const cardImages = data.cards.map((card) => card.image);
    console.log(cardImages);
    //Funzione che rivela le carte in maniera casuale
    document.getElementById("reveal").onclick = function () {
      const contenitore = document.getElementById("cards-back");
      contenitore.innerHTML = ""; // Pulisce il contenuto precedente
      for (let i = 0; i < 2; i++) {
        const div = document.createElement("div");
        div.className = "back-card";
        const img = document.createElement("img");
        // Genera un indice casuale per ottenere un'immagine casuale dall'array cardImages
        const indiceImmagineCasuale = Math.floor(Math.random() * cardImages.length);
        img.src = cardImages[indiceImmagineCasuale];
        img.alt = "back-card";
        div.appendChild(img);
        contenitore.appendChild(div);
      }
    };
  })
  .catch((error) => {
    console.error(
      "Si è verificato un errore durante il recupero delle carte:",
      error
    );
  });

 

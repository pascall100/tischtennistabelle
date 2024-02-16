// Warte darauf, dass das DOM vollständig geladen ist
document.addEventListener("DOMContentLoaded", function () {
  
  // Beispiel-Spielerdaten
  const spieler = [
    { platz: 1, name: "Max Muster", spiele: 5, gewonnen: 4, verloren: 1, punkte: 12 },
    { platz: 2, name: "Lisa Beispiel", spiele: 5, gewonnen: 3, verloren: 2, punkte: 9 }
  ];

  // Selektiere das <tbody> Element der Tabelle
  const tbody = document.querySelector("#tischtennis-tabelle tbody");

  // Selektiere den Button zum Hinzufügen eines neuen Spielers
  const neuerSpielerButton = document.querySelector("#neuer-spieler-button");

  // Funktion zum Aktualisieren der Tabelle mit den aktuellen Spielerdaten
  function updateTabelle() {
    tbody.innerHTML = "";

    // Iteriere über alle Spieler und erstelle für jeden eine Zeile in der Tabelle
    spieler.forEach(function (spieler, index) {
      const row = tbody.insertRow();  
      row.insertCell().textContent = spieler.platz;
      row.insertCell().textContent = spieler.name;
      row.insertCell().textContent = spieler.spiele;
      row.insertCell().textContent = spieler.gewonnen;
      row.insertCell().textContent = spieler.verloren;
      row.insertCell().textContent = spieler.punkte;

      // Füge einen Button zum Löschen hinzu und setze ein Event-Listener
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.addEventListener("click", function () {
        removeSpieler(index);
      });
      row.insertCell().appendChild(deleteButton);
    });
  }

  // Funktion zum Hinzufügen eines neuen Spielers
  function addSpieler(neuerSpieler) {
    spieler.push(neuerSpieler);
    updateTabelle();
  }

  // Funktion zum Entfernen eines Spielers basierend auf dem Index
  function removeSpieler(index) {
    spieler.splice(index, 1);
    updateTabelle();
  }

  // Funktion zum Aktualisieren der Spielerdaten
  function updateSpieler(index, aktualisierteDaten) {
    spieler[index] = { ...spieler[index], ...aktualisierteDaten };
    updateTabelle();
  }

  // Event-Listener für den Button zum Hinzufügen eines neuen Spielers
  neuerSpielerButton.addEventListener("click", function () {
    // Erstelle ein leeres Objekt für den neuen Spieler
    const neuerSpieler = {};
    // Fordere Benutzereingaben für die Spielerdaten an
    neuerSpieler.platz = prompt("Geben Sie den Platz des Spielers ein:");
    neuerSpieler.name = prompt("Geben Sie den Namen des Spielers ein:");
    neuerSpieler.spiele = prompt("Wie viele Spiele hat er gewonnen?:");
    neuerSpieler.gewonnen = prompt("Wie viele Spiele hat er verloren?:");
    neuerSpieler.verloren = prompt("Wie viele Sätze gab es?");
    neuerSpieler.punkte = prompt("Geben Sie die Punkte ein");

    // Füge den neuen Spieler hinzu
    addSpieler(neuerSpieler);
  });

  // Initialisiere die Tabelle beim Laden der Seite
  updateTabelle();
});


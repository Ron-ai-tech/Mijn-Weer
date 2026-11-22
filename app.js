// KNMI-weerapp startbestand.
// Bewust geen API-sleutel in deze openbare frontend plaatsen.
document.getElementById("updated").textContent =
  "Basisproject klaar — KNMI API nog aan te sluiten";
document.getElementById("condition").textContent =
  "Wacht op KNMI-configuratie";

// De KNMI Open Data API is bestand-gebaseerd. Kies eerst een dataset
// (bijv. 10-minutenwaarnemingen) en implementeer daarna het uitlezen
// en parsen van het bijbehorende bestandsformaat via een veilige backend.

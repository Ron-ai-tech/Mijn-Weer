# KNMI Weerapp — uploadbasis

Dit is een nieuwe, eenvoudige GitHub Pages-basis voor een Nederlandse weerapp.

## Uploaden naar GitHub
1. Pak `knmi-weerapp-upload.zip` uit.
2. Open je repository op GitHub.
3. Kies **Add file → Upload files**.
4. Upload `index.html`, `style.css`, `app.js` en `README.md`.
5. Commit de wijzigingen.
6. Zet GitHub Pages aan via **Settings → Pages** (deploy vanaf de `main`-branch, root).

## KNMI API
De KNMI Open Data API gebruikt een API-sleutel in de `Authorization`-header. Zet die sleutel niet in `app.js` of andere openbare frontendbestanden. Gebruik voor een echte live koppeling een kleine server-side proxy (bijvoorbeeld een beveiligde serverless functie) en GitHub Secrets.

De Open Data API is bestand-gebaseerd. De juiste dataset, versie en bestandsparser moeten gekozen worden voordat actuele meetwaarden betrouwbaar kunnen worden getoond.

Documentatie:
- https://developer.dataplatform.knmi.nl/open-data-api
- https://developer.dataplatform.knmi.nl/apis/

Dit ZIP-bestand is dus een uploadbare startversie, nog geen volledig werkende live KNMI-feed.

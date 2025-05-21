# 🖼️ TC Crew Profilbild Generator

Eine Web-Anwendung, mit der TikTok-Nutzer ihre Profilbilder mit dem TC Crew-Badge überlagern können, um ein einheitliches Erscheinungsbild für die Crew zu schaffen.

## ✨ Funktionen

- 🔍 Suche nach TikTok-Benutzern anhand ihres Benutzernamens
- 🖼️ Automatisches Abrufen des Profilbilds des Benutzers
- 🎨 Überlagern des Profilbilds mit dem TC Crew-Badge
- 💾 Herunterladen des fertigen Profilbilds

## 🚀 Installation

### Voraussetzungen

- [Node.js](https://nodejs.org/) (Version 18 oder höher)
- [npm](https://www.npmjs.com/) oder [yarn](https://yarnpkg.com/) oder [pnpm](https://pnpm.io/)
- Ein RapidAPI-Konto und API-Schlüssel für die [TikTok API](https://rapidapi.com/Lundehund/api/tiktok-api23)

### Schritte

1. Klone das Repository:
   ```bash
   git clone https://github.com/yourusername/tccrew-generator.git
   cd tccrew-generator
   ```

2. Installiere die Abhängigkeiten:
   ```bash
   npm install
   # oder
   yarn install
   ```

3. Erstelle eine `.env`-Datei im Stammverzeichnis des Projekts und füge deinen RapidAPI-Schlüssel hinzu:
   ```
   VITE_RAPID_API_KEY="dein-rapidapi-schlüssel"
   ```

4. Starte die Entwicklungsumgebung:
   ```bash
   npm run dev
   # oder
   yarn dev
   ```

5. Öffne [http://localhost:5173](http://localhost:5173) in deinem Browser.

## 📖 Verwendung

1. Gib den TikTok-Benutzernamen in das Eingabefeld ein.
2. Klicke auf "Profilbild erstellen!".
3. Warte, bis das Profilbild geladen wurde.
4. Klicke auf "Download", um das überlagerte Profilbild herunterzuladen.
5. Verwende das heruntergeladene Bild als dein neues TikTok-Profilbild.

## 🛠️ Technologien

- [React](https://reactjs.org/) - Frontend-Bibliothek
- [TypeScript](https://www.typescriptlang.org/) - Typisierte JavaScript-Erweiterung
- [Vite](https://vitejs.dev/) - Build-Tool und Entwicklungsserver
- [Chakra UI](https://chakra-ui.com/) - UI-Komponentenbibliothek
- [Axios](https://axios-http.com/) - HTTP-Client für API-Anfragen
- [TikTok API (RapidAPI)](https://rapidapi.com/Lundehund/api/tiktok-api23) - API für TikTok-Benutzerdaten

## 🤝 Beitragen

Beiträge sind willkommen! Wenn du Verbesserungen vorschlagen oder Fehler melden möchtest, erstelle bitte einen Issue oder Pull Request.

1. Forke das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/amazing-feature`)
3. Committe deine Änderungen (`git commit -m 'Füge eine tolle Funktion hinzu'`)
4. Pushe den Branch (`git push origin feature/amazing-feature`)
5. Öffne einen Pull Request

## 📄 Lizenz

Dieses Projekt ist für nur für den Gebrauch der TrueConnective OHG. 

## 📞 Kontakt

Bei Fragen oder Anregungen kannst du gerne einen Issue erstellen oder dich direkt an uns wenden.

---

Erstellt mit ❤️ für die TC Crew von Sebastian Schindler

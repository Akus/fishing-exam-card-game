# Magyar Horgászvizsga Kvízjáték 🎣

Interaktív kvízjáték a magyar állami horgászvizsgára való felkészüléshez. A játék négy fő kategóriában tartalmaz kérdéseket a hazai horgászatról és halakról.

## Jellemzők

- **4 kategória**: Halnevek, Tilalmi idők, Méretkorlátok, Napi korlátok
- **50+ kérdés** valós vizsgaanyag alapján
- **Valós hal képek** a `fish_pictures` mappából
- **Időzített kvíz** (30 másodperc kérdésenként)
- **Interaktív felület** modern dizájnnal
- **Azonnali visszajelzés** válaszokkal
- **Részletes eredmények** teljesítménystatisztikákkal
- **Kép betöltési optimalizáció** gyorsabb élményért

## Kategóriák

### 🐟 Halnevek
- Hazai halak felismerése valós képek alapján
- Őshonos és betelepített fajok
- Magyar halfajok fotóival

### 🚫 Tilalmi idők  
- Mikor nem fogható az egyes halfaj
- Ívási időszakok védelme
- Szezonális korlátozások

### ⚖️ Méretkorlátok
- Minimális fogható méretek
- Halfajonkénti korlátok
- Természetvédelmi szabályok

### 📊 Napi korlátok
- Maximális napi fogási mennyiség
- Darabszám vagy súly szerinti limitek
- Fenntartható horgászat

## Használat

1. **Indítás**: Nyisd meg az `index.html` fájlt böngészőben
2. **Kategória választás**: Válassz a 4 kategória közül
3. **Kvíz**: Válaszolj 10 kérdésre 30 másodperc alatt
4. **Eredmény**: Tekintsd meg a teljesítményedet

## Fájlok

- `index.html` - Fő HTML oldal
- `styles.css` - Modern CSS stílusok
- `app.js` - Játék logika és interakció
- `questions.js` - Kérdések adatbázisa
- `fish_pictures/` - Magyar halfajok képei
- `package.json` - Projekt konfiguráció

## Böngésző támogatás

- Chrome/Edge 80+
- Firefox 75+
- Safari 13+
- Modern mobilböngészők

## Fejlesztés

A projekt tiszta HTML/CSS/JavaScript technológiákkal készült, függőségek nélkül. A kérdések könnyen bővíthetők a `questions.js` fájlban.

### Kérdés hozzáadása

```javascript
{
    question: "Kérdés szövege?",
    image: "🐟", // Emoji ikon
    options: ["A válasz", "B válasz", "C válasz", "D válasz"],
    correct: 0, // Helyes válasz indexe (0-3)
    explanation: "Magyarázat a helyes válaszhoz"
}
```

## Licenc

Ez a projekt oktatási célokra készült a magyar horgászvizsgára való felkészülés támogatásához.

---

**Jó tanulást és sikeres vizsgát! 🎣**

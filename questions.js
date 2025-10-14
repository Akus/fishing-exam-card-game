// Hungarian Fishing Exam Questions Database
const questionsDatabase = {
    'fish-names': [
        {
            question: "Melyik hal látható a képen?",
            image: "fish_pictures/ponty.jpg",
            options: ["Ponty", "Amúr", "Kárász", "Compó"],
            correct: 0,
            explanation: "A ponty Magyarország egyik leggyakoribb halfaja."
        },
        {
            question: "Mi a neve ennek a halnak?",
            image: "fish_pictures/csuka.jpg", 
            options: ["Süllő", "Csuka", "Harcsa", "Balin"],
            correct: 1,
            explanation: "A csuka ragadozó hal, hosszú testű és hegyes fejű."
        },
        {
            question: "Azonosítsd a halfajt!",
            image: "fish_pictures/sügér.jpg",
            options: ["Dévér", "Márna", "Sügér", "Garda"],
            correct: 2,
            explanation: "A sügér apró ragadozó hal, tüskés háti úszóval."
        },
        {
            question: "Melyik halfaj ez?",
            image: "fish_pictures/márna.jpg",
            options: ["Sügér", "Karikakeszeg", "Domolykó", "Márna"],
            correct: 3,
            explanation: "A márna értékes sporthal, gyors és erős."
        },
        {
            question: "Hogyan hívják ezt a halat?",
            image: "fish_pictures/küsz.jpg",
            options: ["Vágó durbincs", "Küsz", "Folyami géb", "Razbóra"],
            correct: 1,
            explanation: "A küsz a legkisebb őshonos halfajunk."
        },
        {
            question: "Mi ez a halfaj?",
            image: "fish_pictures/szilvaorrú_keszeg.jpg",
            options: ["Tök", "Szilvaorrú keszeg", "Lapos keszeg", "Bagolykeszeg"],
            correct: 1,
            explanation: "A szilvaorrú keszeg jellegzetes orrformájáról ismerhető fel."
        },
        {
            question: "Melyik hal ez?",
            image: "fish_pictures/széles_kárász.jpg",
            options: ["Széles kárász", "Kárász", "Aranyhal", "Német ponty"],
            correct: 0,
            explanation: "A széles kárász jellegzetes magas testű halfaj."
        },
        {
            question: "Azonosítsd ezt a halfajt!",
            image: "fish_pictures/harcsa.jpg",
            options: ["Fekete törpeharcsa", "Afrikai harcsa", "Harcsa", "Angolna"],
            correct: 2,
            explanation: "A harcsa a legnagyobb magyar édesvízi hal."
        },
        {
            question: "Mi a neve ennek a halnak?",
            image: "fish_pictures/balin.jpg",
            options: ["Folyami géb", "Kaulkerény", "Kerek géb", "Balin"],
            correct: 3,
            explanation: "A balin rokon a márnával, értékes sporthal."
        },
        {
            question: "Melyik halfaj látható?",
            image: "fish_pictures/dunai_ingola.jpg",
            options: ["Dunai ingola", "Tiszai ingola", "Magyar ingola", "Kárpáti ingola"],
            correct: 0,
            explanation: "A Dunai ingola őshonos, védett halfajunk."
        },
        {
            question: "Azonosítsd a halfajt!",
            image: "fish_pictures/compó.jpg",
            options: ["Compó", "Amúr", "Fehér busa", "Pettyes busa"],
            correct: 0,
            explanation: "A compó ázsiai eredetű, növényevő hal."
        },
        {
            question: "Mi ez a halfaj?",
            image: "fish_pictures/fogassüllő.jpg",
            options: ["Süllő", "Fogassüllő", "Kősüllő", "Sügér"],
            correct: 1,
            explanation: "A fogassüllő nagyobb testű, mint a közönséges süllő."
        },
        {
            question: "Hogyan hívják ezt a halat?",
            image: "fish_pictures/garda.jpg",
            options: ["Viza", "Garda", "Jászkeszeg", "Bodorka"],
            correct: 1,
            explanation: "A garda a leggyakoribb keszegfaj a Dunában."
        },
        {
            question: "Melyik hal látható a képen?",
            image: "fish_pictures/amúr.jpg",
            options: ["Amúr", "Ponty", "Compó", "Fehér busa"],
            correct: 0,
            explanation: "Az amúr ázsiai eredetű, növényevő hal."
        },
        {
            question: "Azonosítsd ezt a halfajt!",
            image: "fish_pictures/kárász.jpg",
            options: ["Széles kárász", "Kárász", "Ezüst kárász", "Aranyhal"],
            correct: 1,
            explanation: "A kárász őshonos halfajunk, ellenálló faj."
        }
    ],
    
    'closed-seasons': [
        {
            question: "Mikor van a csuka tilalmi ideje?",
            image: "fish_pictures/csuka.jpg",
            options: ["Február 1. - Március 31.", "Március 1. - Május 31.", "Január 1. - Március 31.", "Április 1. - Május 15."],
            correct: 0,
            explanation: "A csuka tilalmi ideje február 1-től március 31-ig tart az ívás védelmében."
        },
        {
            question: "Mikor tilos a süllő fogása?",
            image: "fish_pictures/fogassüllő.jpg",
            options: ["Március 1. - Április 30.", "Március 15. - Május 15.", "Május 1. - Június 15.", "Április 15. - Június 15."],
            correct: 0,
            explanation: "A süllő tilalmi ideje március 1-től április 30-ig tart."
        },
        {
            question: "Mikor van a ponty tilalmi ideje?",
            image: "fish_pictures/ponty.jpg",
            options: ["Május 2. - Május 31.", "Május 1. - Június 30.", "Március 1. - Április 30.", "Nincs tilalmi ideje"],
            correct: 0,
            explanation: "A ponty tilalmi ideje május 2-től május 31-ig tart."
        },
        {
            question: "Melyik hónapokban tilos a harcsa fogása?",
            image: "fish_pictures/harcsa.jpg",
            options: ["Április-május", "Május 2. - Június 15.", "Március-április", "Június-július"],
            correct: 1,
            explanation: "A harcsa tilalmi ideje május 2-től június 15-ig tart."
        },
        {
            question: "Mikor van a márna tilalmi ideje?",
            image: "fish_pictures/márna.jpg",
            options: ["Április 15. - Május 31.", "Április 1. - Május 31.", "Május 1. - Június 15.", "Március 15. - Május 15."],
            correct: 0,
            explanation: "A márna tilalmi ideje április 15-től május 31-ig tart."
        },
        {
            question: "Melyik halfajnak nincs tilalmi ideje?",
            image: "�️",
            options: ["Balin", "Amúr", "Kárász", "Bodorka"],
            correct: 2,
            explanation: "A kárásznak nincs tilalmi ideje, egész évben fogható."
        },
        {
            question: "Mikor tilos a compó fogása?",
            image: "fish_pictures/compó.jpg",
            options: ["Április 1. - Május 31.", "Március 1. - Április 30.", "Május 2. - Június 15.", "Március 15. - Május 15."],
            correct: 2,
            explanation: "A compó tilalmi ideje május 2-től június 15-ig tart."
        },
        {
            question: "Melyik időszakban van a sebes pisztráng tilalma?",
            image: "fish_pictures/sebes_pisztráng.jpg",
            options: ["Október 1. - Március 31.", "November 1. - Január 31.", "December 1. - Február 28.", "September 15. - November 30."],
            correct: 0,
            explanation: "A sebes pisztráng tilalmi ideje október 1-től március 31-ig tart."
        },
        {
            question: "Mikor van a balin tilalmi ideje?",
            image: "fish_pictures/balin.jpg",
            options: ["Március 1. - Április 30.", "Április 15. - Június 15.", "Június 1. - Július 31.", "Május 15. - Július 15."],
            correct: 0,
            explanation: "A balin tilalmi ideje március 1-től április 30-ig tart."
        },
        {
            question: "Melyik hónapban kezdődik a legtöbb halfaj tilalmi ideje?",
            image: "�️",
            options: ["Március", "Április", "Május", "Június"],
            correct: 1,
            explanation: "Április hónapban kezdődik a legtöbb halfaj tilalmi ideje az ívási időszak miatt."
        }
    ],
    
    'minimum-weights': [
        {
            question: "Mi a csuka minimális mérete?",
            image: "fish_pictures/csuka.jpg",
            options: ["35 cm", "40 cm", "45 cm", "50 cm"],
            correct: 1,
            explanation: "A csuka minimális mérete 40 cm."
        },
        {
            question: "Mekkora a süllő minimális mérete?",
            image: "fish_pictures/fogassüllő.jpg",
            options: ["30 cm", "35 cm", "40 cm", "25 cm"],
            correct: 0,
            explanation: "A süllő minimális mérete 30 cm."
        },
        {
            question: "Mi a ponty minimális mérete?",
            image: "fish_pictures/ponty.jpg",
            options: ["30 cm", "40 cm", "35 cm", "45 cm"],
            correct: 0,
            explanation: "A ponty minimális mérete 30 cm."
        },
        {
            question: "Mekkora a harcsa minimális mérete?",
            image: "fish_pictures/harcsa.jpg",
            options: ["50 cm", "60 cm", "70 cm", "80 cm"],
            correct: 1,
            explanation: "A harcsa minimális mérete 60 cm."
        },
        {
            question: "Mi a márna minimális mérete?",
            image: "fish_pictures/márna.jpg",
            options: ["30 cm", "35 cm", "40 cm", "25 cm"],
            correct: 2,
            explanation: "A márna minimális mérete 40 cm."
        },
        {
            question: "Mekkora a compó minimális mérete?",
            image: "fish_pictures/compó.jpg",
            options: ["25 cm", "30 cm", "35 cm", "20 cm"],
            correct: 0,
            explanation: "A compó minimális mérete 30 cm."
        },
        {
            question: "Mi a balin minimális mérete?",
            image: "fish_pictures/balin.jpg",
            options: ["30 cm", "25 cm", "40 cm", "35 cm"],
            correct: 2,
            explanation: "A balin minimális mérete 40 cm."
        },
        {
            question: "Mekkora a sebes pisztráng minimális mérete?",
            image: "fish_pictures/sebes_pisztráng.jpg",
            options: ["20 cm", "22 cm", "25 cm", "30 cm"],
            correct: 1,
            explanation: "A sebes pisztráng minimális mérete 22 cm."
        },
        {
            question: "Mi a sügér minimális mérete?",
            image: "fish_pictures/sügér.jpg",
            options: ["10 cm", "12 cm", "15 cm", "18 cm"],
            correct: 2,
            explanation: "A sügér minimális mérete 15 cm."
        },
        {
            question: "Mekkora az amúr minimális mérete?",
            image: "fish_pictures/amúr.jpg",
            options: ["45 cm", "50 cm", "55 cm", "60 cm"],
            correct: 1,
            explanation: "Az amur minimális mérete 50 cm."
        }
    ],
    
    'daily-limits': [
        {
            question: "Hány csuka fogható naponta?",
            image: "fish_pictures/csuka.jpg",
            options: ["1 db", "2 db", "3 db", "5 db"],
            correct: 2,
            explanation: "Naponta maximum 3 db csuka fogható."
        },
        {
            question: "Hány süllő fogható egy nap alatt?",
            image: "fish_pictures/fogassüllő.jpg",
            options: ["2 db", "3 db", "5 db", "10 db"],
            correct: 1,
            explanation: "Naponta maximum 3 db süllő fogható."
        },
        {
            question: "Mi a ponty napi fogási korlátja?",
            image: "fish_pictures/ponty.jpg",
            options: ["3 db", "10 kg", "15 kg", "20 kg"],
            correct: 0,
            explanation: "Naponta maximum 3 db ponty fogható."
        },
        {
            question: "Hány harcsa fogható naponta?",
            image: "fish_pictures/harcsa.jpg",
            options: ["1 db", "2 db", "3 db", "Nincs korlát"],
            correct: 2,
            explanation: "Naponta maximum 3 db harcsa fogható."
        },
        {
            question: "Mi a kárász napi fogási korlátja?",
            image: "fish_pictures/kárász.jpg",
            options: ["2 kg", "3 kg", "5 kg", "Nincs korlát"],
            correct: 3,
            explanation: "A kárász fogására nincs napi korlátozás."
        },
        {
            question: "Hány márna fogható egy nap alatt?",
            image: "fish_pictures/márna.jpg",
            options: ["2 db", "3 db", "5 db", "10 db"],
            correct: 1,
            explanation: "Naponta maximum 3 db márna fogható."
        },
        {
            question: "Mi a compó napi fogási korlátja?",
            image: "fish_pictures/compó.jpg",
            options: ["3 db", "5 db", "10 db", "15 db"],
            correct: 0,
            explanation: "Naponta maximum 3 db compó fogható."
        },
        {
            question: "Hány balin fogható naponta?",
            image: "fish_pictures/balin.jpg",
            options: ["3 db", "5 db", "10 db", "15 db"],
            correct: 0,
            explanation: "Naponta maximum 3 db balin fogható."
        },
        {
            question: "Mi a sügér napi fogási korlátja?",
            image: "fish_pictures/sügér.jpg",
            options: ["3 kg", "15 db", "20 db", "Nincs korlát"],
            correct: 0,
            explanation: "A sügér napi fogási korlátja 3 kg."
        },
        {
            question: "Hány amúr fogható egy nap alatt?",
            image: "fish_pictures/amúr.jpg",
            options: ["1 db", "2 db", "3 db", "5 db"],
            correct: 2,
            explanation: "Naponta maximum 3 db amúr fogható."
        },
        {
            question: "Mi a garda napi fogási korlátja?",
            image: "fish_pictures/garda.jpg",
            options: ["3 kg", "5 kg", "10 kg", "Nincs korlát"],
            correct: 0,
            explanation: "A garda napi fogási korlátja 3 kg."
        }
    ]
};

// Export for use in app.js
window.questionsDatabase = questionsDatabase;

var punkte = 0; //anfang der zählung der punkte (am anfang 0 punkte)
var anzahlSaetze = 0; //variable für den anfang der zählung der sätze wird mit null gleichgesetzt / fängt bei 0 an zu zählen
var gemischterSpanischerSatz; //variable für das mischen der wörter im spanischen satz, wird später genutzt
var satz = null; //leere variable, wird später genutzt
var saetze = [
    {
        satzSpanisch: "El pájaro primitivo atrapa al gusano.".split(" "),
        satzDeutsch: "Der frühe Vogel fängt den Wurm".split(" ")
    },
    {
        satzSpanisch: "Que me jodan los primeros pájaros.".split(" "),
        satzDeutsch: "Der frühe Vogel kann mich mal.".split(" ")
    },
    {
        satzSpanisch: "El que descansa, se oxida.".split(" "),
        satzDeutsch: "Wer rastet, der rostet".split(" ")
    },
    {
        satzSpanisch: "Cada olla encuentra su tapa.".split(" "),
        satzDeutsch: "Jeder Topf findet seinen Deckel.".split(" ")
    },
    {
        satzSpanisch: "Dos tontos, un pensamiento.".split(" "),
        satzDeutsch: "Zwei Dumme, ein Gedanke.".split(" ")
    },
    {
        satzSpanisch: "Si quieres ser guapa, tienes que sufrir.".split(" "),
        satzDeutsch: "Wer schön sein will, muss leiden".split(" ")
    },
    {
        satzSpanisch: "El miedo da alas.".split(" "),
        satzDeutsch: "Angst verleiht Flügel.".split(" ")
    },
    {
        satzSpanisch: "Una mano lava a la otra.".split(" "),
        satzDeutsch: "Eine Hand wäscht die andere.".split(" ")
    },
    {
        satzSpanisch: "El conocimiento es poder.".split(" "),
        satzDeutsch: "Wissen ist Macht".split(" ")
    },
    {
        satzSpanisch: "Las mentiras tienen piernas cortas.".split(" "),
        satzDeutsch: "Lügen haben kurze Beine.".split(" ")
    },
    {
        satzSpanisch: "Todas las cosas buenas son tres.".split(" "),
        satzDeutsch: "Aller guten Dinge sind drei.".split(" ")
    },
    {
        satzSpanisch: "La oportunidad hace ladrones.".split(" "),
        satzDeutsch: "Gelegenheit macht Diebe.".split(" ")
    },
    {
        satzSpanisch: "Mañana habrá oro en la boca.".split(" "),
        satzDeutsch: "Morgenstund hat Gold im Mund.".split(" ")
    },
    {
        satzSpanisch: "Esperar y tomar el té.".split(" "),
        satzDeutsch: "Abwarten und Tee trinken.".split(" ")
    },
    {
        satzSpanisch: "Todos los comienzos son difíciles.".split(" "),
        satzDeutsch: "Aller Anfang ist schwer.".split(" ")
    },
    {
        satzSpanisch: "Chaqueta como pantalones.".split(" "),
        satzDeutsch: "Jacke wie Hose.".split(" ")
    }
];
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { //der variable i wird die arraylänge zugewiesen. sie wird solange abgespielt bis i gleich 0 ist
        var j = Math.floor(Math.random() * (i + 1)); //hier erhält die variable j eine zufällige stelle
        [array[i], array[j]] = [array[j], array[i]]; //arrays an den stellen i und j werden getauscht
    }
}
shuffleArray(saetze); //die sätze werden in die funktion shuffleArray gesetzt, wo sie zufällig gemischt werden
window.addEventListener("load", function () {
    console.log("start");
    var schwierig = document.getElementById("schwierigkeitslevel"); //das ist die variable für die schwierigkeitsstufen leicht, mittel und schwer. es wird auf das jeweilige html element zugegriffen
    var spiel = document.getElementById("fragen"); //zugriff auf html-element mit der id=fragen, variable für die fragen, die auf klick von leicht, mittel und schwer erscheinen
    var ende = document.getElementById("endstand"); //variable, die für das ende das spieles (den fragen) deklariert
    spiel.classList.add("versteckt"); //versteckt die var spiel(html: fragen), also sieht man nur willkommen und die auswahl von leicht, mittel oder schwer
    ende.classList.add("versteckt"); //die classList ende wird hinzugefügt aber noch nicht gezeigt
    //beides wird im css versteckt: visability: hidden versteckt
    document.getElementById("leicht").onclick = function () {
        anzahlSaetze = 5; //erscheinen insgesamt 5 sätze
        schwierig.classList.add("versteckt"); //buttons mit der auswahl der schwierigkeit werden versteckt
        spiel.classList.add("versteckt"); //alles im html mit der id=fragen wird angezeigt (der spanische satz, der deutsche satz, die punktzahl und die zählung der anzahl der sätze)
        neuerSatz(); //ein zufälliger satz wird ausgewählt und erscheint auf der seite
    };
    document.getElementById("mittel").onclick = function () {
        anzahlSaetze = 10; //erscheinen insgesamt 10 sätze
        schwierig.classList.add("versteckt"); // buttons mit der auswahl der schwierigkeit werden versteckt
        spiel.classList.remove("versteckt"); //alles im html mit der id=fragen erscheint, da die manipulation im css aufgehoben wird(remove versteckt)
        neuerSatz(); //ein zufälliger satz wird ausgewählt und erscheint auf der seite
    };
    document.getElementById("schwer").onclick = function () {
        anzahlSaetze = 15; //erscheinen insgesamt 15 sätze
        schwierig.classList.add("versteckt"); // buttons mit der auswahl der schwierigkeit werden versteckt
        spiel.classList.remove("versteckt"); //alles im html mit der id=fragen erscheint, da das css versteckt aufgehoben wird
        neuerSatz(); //ein zufälliger satz wird ausgewählt und erscheint auf der seite
    };
    document.getElementById("neustart").onclick = function () {
        neustart();
    };
    function wortKlick(wort) {
        var richtigeWörter = document.getElementById("wörterRichtig").childElementCount; //eine neue variable wird erstellt, mit der auf die html id=richtigewörter zugegriffen wird; die funktion zählt, wie viele wörter im Attribut richtigeWörter enthalten sind
        //childElementCount zählt die wörter beginnend bei 0
        if (wort == saetze[satz].satzSpanisch[richtigeWörter]) { //wenn das wort mit der position im satzSpanisch Array übereinstimmt
            var span = document.createElement("span"); //das richtige wort wird in der variable aufgenommen und ein element wird kreiert
            span.classList.add("richtigesWort"); //der variable span (das richtige wort) wird eine css gesatltungsdefinition zugewiesen
            span.innerHTML = wort; //span wird mit dem wort gleichgesetzt
            document.getElementById("wörterRichtig").appendChild(span); //unter wörterRichtig erscheint das kreierte span-element
            punkte = punkte + 1; //punkte werden addiert, wenn das wort mit dem wort an der position im array satzSpanisch übereinstimmt
            for (var i = 0; i < gemischterSpanischerSatz.length; i++) { //zählschleife: variable i ist kleiner als der zufällig gemischt spanische satz und wird hochgezählt, solange i kleiner ist als der spanische satz
                if (gemischterSpanischerSatz[i] == wort) { //wenn das angeklicktw wort dem wort aus dem spanischen satz entspricht...
                    gemischterSpanischerSatz.splice(i, 1); //wenn das wort übereinstimmt, wird es aus dem spanischen satz gelöscht
                }
            }
            document.getElementById("satzSpanisch").innerHTML = " "; //zugriff auf die html id=satzSpanisch: der spanische satz wird heruasgelöscht und neue wörter werden hinzugefügt
            for (var i = 0; i < gemischterSpanischerSatz.length; i++) { //schleife: variable i wird auf 0 gesetzt und solange i kleiner als die länge des gemischten satzes ist, wird i hochgezählt
                let wort = document.createElement("span"); //let=wort wird erstellt und ihr variable span (zeile 126) zugewiesen
                wort.classList.add("wort"); //classlist wort aus css wird hier dem let=wort zugewiesen
                wort.innerHTML = gemischterSpanischerSatz[i]; //wort entspreicht der stelle im array satzSpanisch
                wort.addEventListener = function () {
                    wortKlick(wort.innerHTML);
                };
                document.getElementById("satzSpanisch").appendChild(wort); //wort wird an satzSpanisch angefügt
            }
            if (richtigeWörter == saetze[satz].satzSpanisch.length - 1)
                neuerSatz(); //Wenn Länge spanischerSatz gleich richtigeWörter ist, dann entsteht neuer Satz
        }
        else { //ansonsten...
            alert("Falsches Wort"); //...soll ein alert mit dem inhalt falsches wort erscheinen
            if (punkte > 0)
                punkte = punkte - 1; //...und es wird ein punkt abgezogen, solange die punktzahl eins oder größer ist. sollte sie 0 sein, wird kein punkt abgezogen
        }
        document.getElementById("punktestand").innerHTML = punkte + " Punkte!"; //im html erscheint die anzhal der punkte, die man durch das wählen von richtigen und falschen wörtern erhalten hat
    }
    function neuerSatz() {
        document.getElementById("satzDeutsch").innerHTML = " "; //neuer deutscher satz erscheint, wenn neuerSatz in oberen funktionen auftaucht, der satz erscheint im html unter der id=satzDeutsch
        document.getElementById("satzSpanisch").innerHTML = " "; //neuer spanischer satz erscheint, wenn neuerSatz in oberen funktionen auftaucht, der satz erscheint im htm unter der id=satzSpanisch (es erscheinen die anklickbren wörter)
        document.getElementById("wörterRichtig").innerHTML = " "; //richtige wörter div leert sich, damit die richtigen wörter aus dem neuen satz dort erscheinen können (es wir dauf die id richtigeWörter zugegriffen)
        if (satz == null)
            satz = 0; //wenn es keine Sätze im Array mehr gibt, wird die anzahl der sätze auf null gesetzt
        else
            satz = satz + 1; //sollte die anzahl der sätze 5/10/15 noch nicht erreicht sein, erscheint der nächste satz
        document.getElementById("satzDeutsch").innerHTML = saetze[satz].satzDeutsch.join(" "); //es erscheint ein neuer satz, der durch join neu zusammengesetzt wird
        var spanisch = [...saetze[satz].satzSpanisch]; //ein neuer satz aus dem array satzSpanisch wird ausgewählt
        shuffleArray(spanisch); //den spanischen satz setzten wir in die Funktion shuffleArray, sodass die Wörter zufällig gemischt werden
        gemischterSpanischerSatz = spanisch; //der spanische Satz wird mit gemischterSpanischerSatz geleichgesetzt
        for (var i = 0; i < spanisch.length; i++) { //solange i kleiner ist als die länge vom spanischen satz, wird i hochgezählt
            let wort = document.createElement("span"); //let wort wird erstellt und ich hänge einen span an die variable 
            wort.classList.add("wort"); //dem wort wird eine css klasse zugewiesen, die die gestaltung manipuliert
            wort.onclick = function () {
                wortKlick(wort.innerHTML);
            };
            wort.innerHTML = spanisch[i];
            document.getElementById("satzSpanisch").appendChild(wort);
        }
        document.getElementById("satz").innerHTML = satz + 1 + " / " + anzahlSaetze; //hier wird die anzahl der gemachten sätze gezählt und auch ausgegeben
        if (satz == anzahlSaetze) { //wenn der letzte Satz der gewünschten Anzahl der errericht ist...
            spiel.classList.add("versteckt"); //verschwinden die deutschen und spanischen sätze durch hinzufügern der css klasse versteckt
            ende.classList.remove("versteckt"); //und alles unter der html id endstand erscheint
            document.getElementById("punkteGesamt").innerHTML = punkte + " Punkte!"; //die punkte aus der gesamten Lektion wurden gezählt und die Zahl wird jetzt ausgegeben
        }
    }
    function neustart() {
        punkte = 0; //wird der Punktestand zurückgesetzt
        satz = null; //die sätze werden zurückgesetzt, sodass sie durch den shuffleArray neu gemixt ausgegeben werden können (andere reihenfolge)
        ende.classList.add("versteckt"); //id endstand verschwindet mit dem "du hast es geschafft!" und der erreichten punktzahl
        schwierig.classList.remove("versteckt"); //id fragen verschwindet (spanische und deutsche Sätze) und die Auswahl der Button mit den Schwierigkeitsgraden erscheint, da die css klasse versteckt weggenommen wird
    }
});
//zusammen mit Julia Befus, Aanya Kheterpal, Havva Kilic und Pia Giovannelli gemacht
//# sourceMappingURL=ea.js.map
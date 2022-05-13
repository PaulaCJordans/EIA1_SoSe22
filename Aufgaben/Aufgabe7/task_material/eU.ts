const land1: string = "Deutschland";
const deutschland08: number = 82;
const deutschland22: number = 83.2;

const land2: string = "Frankreich";
const frankreich08: number = 62.14;
const frankreich22: number = 65.48;

const land3: string = "Italien";
const italien08: number = 59;
const italien22: number = 59.53;

const land4: string = "Portugal";
const portugal08: number = 10.56;
const portugal22: number = 10.27;

const europa22: number = 447.01;

const jahr: number = 2022;
const eu22: number = 59.89;


function gesamtzahl(land22: number, land: string) {
    console.log("Gesamtzahl EinwohnerInnen in " + land + " " + jahr + ": " + land22 + "Mio.")
};
gesamtzahl(deutschland22, land1);
gesamtzahl(frankreich22, land2);
gesamtzahl(italien22, land3);
gesamtzahl(portugal22, land4);

function anteilEuropa22(jahr: number, land22: number, land: string) {
    const berechnung1: number = land22 / europa22 * 100;
    console.log("Relativ zur Gesamtzahl in der EU " + jahr + ": " + berechnung1 + "%" + " in "+ land)
};

anteilEuropa22(jahr, deutschland22, land1);
anteilEuropa22(jahr, frankreich22, land2);
anteilEuropa22(jahr, italien22, land3);
anteilEuropa22(jahr, portugal22, land4);

function wachstumsrate(land22: number, land08: number, land: string) {
    const berechnung2: number = land22 - land08;
    const berechnung3: number = berechnung2 / land22 * 100;
    console.log("Wachstumsrate in " + land + " seit 2008: "+ berechnung3 + "%")
};
wachstumsrate(deutschland22, deutschland08, land1);
wachstumsrate(frankreich22, frankreich08, land2);
wachstumsrate(italien22, italien08, land3);
wachstumsrate(portugal22, portugal08, land4);

function wachstum(land22: number, land08: number, land: string) {
    const berechnung4: number = land22 - land08
    console.log("Wachstum zwischen 2008 und 2022 in " + land + ": " + berechnung4)
};
wachstum(deutschland22, deutschland08, land1)
wachstum(frankreich22, frankreich08, land2)
wachstum(italien22, italien08, land3)
wachstum(portugal22, portugal08, land4)

document.querySelector("#deutschland").addEventListener("click", bildClicked1);
function bildClicked1() {
    document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Deutschland";
    document.querySelector(".gesamtzahlEinwohnerInnen").innerHTML = "83,2 Mio.";
    document.querySelector(".text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022";
    document.querySelector(".relativZurGesamtzahl").innerHTML = "18,61%";
    document.querySelector(".wachstumsrateProzent").innerHTML = "1,44%";
    document.querySelector(".wachstumsrateZahl").innerHTML = "1,2 Mio.";
    document.querySelector(".chart").setAttribute("style", "height: " + (deutschland22 / europa22 * 100) +"%");
    document.querySelector("#deutschland2").setAttribute("class", "active");
    document.querySelector("#frankreich2").setAttribute("class", "wrapper");
   
};
document.querySelector("#frankreich").addEventListener("click", bildClicked2);
function bildClicked2() {
    document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Frankreich";
    document.querySelector(".gesamtzahlEinwohnerInnen").innerHTML = "65,48 Mio.";
    document.querySelector(".text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2022";
    document.querySelector(".relativZurGesamtzahl").innerHTML = "14,65%";
    document.querySelector(".wachstumsrateProzent").innerHTML = "5,1%";
    document.querySelector(".wachstumsrateZahl").innerHTML = "3,34 Mio.";
    document.querySelector(".chart").setAttribute("style", "height: " + (frankreich22 / europa22 * 100) +"%");
    document.querySelector("#deutschland2").setAttribute("class", "wrapper");
    document.querySelector("#frankreich2").setAttribute("class", "active");
    document.querySelector("#italien2").setAttribute("class", "wrapper");
    document.querySelector("#portugal2").setAttribute("class", "wrapper");
};
document.querySelector("#italien").addEventListener("click", bildClicked3);
function bildClicked3() {
    document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Italien";
    document.querySelector(".gesamtzahlEinwohnerInnen").innerHTML = "59,53 Mio.";
    document.querySelector(".text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Italien in 2022";
    document.querySelector(".relativZurGesamtzahl").innerHTML = "13,32%";
    document.querySelector(".wachstumsrateProzent").innerHTML = "0,89%";
    document.querySelector(".wachstumsrateZahl").innerHTML = "0,53 Mio.";
    document.querySelector(".chart").setAttribute("style", "height: " + (italien22 / europa22 * 100) +"%");
    document.querySelector("#italien2").setAttribute("class", "active");
    document.querySelector("#portugal2").setAttribute("class", "wrapper");
    document.querySelector("#deutschland2").setAttribute("class", "wrapper");
    document.querySelector("#frankreich2").setAttribute("class", "wrapper");
};
document.querySelector("#portugal").addEventListener("click", bildClicked4);
function bildClicked4() {
    document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Portugal";
    document.querySelector(".gesamtzahlEinwohnerInnen").innerHTML = "10,27 Mio.";
    document.querySelector(".text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Portugal in 2022";
    document.querySelector(".relativZurGesamtzahl").innerHTML = "2,29%";
    document.querySelector(".wachstumsrateProzent").innerHTML = "-2,82%";
    document.querySelector(".wachstumsrateZahl").innerHTML = "-0,29 Mio.";
    document.querySelector(".chart").setAttribute("style", "height: " + (portugal22 / europa22 * 100) +"%");
    document.querySelector("#portugal2").setAttribute("class", "active");
    document.querySelector("#italien2").setAttribute("class", "wrapper");
    document.querySelector("#deutschland2").setAttribute("class", "wrapper");
    document.querySelector("#frankreich2").setAttribute("class", "wrapper");
};
document.querySelector("#euroSterne").addEventListener("click", bildClicked5);
function bildClicked5() {
    document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in der europäischen Union";
    document.querySelector(".gesamtzahlEinwohnerInnen").innerHTML = "447,01 Mio.";
    document.querySelector(".text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in der europäischen Union in 2022";
    document.querySelector(".text2").innerHTML = "Relativ zur Gesamtzahl in Europa"
    document.querySelector(".relativZurGesamtzahl").innerHTML = "59,89 %";
    document.querySelector(".wachstumsrateProzent").innerHTML = "1,42%";
    document.querySelector(".wachstumsrateZahl").innerHTML = "6,41 Mio.";
    document.querySelector(".chart").setAttribute("style", "height: " + eu22 + "%"); // Lisa stimmtzu//
    document.querySelector("#deutschland2").setAttribute("class", "wrapper");
    document.querySelector("#frankreich2").setAttribute("class", "wrapper");
    document.querySelector("#italien2").setAttribute("class", "wrapper");
    document.querySelector("#portugal2").setAttribute("class", "wrapper");
};

// "Die Einwohnerzahl in Deutschland beträgt im Jahr 2022: xxx Mio." "Relativ zur Gesamtzahl der Einwohnerzahl in der Eu ist die Einwohnerzahl in Deutschland im Jahr 2022: xxx%" "Für Deutschland hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um xxx% verändert."
const deutschland2008: number = 82;
const deutschland2022: number = 83.2;

const frankreich2008: number = 62.14;
const frankreich2022: number = 65.48;

const italien2008: number = 59;
const italien2022: number = 59.53;

const portugal2008: number = 10.56;
const portugal2022: number = 10.27;

const europa2022: number = 447.01;

const deutschlandAnteilEuropa2022: number = deutschland2022 / europa2022 * 100;
const deutschlandW: number = deutschland2022 - deutschland2008;
const deuschlandWachstumSeit2008: number = deutschlandW / deutschland2022 * 100;

const frankreichAnteilEuropa2022: number = frankreich2022 / europa2022 * 100;
const frankreichW: number = frankreich2022 - frankreich2008;
const frankreichWachstumSeit2008: number = frankreichW / frankreich2022 * 100;

const italienAnteilEuropa2022: number = italien2022 / europa2022 * 100;
const italienW: number = italien2022 - italien2008;
const italienWachstumSeit2008: number = italienW / italien2022 * 100;

const portugalAnteilEuropa2022: number = portugal2022 / europa2022 * 100;
const portugalW: number = portugal2022 - portugal2008;
const portugalWachstumSeit2008: number = portugalW / portugal2022 * 100;



console.log("Gesamtzahl EinwohnerInnen in Deutschland 2022" + ":" + " " + deutschland2022 + "Mio.");
console.log("Relativ zur Gesamtzahl in der EU 2022" + ":" + " " + deutschlandAnteilEuropa2022 + "%");
console.log("Wachstumsrate in Deutschland seit 2008" + ":" + " " + deuschlandWachstumSeit2008 + "%");

console.log("Gesamtzahl EinwohnerInnen in Frankreich 2022" + ":" + " " + frankreich2022 + "Mio.");
console.log("Relativ zur Gesamtzahl in der EU 2022" + ":" + " " + frankreichAnteilEuropa2022 + "%");
console.log("Wachstumsrate in Frankreich seit 2008" + ":" + " " + frankreichWachstumSeit2008 + "%");

console.log("Gesamtzahl EinwohnerInnen in Italien 2022" + ":" + " " + italien2022 + "Mio.");
console.log("Relativ zur Gesamtzahl in der EU 2022" + ":" + " " + italienAnteilEuropa2022 + "%");
console.log("Wachstumsrate in Italien seit 2008" + ":" + " " + italienWachstumSeit2008 + "%");

console.log("Gesamtzahl EinwohnerInnen in Portugal 2022" + ":" + " " + portugal2022 + "Mio.");
console.log("Relativ zur Gesamtzahl in der EU 2022" + ":" + " " + portugalAnteilEuropa2022 + "%");
console.log("Wachstumsrate in Portugal seit 2008" + ":" + " " + portugalWachstumSeit2008 + "%");
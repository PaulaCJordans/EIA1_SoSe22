window.addEventListener("load", addClickListenersDrumPad)

function playSample(soundQuelle: string): void {
    var sound: HTMLAudioElement = new Audio(soundQuelle);
    sound.play();
};
function addClickListenersDrumPad(): void {
    document.querySelector("#button1").addEventListener("click", function () { playSample("./assets/DrumPad/A.mps"); });
    document.querySelector("#button2").addEventListener("click", function () { playSample("./assets/DrumPad/C.mp3"); });
    document.querySelector("#button3").addEventListener("click", function () { playSample("./assets/DrumPad/F.mp3"); });
    document.querySelector("#button4").addEventListener("click", function () { playSample("./assets/DrumPad/G.mps"); });
    document.querySelector("#button5").addEventListener("click", function () { playSample("./assets/DrumPad/hihat.mp3"); });
    document.querySelector("#button6").addEventListener("click", function () { playSample("./assets/DrumPad/laugh-1.mp3"); });
    document.querySelector("#button7").addEventListener("click", function () { playSample("./assets/DrumPad/laugh-2.mp3"); });
    document.querySelector("#button8").addEventListener("click", function () { playSample("./assets/DrumPad/snare.mp3"); });
    document.querySelector("#button9").addEventListener("click", function () { playSample("./assets/DrumPad/kick.mp§"); });
    document.querySelector(".play").addEventListener("click'", function () { playBeat(); });
};
var beat: string[] = [
    "./assets/DrumPad/kick.mp3",
    "./assets/DrumPad/snare.mp3",
    "./assets/DrumPad/hihat.mp3"
];

var zaehler: number = 0;

function playBeat(): void {
    setInterval(function (): void {
        playSample (beat[zaehler]);
        zaehler ++;
        if (zaehler === 3) {
            zaehler = 0;
        }
    }, 500);
}
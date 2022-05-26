namespace Aufgabe9 {

    window.addEventListener("load", addClickListenerDrumpad);

    function play(soundQuelle: string): void {
        var sound: HTMLAudioElement = new Audio(soundQuelle);
        sound.play();
    }

    function addClickListenerDrumpad(): void {
        document.querySelector("#button1").addEventListener("click", function (): void { playSample("./assets/DrumPad/A.mp3"); });
        document.querySelector("#button2").addEventListener("click", function (): void { playSample("./assets/DrumPad/C.mp3"); });
        document.querySelector("#button3").addEventListener("click", function (): void { playSample("./assets/DrumPad/F.mp3"); });
        document.querySelector("#button4").addEventListener("click", function (): void { playSample("./assets/DrumPad/G.mp3"); });
        document.querySelector("#button5").addEventListener("click", function (): void { playSample("./assets/DrumPad/hihat.mp3"); });
        document.querySelector("#button6").addEventListener("click", function (): void { playSample("./assets/DrumPad/kick.mp3"); });
        document.querySelector("#button7").addEventListener("click", function (): void { playSample("./assets/DrumPad/laugh-1.mp3"); });
        document.querySelector("#button8").addEventListener("click", function (): void { playSample("./assets/DrumPad/laugh-2.mp3"); });
        document.querySelector("#button9").addEventListener("click", function (): void { playSample("./assets/DrumPad/snare.mp3"); });
        document.querySelector(".play").addEventListener("click", function (): void { playBeat(); });
        document.querySelector(".shuffle").addEventListener("click", function (): void { remix(); });
    }

    var beat: string[] = [
        "./assets/DrumPad/kick.mp3",
        "./assets/DrumPad/snare.mp3",
        "./assets/DrumPad/hihat.mp3"
    ];

    var gesamtToene: string[] = [
        "./assets/DrumPad/A.mp3",
        "./assets/DrumPad/C.mp3",
        "./assets/DrumPad/F.mp3",
        "./assets/DrumPad/G.mp3",
        "./assets/DrumPad/hihat.mp3",
        "./assets/DrumPad/kick.mp3",
        "./assets/DrumPad/laugh-1.mp3",
        "./assets/DrumPad/laugh-2.mp3",
        "./assets/DrumPad/snare.mp3"
    ];

    var playing: boolean = false;

    var intervalId: number;

    function playSample(soundQuelle: string): void {
        play(soundQuelle);
    }

    function playBeat(): void {
        if (playing == false) {
            startBeat();
        } else {
            stopBeat();
        }
    }

    function startBeat(): void {
        playing = true;
        var zaehler: number = 0;
        intervalId = setInterval(function (): void {
            play(beat[zaehler]);
            zaehler = zaehler + 1;
            if (zaehler == beat.length) {
                zaehler = 0;
            }
        }, 500);
    }

   

    function stopBeat(): void {
        document.querySelector(".play i").classList.add("fa-play");
        document.querySelector(".play i").classList.remove("fa-stop");

        clearInterval(intervalId);

        playing = true;
    }

    let lA: string [] = [];
    function remix(): void {
        playing = true;
        var zaehler: number = 0;
        var toeneTotal: number = 3;
        intervalId = setInterval(function (): void {
            var item: string = gesamtToene[Math.floor(Math.random() * gesamtToene.length)];
            lA.push(item);
            if (beat.length == 3) {
                play(lA[zaehler]);
                zaehler = zaehler + 1;
                if (zaehler == 3) {
                    zaehler = 0;
                }
            }
        }, 500);
    }

}

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

const plussa1 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa1').innerHTML = plussa1;

const plussa2 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa2').innerHTML = plussa2;

const plussa3 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa3').innerHTML = plussa3;

const plussa4 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa4').innerHTML = plussa4;

const plussa5 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa5').innerHTML = plussa5;

const plussa6 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa6').innerHTML = plussa6;

const plussa7 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa7').innerHTML = plussa7;

const plussa8 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa8').innerHTML = plussa8;

const plussa9 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa9').innerHTML = plussa9;

const plussa10 =getRandomIntNumberInRange(1,10);
document.getElementById('plussa10').innerHTML = plussa10;

const plussa11 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa11').innerHTML = plussa11;

const plussa12 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa12').innerHTML = plussa12;

const plussa13 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa13').innerHTML = plussa13;

const plussa14 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa14').innerHTML = plussa14;

const plussa15 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa15').innerHTML = plussa15;

const plussa16 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa16').innerHTML = plussa16;

const plussa17 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa17').innerHTML = plussa17;

const plussa18 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa18').innerHTML = plussa18;

const plussa19 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa19').innerHTML = plussa19;

const plussa20 = getRandomIntNumberInRange(1,10);
document.getElementById('plussa20').innerHTML = plussa20;


let laskuri1 = 0

document.getElementById('nappi1').addEventListener("click", () => {

    const syotto1 = Number(document.getElementById('syotto1').value)
    const vastaus12 = plussa1 + plussa2

    const syotto2 = Number(document.getElementById('syotto2').value)
    const vastaus34 = plussa3 + plussa4

    const syotto3 = Number(document.getElementById('syotto3').value)
    const vastaus56 = plussa5 + plussa6

    const syotto4 = Number(document.getElementById('syotto4').value)
    const vastaus78 = plussa7 + plussa8

    const syotto5 = Number(document.getElementById('syotto5').value)
    const vastaus910 = plussa9 + plussa10

    const syotto6 = Number(document.getElementById('syotto6').value)
    const vastaus1112 = plussa11 + plussa12

    const syotto7 = Number(document.getElementById('syotto7').value)
    const vastaus1314= plussa13 + plussa14

    const syotto8 = Number(document.getElementById('syotto8').value)
    const vastaus1516 = plussa15 + plussa16

    const syotto9 = Number(document.getElementById('syotto9').value)
    const vastaus1718 = plussa17 + plussa18

    const syotto10 = Number(document.getElementById('syotto10').value)
    const vastaus1920 = plussa19 + plussa20
    
    if (syotto1 === vastaus12) {
        laskuri1 +=1
    }

    if (syotto2 === vastaus34) {
        laskuri1 +=1
    }

    if (syotto3 === vastaus56) {
        laskuri1 +=1
    }
    
    if (syotto4 === vastaus78) {
        laskuri1 +=1
    }

    if (syotto5 === vastaus910) {
        laskuri1 +=1
    }
    
    if (syotto6 === vastaus1112) {
        laskuri1 +=1
    }

    if (syotto7 === vastaus1314) {
        laskuri1 +=1
    }

    if (syotto8 === vastaus1516) {
        laskuri1 +=1
    }

    if (syotto9 === vastaus1718) {
        laskuri1 +=1
    }

    if (syotto10 === vastaus1920) {
        laskuri1 +=1
    }

    document.getElementById('sisalto1').hidden = true
    document.getElementById('sisalto2').hidden = false
    document.getElementById('laskuri1').innerHTML = laskuri1

    if (laskuri1 === 10) {
        document.getElementById('tarina').innerHTML = "Hienoa! Olet saanut kaikki oikein! Jatka seuraavan possun pelastamista!"
    }

    else {
        document.getElementById('tarina').innerHTML = "Harmi! Nyt sanotaan HeiHei possulle, sillä hän joutuu perunoiden kanssa pyttipannun raaka-aineiksi..."   
    }
    
})

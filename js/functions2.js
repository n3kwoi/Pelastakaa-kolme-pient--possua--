
const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

const kerto1 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto1').innerHTML = kerto1;

const kerto2 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto2').innerHTML = kerto2;

const kerto3 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto3').innerHTML = kerto3;

const kerto4 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto4').innerHTML = kerto4;

const kerto5 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto5').innerHTML = kerto5;

const kerto6 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto6').innerHTML = kerto6;

const kerto7 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto7').innerHTML = kerto7;

const kerto8 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto8').innerHTML = kerto8;

const kerto9 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto9').innerHTML = kerto9;

const kerto10 =getRandomIntNumberInRange(1,10);
document.getElementById('kerto10').innerHTML = kerto10;

const kerto11 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto11').innerHTML = kerto11;

const kerto12 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto12').innerHTML = kerto12;

const kerto13 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto13').innerHTML = kerto13;

const kerto14 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto14').innerHTML = kerto14;

const kerto15 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto15').innerHTML = kerto15;

const kerto16 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto16').innerHTML = kerto16;

const kerto17 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto17').innerHTML = kerto17;

const kerto18 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto18').innerHTML = kerto18;

const kerto19 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto19').innerHTML = kerto19;

const kerto20 = getRandomIntNumberInRange(1,10);
document.getElementById('kerto20').innerHTML = kerto20;

let laskuri3 = 0

document.getElementById('nappi3').addEventListener("click", () => {

    const syotto21 = Number(document.getElementById('syotto21').value)
    const kertovastaus12 = kerto1 * kerto2

    const syotto22 = Number(document.getElementById('syotto22').value)
    const kertovastaus34 = kerto3 * kerto4

    const syotto23 = Number(document.getElementById('syotto23').value)
    const kertovastaus56 = kerto5 * kerto6

    const syotto24 = Number(document.getElementById('syotto24').value)
    const kertovastaus78 = kerto7 * kerto8

    const syotto25 = Number(document.getElementById('syotto25').value)
    const kertovastaus910 = kerto9 * kerto10

    const syotto26 = Number(document.getElementById('syotto26').value)
    const kertovastaus1112 = kerto11 * kerto12

    const syotto27 = Number(document.getElementById('syotto27').value)
    const kertovastaus1314= kerto13 * kerto14

    const syotto28 = Number(document.getElementById('syotto28').value)
    const kertovastaus1516 = kerto15 * kerto16

    const syotto29 = Number(document.getElementById('syotto29').value)
    const kertovastaus1718 = kerto17 * kerto18

    const syotto30 = Number(document.getElementById('syotto30').value)
    const kertovastaus1920 = kerto19 * kerto20
    
    if (syotto21 === kertovastaus12) {
        laskuri3 +=1
    }

    if (syotto22 === kertovastaus34) {
        laskuri3 +=1
    }

    if (syotto23 === kertovastaus56) {
        laskuri3 +=1
    }
    
    if (syotto24 === kertovastaus78) {
        laskuri3 +=1
    }

    if (syotto25 === kertovastaus910) {
        laskuri3 +=1
    }
    
    if (syotto26 === kertovastaus1112) {
        laskuri3 +=1
    }

    if (syotto27 === kertovastaus1314) {
        laskuri3 +=1
    }

    if (syotto28 === kertovastaus1516) {
        laskuri3 +=1
    }

    if (syotto29 === kertovastaus1718) {
        laskuri3 +=1
    }

    if (syotto30 === kertovastaus1920) {
        laskuri3 +=1
    }

    document.getElementById('sisalto1').hidden = true
    document.getElementById('sisalto2').hidden = false
    document.getElementById('laskuri3').innerHTML = laskuri3

    if (laskuri3 === 10) {
        document.getElementById('tarina2').innerHTML = "Hienoa! Olet saanut kaikki oikein! Mahtava!"
    }

    else {
        document.getElementById('tarina2').innerHTML = "Harmi! Nyt sanotaan HeiHei possulle, sillä hän joutuu maukkaaksi ja herkulliseksi joulukinkuksi..."   
    }
    
})
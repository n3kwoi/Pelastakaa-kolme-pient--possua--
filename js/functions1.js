
const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min
}

const miinus1 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus1').innerHTML = miinus1;

const miinus2 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus2').innerHTML = miinus2;

const miinus3 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus3').innerHTML = miinus3;

const miinus4 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus4').innerHTML = miinus4;

const miinus5 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus5').innerHTML = miinus5;

const miinus6 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus6').innerHTML = miinus6;

const miinus7 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus7').innerHTML = miinus7;

const miinus8 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus8').innerHTML = miinus8;

const miinus9 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus9').innerHTML = miinus9;

const miinus10 =getRandomIntNumberInRange(1,10);
document.getElementById('miinus10').innerHTML = miinus10;

const miinus11 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus11').innerHTML = miinus11;

const miinus12 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus12').innerHTML = miinus12;

const miinus13 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus13').innerHTML = miinus13;

const miinus14 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus14').innerHTML = miinus14;

const miinus15 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus15').innerHTML = miinus15;

const miinus16 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus16').innerHTML = miinus16;

const miinus17 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus17').innerHTML = miinus17;

const miinus18 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus18').innerHTML = miinus18;

const miinus19 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus19').innerHTML = miinus19;

const miinus20 = getRandomIntNumberInRange(1,10);
document.getElementById('miinus20').innerHTML = miinus20;

let laskuri2 = 0

document.getElementById('nappi2').addEventListener("click", () => {

    const syotto11 = Number(document.getElementById('syotto11').value)
    const miinusvastaus12 = miinus1 - miinus2

    const syotto12 = Number(document.getElementById('syotto12').value)
    const miinusvastaus34 = miinus3 - miinus4

    const syotto13 = Number(document.getElementById('syotto13').value)
    const miinusvastaus56 = miinus5 - miinus6

    const syotto14 = Number(document.getElementById('syotto14').value)
    const miinusvastaus78 = miinus7 - miinus8

    const syotto15 = Number(document.getElementById('syotto15').value)
    const miinusvastaus910 = miinus9 - miinus10

    const syotto16 = Number(document.getElementById('syotto16').value)
    const miinusvastaus1112 = miinus11 - miinus12

    const syotto17 = Number(document.getElementById('syotto17').value)
    const miinusvastaus1314= miinus13 - miinus14

    const syotto18 = Number(document.getElementById('syotto18').value)
    const miinusvastaus1516 = miinus15 - miinus16

    const syotto19 = Number(document.getElementById('syotto19').value)
    const miinusvastaus1718 = miinus17 - miinus18

    const syotto20 = Number(document.getElementById('syotto20').value)
    const miinusvastaus1920 = miinus19 - miinus20
    
    if (syotto11 === miinusvastaus12) {
        laskuri2 +=1
    }

    if (syotto12 === miinusvastaus34) {
        laskuri2 +=1
    }

    if (syotto13 === miinusvastaus56) {
        laskuri2 +=1
    }
    
    if (syotto14 === miinusvastaus78) {
        laskuri2 +=1
    }

    if (syotto15 === miinusvastaus910) {
        laskuri2 +=1
    }
    
    if (syotto16 === miinusvastaus1112) {
        laskuri2 +=1
    }

    if (syotto17 === miinusvastaus1314) {
        laskuri2 +=1
    }

    if (syotto18 === miinusvastaus1516) {
        laskuri2 +=1
    }

    if (syotto19 === miinusvastaus1718) {
        laskuri2 +=1
    }

    if (syotto20 === miinusvastaus1920) {
        laskuri2 +=1
    }

    document.getElementById('sisalto1').hidden = true
    document.getElementById('sisalto2').hidden = false
    document.getElementById('laskuri2').innerHTML = laskuri2

    if (laskuri2 === 10) {
        document.getElementById('tarina1').innerHTML = "Hienoa! Olet saanut kaikki oikein! Jatka seuraavan possun pelastamista!"
    }

    else {
        document.getElementById('tarina1').innerHTML = "Harmi! Nyt sanotaan HeiHei possulle, sillä hän joutuu uuniin grillipossuksi..."   
    }
    
})
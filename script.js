function atvitelMegjel() {
    let rangeValue = document.getElementById("atvitelseb").value;
    document.getElementById("atvitelsebesseg").innerHTML = rangeValue;
}

function kiszamol() {

    let kbps = 0;
    let bp = 0;

    let kapacitas = document.getElementById("kapacitas").value;
    let kapacitasme = document.getElementById("kapacitasme").value;
    let atvitelsebesseg = document.getElementById("atvitelseb").value;
    let atvitelme = document.getElementById("atvitel");



    if (atvitelme == "KBps") {
        bp = atvitelsebesseg * 1000
    }
    else if (atvitelme = "MBps") {
        bp = atvitelsebesseg * 1000000
    }
    else if (atvitelme = "GBps") {
        bp = atvitelsebesseg * 1000000000
    }


    if (kapacitasme == "Mb") {
        kbps = kapacitas * 1000000
    }
    else if (kapacitasme = "Gb") {
        kbps = kapacitas * 1000000000
    }
    else if (kapacitasme = "Tb") {
        kbps = kapacitas * 1000000000000
    }

    document.getElementById("eredmeny").innerHTML = Math.round(kbps / bp);
}
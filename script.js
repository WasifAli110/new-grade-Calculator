function show_result() {
    let c = document.querySelector("#c").value;
    let mt = document.querySelector("#mt").value;
    let ph = document.querySelector("#ph").value;
    let ja = document.querySelector("#ja").value;
    let csa = document.querySelector("#csa").value;

    let to = parseFloat(c) + parseFloat(mt) + parseFloat(ph) + parseFloat(ja) + parseFloat(csa);
    let per = (to * 100) / 500;

    if (per >= 90) {
        document.querySelector(".gra").innerHTML = "a+";
    } else if (per >= 80) {
        document.querySelector(".gra").innerHTML = "a";
    } else if (per >= 70) {
        document.querySelector(".gra").innerHTML = "b+";
    } else if (per >= 60) {
        document.querySelector(".gra").innerHTML = "b";
    } else if (per >= 50) {
        document.querySelector(".gra").innerHTML = "c";
    } else if (per >= 40) {
        document.querySelector(".gra").innerHTML = "d";
    } else {
        document.querySelector(".gra").innerHTML = "you are fail";
    }

    document.querySelector(".to").innerHTML = to;
    document.querySelector(".per").innerHTML = per;

    if (per > 39) {
        document.querySelector(".result h2").innerHTML = "you are pass";
    } else {
        document.querySelector(".result h2").innerHTML = "you are fail";
    }
}

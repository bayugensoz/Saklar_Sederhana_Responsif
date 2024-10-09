function saklar() {
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    let togel1 = document.getElementById("togel1");
    let togel2 = document.getElementById("togel2");
    let togel3 = document.getElementById("togel3");

    togel1.checked ? lampu1.src = "assets/on.gif" : lampu1.src = "assets/off.gif";
    togel2.checked ? lampu2.src = "assets/on.gif" : lampu2.src = "assets/off.gif";
    togel3.checked ? lampu3.src = "assets/on.gif" : lampu3.src = "assets/off.gif";
}
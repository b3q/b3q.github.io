let t = parseFloat(document.getElementById("atemp").innerHTML);
let s = parseFloat(document.getElementById("windspeed").innerHTML);
let wchill;

if (t > 50 || s < 3) {
    let f = "N/A";
    wchill = f;
} else {
    let f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.5275 * t * Math.pow(s, 0.16);
    wchill = f.toFixed(1) + "&#8457;";
}

document.getElementById("windchill").innerHTML = wchill;
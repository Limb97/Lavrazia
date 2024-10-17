console.log("Скрипт странички с картами успешно загружен");

const img = document.getElementById("map1");
let imgSize = 1;
const polit = document.getElementById("polit");
const region = document.getElementById("region");
const landsh = document.getElementById("landsh");
const ethnic = document.getElementById("ethnic");
const climate = document.getElementById("climate");
const tc = document.getElementById("tc");

img.addEventListener("click", () => {
    if (imgSize == 1) {
        img.style.width = "200%";
        img.style.height = "200%";
        imgSize += 1;
    } else {
        img.style.width = "100%";
        img.style.height = "100%";
        imgSize -= 1;
    }
});

relig.addEventListener("click", () => {
    img.src = "maps/relig.png";
});

polit.addEventListener("click", () => {
    img.src = "maps/polit.png";
});

tc.addEventListener("click", () => {
    img.src = "maps/tc.png";
});

region.addEventListener("click", () => {
    img.src = "maps/region.png";
});

landsh.addEventListener("click", () => {
    img.src = "landsh.png";
});

ethnic.addEventListener("click", () => {
    img.src = "ethnic.png"; 
});

climate.addEventListener("click", () => {
    img.src = "climate.png";
});

console.log("Скрипт странички с картами успешно загружен")

const img = document.getElementById("map1");
let imgSize = 1;
const polit = document.getElementById("polit");
const region = document.getElementById("region");
const landsh = document.getElementById("landsh");
const ethnic = document.getElementById("ethnic");
const climate = document.getElementById("climate");
const tc = document.getElementById("tc");
const relig = document.getElementById("relig");

img.addEventListener("click",() => {
    if (imgSize == 1) {
        img.style.width = "200%"
        img.style.height = "200%"
        imgSize += 1
    } else {
        img.style.width = "100%"
        img.style.height = "100%"
        imgSize -= 1

    }
    
});

relig.addEventListener("click",() => {
    img.src ="maps/relig.png"
})

polit.addEventListener("click",() => {
    img.src ="maps/Lavrazia_politicheskaya_karta_igroki.png"
})

tc.addEventListener("click",() => {
    img.src ="maps/Lavrazia_karta_TTs.png"
})

region.addEventListener("click",() => {
    img.src ="maps/Lavrazia_karta_regionov.png"
})

landsh.addEventListener("click",() => {
    img.src ="Lavrazia_resursnaya_karta.png"
})

ethic.addEventListener("click",() => {
    img.src ="Lavrazia_etnicheskaya_karta.png"
})

climate.addEventListener("click",() => {
    img.src="Lavrazia_klimaticheskaya_karta.png"
})

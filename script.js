

/*BORÓN DE CAMBIO DE IMAGEN DE PENY*/
let penyButton = document.querySelector(".art-as-2");
let penyImage = document.querySelector(".art-as-1");

function penyButtonActioner() {

    penyImage.style.backgroundImage = "url('images/peny-img-2.png')";

    setTimeout(() => {
        penyImage.style.backgroundImage = "url('images/peny-img-1.png')";
    }, 500);
}


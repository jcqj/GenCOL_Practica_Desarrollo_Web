console.log("JS CONECTADO");

const btnAumentar = document.getElementById("btnAumentar");

const btnDecrementar = document.getElementById("btnDecrementar");

const contadorElement = document.getElementById("contador");

let cont = 0;

btnAumentar.addEventListener("click", function () {
    cont++;
    contadorElement.textContent = cont;
    console.log(`Contador: ${cont}`);
    if (cont >= 10) {
        contadorElement.style.color = "red"
    }
});

btnDecrementar.addEventListener("click", function () {
    cont--;
    contadorElement.textContent = cont;
    console.log(`Contador: ${cont}`);
    if (cont <= 9) {
        contadorElement.style.color = "white"
    }
});
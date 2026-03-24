console.log("JS CONECTADO");

const btnAumentar = document.getElementById("btnAumentar");

const btnDecrementar = document.getElementById("btnDecrementar");

const contadorElement = document.getElementById("contador");

let cont = 0;

btnAumentar.addEventListener("click", function () {
    cont++;
    contadorElement.textContent = cont;
    console.log(`Contador: ${cont}`);
});

btnDecrementar.addEventListener("click", function () {
    cont--;
    contadorElement.textContent = cont;
    console.log(`Contador: ${cont}`);

});
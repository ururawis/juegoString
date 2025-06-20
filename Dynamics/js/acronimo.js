let resultadoPantalla = document.getElementById("result-gen");
let generarAcronimo = document.getElementById("generar");

generarAcronimo.addEventListener("click", () => {
    let acronimo = "";
    let insertar = document.getElementById("insertar").value.trim();
    let palabras = insertar.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i]) {
            acronimo += palabras[i][0].toUpperCase();
        }
    }

    resultadoPantalla.innerHTML = `El acrónimo de "<strong>${insertar}</strong>" es: <strong>${acronimo}</strong>`;
});

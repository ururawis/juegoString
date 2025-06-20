const btnContador = document.getElementById("contador");
const btnBuscador = document.getElementById("buscador");
const btnGenerador = document.getElementById("generador");

const vistaContador = document.getElementById("vista-contador");
const vistaBuscador = document.getElementById("vista-buscador");
const vistaGenerador = document.getElementById("vista-generador");

function mostrarVista(vista) {
    vistaContador.style.display = "none";
    vistaBuscador.style.display = "none";
    vistaGenerador.style.display = "none";

    vista.style.display = "block";
}

btnContador.addEventListener("click", () => mostrarVista(vistaContador));
btnBuscador.addEventListener("click", () => mostrarVista(vistaBuscador));
btnGenerador.addEventListener("click", () => mostrarVista(vistaGenerador));

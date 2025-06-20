const btnBuscar = document.getElementById("buscar");
const resultadoBuscador = document.getElementById("result-busc");

btnBuscar.addEventListener("click", () => {
    const frase = document.getElementById("buscar-frase").value.trim();
    const palabra = document.getElementById("buscar-palabra").value.trim();

    if (!frase || !palabra) {
        resultadoBuscador.innerHTML = "Por favor, ingresa una frase y una palabra a buscar.";
        return;
    }

    function normalizar(texto) {
        return texto
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    const fraseNorm = normalizar(frase);
    const palabraNorm = normalizar(palabra);
    let resultadoHTML = "";
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        const subOriginal = frase.slice(i, i + palabra.length);
        const subNorm = normalizar(subOriginal);

        if (subNorm === palabraNorm) {
            resultadoHTML += `<mark>${subOriginal}</mark>`;
            contador++;
            i += palabra.length - 1;
        } else {
            resultadoHTML += frase[i];
        }
    }

    resultadoBuscador.innerHTML = `
        <p>${resultadoHTML}</p>
        <p>La palabra "<strong>${palabra}</strong>" apareció <strong>${contador}</strong> veces.</p>
    `;
});

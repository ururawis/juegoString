let string = document.getElementById("texto-input");
let boton = document.getElementById("contar");
let pantalla = document.getElementById("result-cont");


boton.addEventListener("click", function () {
    let texto = string.value;
    let arrPalabras = texto.split(" ");
    let charXPalabra = 0;
    let caracteresCEspacios = texto.length;
    let cantidadPalabras = 0;
    let caracteresSEspacios = 0;
    let palabrasLargas = [];

    arrPalabras.forEach(element => {
        if(element != "")
            cantidadPalabras++;
        if(element.length >= charXPalabra)
            charXPalabra = element.length;
        caracteresSEspacios += element.length;
    });
    
    for(let i = 0; i < arrPalabras.length; i++)
    {
        if(arrPalabras[i].length == charXPalabra )
            palabrasLargas.push(arrPalabras[i]);
    }
    pantalla.innerHTML += `Caracteres: ${caracteresCEspacios} <br> Caracteres Sin Espacios ${caracteresSEspacios} <br> Palabras ${cantidadPalabras} <br> Palabras mas largas: ${palabrasLargas}`;
});

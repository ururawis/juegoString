let insertar = document.getElementById("insertar")
let palabras = insertar.split(" ")
let acronimo = ""
let resultadoPantalla =document.getElementById("resultado")
for(let i=0;i<palabras.length;i++)
    {
        acronimo += palabras[i].slice(0,1)
    }  
resultadoPantalla.innerHTML = `">:"El acrónimo de "${insertar}" es: "${acronimo}"`
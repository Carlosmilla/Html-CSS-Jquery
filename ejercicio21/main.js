function calcular() {

    textoArea = document.getElementById("texto").value;
    nCaracteres = textoArea.length;
    dividirTexto = textoArea.split(" ");
    nPalabras = dividirTexto.length;
    primeraPalabra = textoArea.split(' ')[0];
    ultimaPalabra = dividirTexto[dividirTexto.length -1];
    textoInver = textoArea.split('').reverse().join('');
    textoArea2 = textoArea.replace(/ /g, "");
    textoInvertido = textoArea2.split('').reverse().join('');

    document.getElementById("resultado").innerHTML = "Numero de Caracteres: " +nCaracteres +"<br>"+ 
    "Numero de palabras: " +nPalabras+"<br>"+"Primera Palabra: "+primeraPalabra+"<br>"+"Ultima Palabra: "+ultimaPalabra+"<br>"+
    "Palabra Invertida: "+textoInver+"<br>"+"Texto Invertido Completo: "+textoInvertido
    

}

calcular ();
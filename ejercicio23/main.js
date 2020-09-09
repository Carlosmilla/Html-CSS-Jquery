 function  traspasoLista(){
     // Validamos que el valor del texto sea diferente de nulo
    if(document.getElementById("textarea").value == "") 
    { alert("Ingrese Un texto porfavor ")}else{
    // si no es nulo ingresa a generar las funciones 
    var textArea = document.getElementById("textarea").value;
    // hacemos un string para trabajar cada palabra individualmente
    var textAreaStr = textArea.split(" ");
    // Capturamos el valor del radio button desde el formulario
    var selectedOption = document.getElementById('f1')['radioopcion'].value;

    
    console.log(textArea);
    console.log(textAreaStr);
    console.log(selectedOption);
   // ya tenemos el valor de las opciones

   // ya que tenemos solo 2 opciones entonces si el radio es = lista 1 entonces imprimira el array en esa lista
    if(selectedOption==="lista1"){
      

        for (let index = 0; index < textAreaStr.length; index++) {
            const element =textAreaStr[index];
            var ul = document.getElementById("ul");
            var li = document.createElement("li");
            console.log(element);
            li.textContent =element;
            ul.appendChild(li);
        }
    }else
    {
        for (let index = 0; index < textAreaStr.length; index++) {
            const element =textAreaStr[index];
            var ul = document.getElementById("ol");
            var li = document.createElement("li");
            console.log(element);
            li.textContent =element;
            ul.appendChild(li);
    }

    }
    // fin if -- else
}
// fin validador que el valor no sea nulo
}
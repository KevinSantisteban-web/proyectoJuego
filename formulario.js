
function iniciarJuego(){
    //variable "body" del DOM
    let cuerpo = document.body;
    //Creamos un div
    let contenedor = document.createElement("div");

    //le damos la clase "primcipal"
    contenedor.className = "principal";

    //creamos el formulario
    let formulario = document.createElement("form");

    //añadimos el contenedor al body
    cuerpo.appendChild(contenedor);

    //añadimos lo que necesitamos del formulario
    formulario.method = "post";
    formulario.id = "formulario";

    //añadimos el formulario al contenedor creado anteriormente
    contenedor.appendChild(formulario);

    //creacion del H1 de inicio del juego
    let H1 = document.createElement("h1");
    H1.textContent = "Formulario de inicio del juego";
    H1.className = "inicioJuego";

    //creacion del label del input
    let label = document.createElement("label");
    label.textContent = "Nombre: ";
    label.htmlFor = "nombre";

    //creacion del input de tipo texto donde meteremos el nombre 
    let inputNombre = document.createElement("input");
    inputNombre.id = "nombre";
    inputNombre.name = "nombre";
    inputNombre.placeholder = "introduzca un nombre";

    //añadimos el H1 al formulario
    formulario.appendChild(H1);
    //creamos una seccion donde estara contenido el input y el mensaje de error
    let seccionInput = document.createElement("section");
    seccionInput.id = "input";

    //añadimos la seccion, el label y el input
    formulario.appendChild(seccionInput);
    seccionInput.appendChild(label);
    seccionInput.appendChild(inputNombre);

    //creamos la seccion donde ira el parrafod e error
    let seccionError = document.createElement("section");
    seccionError.id = "seccionError";

    formulario.appendChild(seccionError);
    
    //creamos el parrafo que saltara al verificar y no cumplir con los requisitos
    let parrafoError = document.createElement("p");
    parrafoError.style.color = "red";
    parrafoError.id = "parrafoError";
    seccionError.appendChild(parrafoError);

    //creamos la seccion dodne iran los botones
    let seccion = document.createElement("section");
    seccion.id = "botones";

    //añadimos la seccion
    formulario.appendChild(seccion);

    //creamos el boton validar
    let botonValidar = document.createElement("button");
    botonValidar.name = "validar";
    botonValidar.value = "introducir nombre";
    botonValidar.textContent = "introducir nombre";
    botonValidar.id = "validar";
    //añadimos el boton validar
    seccion.appendChild(botonValidar);

    //creamos el boton jugar que inicialmente estara deshabilitado
    let botonJugar = document.createElement("button");
    botonJugar.textContent = "jugar";
    botonJugar.id = "jugar";
    botonJugar.disabled = true;

    //añadimos el boton de jugar
    seccion.appendChild(botonJugar);

    //creamos el h1 de luchar
    let luchar = document.createElement("h1");
    luchar.id = "luchar";
    luchar.className = "luchar";

    //creamos la seccion donde estara el h1 luchar
    let seccionH1 = document.createElement("section");
    seccionH1.id = "seccionH1";
    //añadimos el aseccion del H1 u el H1 de luchar
    formulario.appendChild(seccionH1);
    seccionH1.appendChild(luchar);

    //escuchamos el evento submit para que comprube que el nombre enviado es mayor a 4 letras
    formulario.addEventListener("submit",validarNombre);

        

    
}

function validarNombre(evento){
    if(document.getElementById("nombre").value.length < 4){
            evento.preventDefault();
            document.getElementById("parrafoError").textContent = "El nombre debe tener 4 o más letras";
        }else if(/\d/.test(document.getElementById("nombre").value)){
            evento.preventDefault();
            document.getElementById("parrafoError").textContent = "Numero no permitidos";
        }
        else{
            evento.preventDefault();
            document.getElementById("parrafoError").textContent = "";
            document.getElementById("luchar").textContent = `A luchar heroe: ${document.getElementById("nombre").value}`;
            document.getElementById("jugar").disabled = false;
            document.getElementById("validar").disabled = true;
        }
}
//exportamos la funcion iniciarJuego
export{iniciarJuego};
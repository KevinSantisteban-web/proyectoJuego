
function formulario(){

    let cuerpo = document.body
    let contenedor = document.createElement("div");
    contenedor.className = "principal";
    let formulario = document.createElement("form");
    cuerpo.appendChild(contenedor);
    formulario.method = "post";
    formulario.id = "formulario";

    contenedor.appendChild(formulario);

    let H1 = document.createElement("h1");
    H1.textContent = "Formulario de inicio del juego";
    H1.className = "inicioJuego";

    let label = document.createElement("label");
    label.textContent = "Nombre: ";
    label.htmlFor = "nombre";

    let inputNombre = document.createElement("input");
    inputNombre.id = "nombre";
    inputNombre.name = "nombre";
    inputNombre.placeholder = "introduzca un nombre";

    formulario.appendChild(H1);

    let seccionInput = document.createElement("section");
    seccionInput.id = "input";
    formulario.appendChild(seccionInput);

    seccionInput.appendChild(label);
    seccionInput.appendChild(inputNombre);
    

    let parrafoError = document.createElement("p");
    parrafoError.style.color = "red";
    formulario.appendChild(parrafoError);

    let seccion = document.createElement("section");
    seccion.id = "botones";
    formulario.appendChild(seccion);

    let botonValidar = document.createElement("button");
    botonValidar.name = "validar";
    botonValidar.value = "introducir nombre";
    botonValidar.textContent = "introducir nombre";
    seccion.appendChild(botonValidar);

    let botonJugar = document.createElement("button");
    botonJugar.textContent = "jugar";
    botonJugar.id = "jugar";
    botonJugar.disabled = true;
    seccion.appendChild(botonJugar);

    let luchar = document.createElement("h1");
    luchar.classList = "luchar";

    let seccionH1 = document.createElement("section");
    seccionH1.id = "seccionH1";
    formulario.appendChild(seccionH1);
    seccionH1.appendChild(luchar);

    formulario.addEventListener("submit",(evento) =>{

            
        if(inputNombre.value.length < 4){
            evento.preventDefault();
            parrafoError.textContent = "El nombre debe tener 4 o más letras";
        }else if(/\d/.test(inputNombre.value)){
            evento.preventDefault();
            parrafoError.textContent = "Numero no permitidos";
        }
        else{
            evento.preventDefault();
            parrafoError.textContent = "";
            luchar.textContent = `A luchar heroe: ${inputNombre.value}`;
            botonJugar.disabled = false;
            botonValidar.disabled = true;
        }
    });
}
export{formulario};
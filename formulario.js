
function formulario(){

    let cuerpo = document.body
    
    let formulario = document.createElement("form");

    formulario.method = "post";
    formulario.id = "formulario";

    cuerpo.appendChild(formulario);

    let label = document.createElement("label");
    label.textContent = "Nombre: ";
    label.htmlFor = "nombre";

    let inputNombre = document.createElement("input");
    inputNombre.id = "nombre";
    inputNombre.name = "nombre";
    inputNombre.placeholder = "introduzca un nombre";

    formulario.appendChild(label);
    formulario.appendChild(inputNombre);

    let parrafoError = document.createElement("p");
    parrafoError.style.color = "red";
    formulario.appendChild(parrafoError);

    let botonValidar = document.createElement("button");
    botonValidar.name = "validar";
    botonValidar.value = "introducir nombre";
    botonValidar.textContent = "introducir nombre";
    formulario.appendChild(botonValidar);

    let botonJugar = document.createElement("button");
    botonJugar.textContent = "jugar";
    botonJugar.id = "jugar";
    botonJugar.disabled = true;
    formulario.appendChild(botonJugar);

    let luchar = document.createElement("h1");
    formulario.appendChild(luchar);

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
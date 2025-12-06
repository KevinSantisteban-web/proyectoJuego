'use strict';

function juego() {

    let botonTirar = document.getElementById("tirar");
    let tablaJuego = document.getElementById("table");
    let contador = 0;
    //let parrafoNumero = document.getElementById("numero");

    //boton numero aleatorio
    let numeroAleatorio;
    let columnas;
    let filas;

    botonTirar.addEventListener("click", tirarDado);



    //funcion donde se tirara un dado con un numero aleatorio entre el 1 y el 6
    function tirarDado(evento) {



        //añado al boton el atributo "disabled" para cuando le de al boton no me deje pulsarlo nuevamente
        botonTirar.setAttribute("disabled", "true");
        numeroAleatorio = parseInt((Math.random() * 6) + 1);

        let actual = document.getElementsByClassName('actual')[0];
        moverHeroe(actual);
        //recoge el id del dado
        const dado = document.getElementById("dado");

        //segun el numero que dè, de "numeroAleatorio" aparecera un circulo en las posiciones correspondientes
        const patrones = {
            1: [4],
            2: [0, 8],
            3: [0, 4, 8],
            4: [0, 2, 6, 8],
            5: [0, 2, 4, 6, 8],
            6: [0, 2, 3, 5, 6, 8]
        };

        // animación
        dado.classList.add("tirar");
        setTimeout(() => dado.classList.remove("tirar"), 300);

        // limpiar puntos
        const puntos = dado.querySelectorAll("span");
        puntos.forEach(p => p.classList.remove("activo"));

        // activar puntos según el número obtenido
        patrones[numeroAleatorio].forEach(i => puntos[i].classList.add("activo"));


    }
    //añadimos un evento para que cuando haga click se ejecute al funcion "dirigir"
    tablaJuego.addEventListener("click", dirigir);

    //la funcion "dirigir" hace que al hacer "click" en una celda que contenga la clase "dirigir" se mueva a esa posicion
    function dirigir(evento) {

        if (evento.target.className == "dirigir") {
            //agarro el anterior bloque negro(su clase)
            let anterior = document.getElementsByClassName('actual')[0];
            //cambio la clase a dodne me voy a dirigir a la clase de "actual"
            evento.target.className = "actual";

            //quitamos la clase del target anterior
            anterior.removeAttribute("class");
            //agarramos la celda o celdas que contengan la clase dirigir

            let dirigir = document.getElementsByClassName('dirigir');

            //recorremos las clases "dirigir" en ambas direcciones para eliminarlas una vez que te has movido
            for (let i = 0; i <= dirigir.length; i++) {

                //si dirigir de la posicion "X" no esta "undefined" se le quitarla la clase que contenga
                if (dirigir[i] != undefined) {

                    dirigir[i].removeAttribute("class");
                }
            }

            for (let j = 0; j <= dirigir.length; j++) {

                if (dirigir[j] != undefined) {

                    dirigir[j].removeAttribute("class");
                }
            }
            contador++;
            //si has hecho click en una celda con la clase "dirigir" se activara de nuevo el boton de tirar
            botonTirar.disabled = false;
        }
        //si la celda target tiene como ide "99" y ademas la clase "actual" se desabilitara el boton y se terminara el juego
        if (evento.target.id == "99" && evento.target.className == "actual") {

            localStorage.setItem(nombre, `${contador}`);
            console.log("HAS CONSEGUIDO EL TESORO");
            botonTirar.disabled = true;
            actualizarRecord(contador);

        }


    }
    //funcion que te permitira moverte por el tablero
    function moverHeroe(actual) {
        //agarramos dos veces la posicion actual con el id
        columnas = document.getElementById(`${actual.id}`);
        filas = document.getElementById(`${actual.id}`);
        //convertimos el id de filas y columnas en un array de 2 posiciones
        let arrayColumnas = columnas.id.split('');
        let arrayFilas = filas.id.split('');


        // console.log(arrayColumnas);
        //cambiamos la posicion que queramos a numerico

        arrayColumnas[0] = + arrayColumnas[0];



        //sumamos lo que dio el dado a la posicion correspondiente
        arrayColumnas[0] += numeroAleatorio;


        //comprobamos que si la suma es mayor a 9 te ponga un null
        if (arrayColumnas[0] > 9) {

            arrayColumnas[0] = null;
        }

        arrayFilas[1] = + arrayFilas[1];



        arrayFilas[1] += numeroAleatorio;

        if (arrayFilas[1] > 9) {

            arrayFilas[1] = null;
        }


        let arrayColumnas2 = columnas.id.split('');
        let arrayFilas2 = filas.id.split('');

        arrayColumnas2[0] = + arrayColumnas2[0];

        arrayColumnas2[0] -= numeroAleatorio;

        if (arrayColumnas2[0] < 0) {

            arrayColumnas2[0] = null;
        }

        arrayFilas2[1] = +  arrayFilas2[1];

        arrayFilas2[1] -= numeroAleatorio;

        if (arrayFilas2[1] < 0) {

            arrayFilas2[1] = null;
        }
        //llamamos a la funcion
        colorearRojo(arrayColumnas, arrayFilas, arrayColumnas2, arrayFilas2);





    }
    // esta funcion lo que hace es agarrar el NUEVO id del resultado de la funcion moverse
    // y si no es nulo le añade la clase "dirigir" que pondra en ROJO la celda a donde tendra que moverse
    function colorearRojo(arrayColumnas, arrayFilas, arrayColumnas2, arrayFilas2) {


        if (arrayColumnas[0] != null && arrayFilas[1] != null) {

            columnas = document.getElementById(`${arrayColumnas[0]}${arrayColumnas[1]}`);
            columnas.className = "dirigir";

            filas = document.getElementById(`${arrayFilas[0]}${arrayFilas[1]}`);
            filas.className = "dirigir";
        }
        else if (arrayColumnas[0] != null) {
            columnas = document.getElementById(`${arrayColumnas[0]}${arrayColumnas[1]}`);
            columnas.className = "dirigir";
        }
        else if (arrayFilas[1] != null) {
            filas = document.getElementById(`${arrayFilas[0]}${arrayFilas[1]}`);
            filas.className = "dirigir";
        }



        if (arrayColumnas2[0] != null && arrayFilas2[1] != null) {

            columnas = document.getElementById(`${arrayColumnas2[0]}${arrayColumnas2[1]}`);
            columnas.className = "dirigir";

            filas = document.getElementById(`${arrayFilas2[0]}${arrayFilas2[1]}`);
            filas.className = "dirigir";

        } else if (arrayColumnas2[0] != null) {

            columnas = document.getElementById(`${arrayColumnas2[0]}${arrayColumnas2[1]}`);
            columnas.className = "dirigir";
        }
        else if (arrayFilas2[1] != null) {

            filas = document.getElementById(`${arrayFilas2[0]}${arrayFilas2[1]}`);
            filas.className = "dirigir";
        }

        if ((arrayColumnas[0] == null) && (arrayColumnas2[0] == null) && (arrayFilas[1] == null) && (arrayFilas2[1] == null)) {

            botonTirar.disabled = false;
            contador--;
        }
    }

    
    function actualizarRecord(tiradasActuales) {
        // obtener el récord anterior
        let record = localStorage.getItem("recordTiradas");

        // si no hay récord aún, o si el nuevo es mejor (menos tiradas)
        if (!record || tiradasActuales < parseInt(record)) {
            localStorage.setItem("recordTiradas", tiradasActuales);
            console.log("¡Nuevo récord! Tiradas:", tiradasActuales);
        } else {
            console.log("Récord actual:", record, "Tiradas de esta partida:", tiradasActuales,"tiradas");
        }
    }
}

export { juego };
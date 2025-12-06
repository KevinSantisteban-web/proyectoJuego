    'use strict';
    import { juego } from "./juego.js";
    function tabla() {

        let botonJugar = document.getElementById("jugar");
        botonJugar.type = "button";
        let nombre = document.getElementById("nombre");

        botonJugar.addEventListener("click", (evento) => {


            let cuerpo = document.body;

            cuerpo.replaceChildren();

            let tabla = document.createElement("table");
            tabla.border = "1";
            tabla.id = "table";
            cuerpo.appendChild(tabla);



            for (let i = 0; i < 10; i++) {

                let Tr = document.createElement("tr");
                tabla.append(Tr);
                for (let j = 0; j < 10; j++) {

                    let Td = document.createElement("td");

                    if (i == 0 && j == 0) {
                        Td.className = "actual";
                        Td.id = `${i}${j}`;
                        Tr.appendChild(Td);
                    }
                    else if (i == 9 && j == 9) {

                        Td.className = "tesoro";
                        Td.id = `${i}${j}`;
                        Tr.appendChild(Td);
                    }
                    else {
                        Td.id = `${i}${j}`;
                        Tr.appendChild(Td);
                    }
                }



            }

            let tirarDado = document.createElement("button");
            tirarDado.textContent = "tirar dado";
            tirarDado.id = "tirar";
            cuerpo.appendChild(tirarDado);

            // Asegurarte de que el contenedor existe
    

        // Crear div principal
        let cajaDado = document.createElement("div");
        cajaDado.id = "dado";
        cajaDado.className = "dado cara-1";

        // Añadir los spans
        for (let i = 0; i < 10; i++) {
            let span = document.createElement("span");
            cajaDado.appendChild(span);
        }

        // Añadir el div al contenedor
        cuerpo.appendChild(cajaDado);


        
        juego();

        });

        
    }

    export { tabla };
'use strict';
import { generarTablero } from "./tabla.js";
import { iniciarJuego } from "./formulario.js";
window.onload = inicio;

function inicio(){

    iniciarJuego();
    generarTablero();

}
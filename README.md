# Juego del Tesoro:

este proyecto de JavaScript consiste en un tablero 10x10 deodne el jugador debe de llegar hasta el tesoro usando las tiradas de un dado.

# Descripcion: 

El jugador comienza en la casilla de inicio (en este caso la (0,0)) y su objetivo sera llegar a la casilla (9,9) donde se encuentra el tesoro donde:

- en cada turno se tira de dado y dara un numero aleatorio entre el 0 y el 6
- segun el resultado del dado se marcara en rojo aquellas casillas donde podras moverte al pinchar sobre ellas.
- el juego se terminara cuando llegues al tesoro donde se guardara el record con menos tiradas en un LocalStorage.

para jugar necesitas:

1. introducir un nombre.
2. Pulsar al boton de jugar que estara habilitado si el nombre es valido
3. tirar el dado.
4. elejir la casilla a la que quieras moverte
5. repetir los pasos anteriores hasta que llegues al tesoro.
# Estructura del proyecto
📁 proyecto
│
├── main.js # Punto de entrada de la aplicación
├── tabla.js # dodne se Genera el tablero y la interfaz del juego
├── juego.js # donde se encuentra la lógica principal y el funcionamiento del juego 
├── formulario.js #  Gestión del nombre del usuario
├── index.html # Estructura HTML
├── style.css # Estilos del juego
└── README.md # Documentación del proyecto

# Descripcion de archivos

1. Main.js:
- Archivo principal
- se ejecuta al cargar la pagina.
- inicializa el formulario y genera el tablero

2. tabla.js:
- crea el tablero 10x10 de forma dinamica.
- coloca la posicion inicial del jugador y del tesoro.
- crea el boton para tirar el dado y el dado visual.
- llama a la funcion juego()

3. juego.js:
- contiene toda la logica del juego:
    - Tiradas del jugador
    - Movimiento del jugador
    - Casillas validas.
    - Control de los turnos.
    - Finalizacion del juego.
    - Gestion del record con el LocalStorage.

# almacenamiento 
el record se guarda en el navegador usando el LocalStorage permitiendo asi un mejor resultado.

# tecnologias usadas
- HTML5
- CSS3
- JavaScript
- LocalStorage

# autor
Kevin Santisteban Ibañez

# diagrama de casos de uso
usecaseDiagram
actor Jugador

Jugador --> (Iniciar juego)
Jugador --> (Tirar dado)
Jugador --> (Mover jugador)

(Iniciar juego) --> (Generar tablero)

(Tirar dado) --> (Visualizar resultado del dado)
(Tirar dado) --> (Calcular movimientos posibles)

(Mover jugador) --> (Actualizar posición)
(Mover jugador) --> (Finalizar juego)

(Finalizar juego) --> (Guardar récord)
Jugador --> (Consultar récord)

# Decisiones de diseño:
 Para el desarrollo de este proyecto se ha decidido implementar un tablero de 10x10 utilizando para ello JavaScript.

La estructura del proyecto se dividió en varios archivos:
-	Main.js -> Punto de entrada de la aplicación e inicializa el juego
-	Tabla.js -> se encarga de generar la tabla, los botones y el dado de forma dinámica.
-	Juego.js -> contiene la lógica principal para el funcionamiento del juego.
El tablero se genera dinámicamente mediante el DOM para evitar el uso de HTML estático y permitir de esta manera una mayor flexibilidad. Las posiciones del tablero se identifican mediante IDs que representan las coordenadas de cada celda.
Se utilizó localStorage para guardar el récord del menor número de tiradas, permitiendo así que el progreso del usuario se conserve, aunque se recargue la página.

# Desafíos encontrados: 
El principal desafío que he encontrado es conseguir la manera de que según el numero del dado se marque una casilla en rojo u otra y que, si el numero es superior a las casillas no nos marque ninguna, es decir, que solo marque los objetivos que realmente son posibles.

# Proyecto - Universidad Nacional de Colombia

- [Proyecto - Universidad Nacional de Colombia](#proyecto---universidad-nacional-de-colombia)
  - [Programacion Orientada a Objetos](#programacion-orientada-a-objetos)
  - [General](#general)
  - [Tetromino](#tetromino)
  - [Figura](#figura)
  - [Tablero](#tablero)
  - [Metodos Externos](#metodos-externos)
    - [Controlador del Dom](#controlador-del-dom)
    - [Almacenamiento](#almacenamiento)
    - [Constantes](#constantes)
  - [Controles](#controles)
  - [Referencias](#referencias)

## Programacion Orientada a Objetos

El objetivo del proyecto es desarrollar una réplica del juego tetris a través del paradigma de programación orientado a objetos, con el fin de visualizar sus características, dificultades y beneficios que ofrece el POO. El proyecto debe ser desarrollado en JavaScript y se usaran las librerías de P5.js y Quadrille (V.0.9.1).

## General

Se deben emplear tanto clases como objetos, sus respectivos métodos (getters y setters), conceptos de encapsulamiento, herencia, métodos estáticos.

El uso de la librería Quadrille es opcional, pero esta potencia a P5.js y facilita la representación y manipulación de cuadriculas, se puede ver más información en: "https://objetos.github.io/p5.quadrille.js/"

## Tetromino

Clase sin necesidad de parámetros, en esta se administran las representaciones de cada figura, valores relevantes como su estructura basada en un arreglo de _n_ tamaño, se asignas colores y atributos de altura y ancho, datos necesarios para su representación y manipulación en el canva.

Las figuras son representadas a través de matrices booleanas, que posteriormente serán convertidas en las respectivas figuras del tetris, donde 0 es un espacio vacío [ver documentación Quadrille](https://objetos.github.io/p5.quadrille.js/docs/p5-fx/create_quadrille) y el uno será convertido en una representación de [P5.color](https://p5js.org/es/reference/#/p5.Color); el color de la figura y de su fantasma (o sombra) únicamente varían en su transparencia.

## Figura

Esta hereda de Tetromino, posee coordenadas de posicionamiento, la figura que está en juego y su fantasma, puntaje y nivel siendo estos últimos indicadores de la velocidad de caída que tendrá el escenario.

Sus métodos públicos están relacionados con su posición en pantalla, estos son accesibles a través del teclado y el sistema de controles, en base a las líneas que sean limpiadas, se aplicaran bonificaciones al puntaje. El nivel es el indicador de velocidad que tendrá el sistema de juego, este no tiene límite.

## Tablero

Una clase con métodos estáticos, estos actúan como controlador con la cuadricula del tablero, permiten integrar la figura y el tablero, sus métodos son: el guardado de pieza, la comparación de esta para visualizar colisiones, una función de búsqueda de filas llenas, limpieza de línea, cambiar la matriz de tablero y obtener un clon de la matriz en juego. Esta es una representación vacía de una matriz con las dimensiones indicadas, donde se dibujan las celdas vacías [ver documentación Quadrille](https://objetos.github.io/p5.quadrille.js/docs/p5-fx/draw_quadrille).

## Metodos Externos

Un objeto el cual almacena las variables o métodos no relacionados directamente con el proyecto o que son necesarios en más de un objeto o clases, como la generación de un numero aleatorio entre ciertos valores indicados, obtener el alto y el ancho de una matriz o detectar si se accede desde un dispositivo móvil. Algunos de estos provienen de referencias externas.

### Controlador del Dom

Este objeto tiene como finalidad mostrar pantallas de pausa o derrota, se basan en modificar los estilos de estas ventanas ya representadas en el HTML a través de llamados basados en estados booleanos.

### Almacenamiento

En este apartado se aplicaron conceptos de “local storage”, permitiendo guardar el puntaje máximo en el navegador, este objeto cuenta con los métodos necesarios para almacenar o recuperar dichos valores y representarlos en la pagina web, al igual que representa el puntaje del juego en tiempo real, en caso de superar el puntaje almacenado, este nuevo puntaje tomara su lugar.

### Constantes

Estas son matemáticas y gráficas, como lo pueden ser el ancho de las celdas, cuantas columnas y filas se van a representar o las coordenadas origen de las figuras.

## Controles

|      Tecla       |          Accion          |
| :--------------: | :----------------------: |
|        P         |          Pausa           |
|  Flecha Derecha  |     Moverse Derecha      |
| Flecha Izquierda |    Moverse Izquierda     |
|   Flecha Abajo   |      Moverse Abajo       |
|  Flecha Arriba   |  Rotar hacia la derecha  |
|        Z         | Rotar hacia la Izquierda |
|     Espacio      |          Pausa           |

## Referencias

1. https://p5js.org/es/reference/#/p5.Vector
2. https://objetos.github.io/p5.quadrille.js/docs/demo
3. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
4. https://github.com/andersontr15/clean-code-javascript-es
5. https://www.youtube.com/watch?v=nq0vAO6SDlI
6. https://www.freepik.com/
7. https://es.javascript.info/static-properties-methods
8. https://platzi.com/tutoriales/1050-programacion-basica/178-mostrar-y-ocultar-div-con-javascript-y-css3/
9. https://es.stackoverflow.com/questions/57080/c%C3%B3mo-detener-al-momento-de-refrescar-una-p%C3%A1gina
10. https://developer.mozilla.org/es/docs/Web/CSS/position
11. https://developer.mozilla.org/es/docs/Web/CSS/grid-template-areas
12. https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
13. https://codigofuente.io/detectar-dispositivo-movil-con-javascript/
14. https://www.youtube.com/watch?v=hb8O0qRqiSk

// https://objetos.github.io/p5.quadrille.js/docs/demo
function guardadoPieza(pieza, { y, x }) {
	let clon = pieza.clone();
	tablero = Quadrille.OR(tablero, clon, y, x);
}

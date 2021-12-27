// https://objetos.github.io/p5.quadrille.js/docs/demo
function guardadoPieza(pieza, { y, x }) {
	let clon = pieza.clone();
	tablero = Quadrille.OR(tablero, clon, y, x);
}

function comparacionPieza(pieza, { y, x }) {
	let mapa = Quadrille.AND(tablero, pieza.clone(), y, x);
	return mapa.toMatrix();
}

function busquedaFila() {
	let matriz = tablero.toMatrix();
	let ancho = matriz[0].length,
		linea = 0;

	for (let i = 0; i < VAR_MATH.filas; i++) {
		let count = 0;
		for (let j = 0; j < VAR_MATH.columnas; j++) {
			if (matriz[i][j] != 0) {
				count += 1;
				linea = i;
			}
			if (count == ancho) {
				return linea;
			}
		}
	}
	return undefined;
}

function limpiarTablero(linea) {
	tablero.clear(linea);
}

function setTablero(matriz) {
	tablero = createQuadrille(matriz);
}

function getTablero() {
	return tablero.clone();
}

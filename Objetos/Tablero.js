// Manejo de tablero
/* La variable de Tablero ya fue definida en sketch.js */
const Tablero = {
	// Quadrille.JS
	// https://objetos.github.io/p5.quadrille.js/docs/demo
	guardadoPieza(pieza, { y, x }) {
		let clon = pieza.clone();
		tablero = Quadrille.OR(tablero, clon, y, x);
	},

	comparacionPieza(pieza, { y, x }) {
		let mapa = Quadrille.AND(tablero, pieza.clone(), y, x);
		return mapa.toMatrix();
	},

	busquedaFila() {
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
	},

	limpiarLinea(linea) {
		tablero.clear(linea);
	},

	cambiar(matriz) {
		tablero = createQuadrille(matriz);
	},

	obtener() {
		return tablero.clone();
	},
};

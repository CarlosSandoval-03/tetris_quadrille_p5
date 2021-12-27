// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Esta funcion excluye al valor maximo
function numeroAleatorioEntero(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function obtenerAltoMatriz(matriz = []) {
	return matriz.length;
}

function obtenerAnchoMatriz(matriz = []) {
	for (fila in matriz) {
		return matriz[fila].length;
	}
}

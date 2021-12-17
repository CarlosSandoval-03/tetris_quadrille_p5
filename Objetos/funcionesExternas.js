// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Esta funcion excluye al valor maximo
function numeroAleatorioEntero(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

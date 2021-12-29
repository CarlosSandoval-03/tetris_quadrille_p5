class Externo {
	// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	// Esta funcion excluye al valor maximo
	static numeroAleatorioEntero(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	static obtenerAltoMatriz(matriz = []) {
		return matriz.length;
	}
	static obtenerAnchoMatriz(matriz = []) {
		for (let fila in matriz) {
			return matriz[fila].length;
		}
	}

	static deteccionDispositivoMovil() {
		// https://codigofuente.io/detectar-dispositivo-movil-con-javascript/
		if (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			confirm(
				"El dispositivo puede no ser compatible con el juego, por favor acceda desde un computador"
			);
		}
	}
}

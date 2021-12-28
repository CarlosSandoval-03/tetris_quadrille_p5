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

	static canvaFocused() {
		if (!focused) {
			pausa = true;
		} else {
			pausa = false;
		}
	}
}

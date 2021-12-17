class Tetromino {
	constructor() {
		// Se manejan unicamente 7 figuras, la funcion excluye el segundo parametro
		// Por esa razon se maneja en n+1 a pesar de iniciar desde 0
		this.__indice = numeroAleatorioEntero(0, 7);
		this.__color = undefined;
		this.__anchoMatriz = undefined;
		this.__altoMatriz = undefined;
	}

	get indice() {
		return this.__indice;
	}
	set indice(nuevoValor) {
		this.__indice = nuevoValor;
	}

	get color() {
		return this.__color;
	}
	set color(nuevoValor) {
		this.__color = nuevoValor;
	}

	get anchoMatriz() {
		return this.__anchoMatriz;
	}
	set anchoMatriz(nuevoValor) {
		this.__anchoMatriz = nuevoValor;
	}

	get altoMatriz() {
		return this.__altoMatriz;
	}
	set altoMatriz(nuevoValor) {
		this.__altoMatriz = nuevoValor;
	}

	__nuevoMolde() {
		this.__indice = numeroAleatorioEntero(0, 7);
		return this.definicionMolde();
	}

	definicionMolde() {
		switch (this.__indice) {
			// Figura I
			case 0:
				this.__anchoMatriz = 1;
				this.__altoMatriz = 4;
				this.__color = color(0, 255, 255, 255);
				return [this.__color, this.__color, this.__color, this.__color];
			// Figura J
			case 1:
				this.__anchoMatriz = 2;
				this.__altoMatriz = 3;
				this.__color = color(0, 0, 255, 255);
				return [0, this.__color, 0, this.__color, this.__color, this.__color];
			// Figura L
			case 2:
				this.__anchoMatriz = 2;
				this.__altoMatriz = 3;
				this.__color = color(255, 165, 0, 255);
				return [this.__color, 0, this.__color, 0, this.__color, this.__color];
			// Figura O
			case 3:
				this.__anchoMatriz = 2;
				this.__altoMatriz = 2;
				this.__color = color(255, 255, 0, 255);
				return [this.__color, this.__color, this.__color, this.__color];
			// Figura S
			case 4:
				this.__anchoMatriz = 3;
				this.__altoMatriz = 2;
				this.__color = color(255, 0, 0, 255);
				return [0, this.__color, this.__color, this.__color, this.__color, 0];
			// Figura T
			case 5:
				this.__anchoMatriz = 3;
				this.__altoMatriz = 2;
				this.__color = color(255, 0, 255, 255);
				return [0, this.__color, 0, this.__color, this.__color, this.__color];
			// Figura Z
			case 6:
				this.__anchoMatriz = 3;
				this.__altoMatriz = 2;
				this.__color = color(0, 128, 0, 255);
				return [this.__color, this.__color, 0, 0, this.__color, this.__color];
		}
	}
}

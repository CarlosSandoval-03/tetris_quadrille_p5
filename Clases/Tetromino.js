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
	set indice(nuevoValor = this.__indice) {
		this.__indice = nuevoValor;
	}
	get color() {
		return this.__color;
	}
	set color(nuevoValor = this.__color) {
		this.__color = nuevoValor;
	}
	get anchoMatriz() {
		return this.__anchoMatriz;
	}
	set anchoMatriz(nuevoValor = this.__anchoMatriz) {
		this.__anchoMatriz = nuevoValor;
	}
	get altoMatriz() {
		return this.__altoMatriz;
	}
	set altoMatriz(nuevoValor = this.__altoMatriz) {
		this.__altoMatriz = nuevoValor;
	}

	__nuevoMolde() {
		this.indice = numeroAleatorioEntero(0, 7);
		return this.definicionMolde();
	}

	definicionMolde() {
		switch (this.indice) {
			// Figura I
			case 0:
				this.anchoMatriz = 1;
				this.altoMatriz = 4;
				this.color = color(0, 255, 255, 255);
				return [this.color, this.color, this.color, this.color];
			// Figura J
			case 1:
				this.anchoMatriz = 2;
				this.altoMatriz = 3;
				this.color = color(0, 0, 255, 255);
				return [0, this.color, 0, this.color, this.color, this.color];
			// Figura L
			case 2:
				this.anchoMatriz = 2;
				this.altoMatriz = 3;
				this.color = color(255, 165, 0, 255);
				return [this.color, 0, this.color, 0, this.color, this.color];
			// Figura O
			case 3:
				this.anchoMatriz = 2;
				this.altoMatriz = 2;
				this.color = color(255, 255, 0, 255);
				return [this.color, this.color, this.color, this.color];
			// Figura S
			case 4:
				this.anchoMatriz = 3;
				this.altoMatriz = 2;
				this.color = color(255, 0, 0, 255);
				return [0, this.color, this.color, this.color, this.color, 0];
			// Figura T
			case 5:
				this.anchoMatriz = 3;
				this.altoMatriz = 2;
				this.color = color(255, 0, 255, 255);
				return [0, this.color, 0, this.color, this.color, this.color];
			// Figura Z
			case 6:
				this.anchoMatriz = 3;
				this.altoMatriz = 2;
				this.color = color(0, 128, 0, 255);
				return [this.color, this.color, 0, 0, this.color, this.color];
		}
	}
}

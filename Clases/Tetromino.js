class Tetromino {
	constructor() {
		// Se manejan unicamente 7 figuras, la funcion excluye el segundo parametro
		// Por esa razon se maneja en n+1 a pesar de iniciar desde 0
		this.__indice = Externo.numeroAleatorioEntero(0, 7);
		this.__color = undefined;
		this.__colorFantasma = undefined;
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
	get colorFantasma() {
		return this.__colorFantasma;
	}
	set colorFantasma(nuevoValor = this.__colorFantasma) {
		this.__colorFantasma = nuevoValor;
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

	__definicionMolde() {
		switch (this.indice) {
			// Figura I
			case 0:
				this.anchoMatriz = 1;
				this.altoMatriz = 4;
				this.color = color(0, 255, 255, 255);
				this.colorFantasma = color(0, 255, 255, 90);
				return [1, 1, 1, 1];
			// Figura J
			case 1:
				this.anchoMatriz = 2;
				this.altoMatriz = 3;
				this.color = color(0, 0, 255, 255);
				this.colorFantasma = color(0, 0, 255, 90);
				return [0, 1, 0, 1, 1, 1];
			// Figura L
			case 2:
				this.anchoMatriz = 2;
				this.altoMatriz = 3;
				this.color = color(255, 165, 0, 255);
				this.colorFantasma = color(255, 165, 0, 90);
				return [1, 0, 1, 0, 1, 1];
			// Figura O
			case 3:
				this.anchoMatriz = 2;
				this.altoMatriz = 2;
				this.color = color(255, 255, 0, 255);
				this.colorFantasma = color(255, 255, 0, 90);
				return [1, 1, 1, 1];
			// Figura S
			case 4:
				this.anchoMatriz = 3;
				this.altoMatriz = 2;
				this.color = color(255, 0, 0, 255);
				this.colorFantasma = color(255, 0, 0, 90);
				return [0, 1, 1, 1, 1, 0];
			// Figura T
			case 5:
				this.anchoMatriz = 3;
				this.altoMatriz = 2;
				this.color = color(255, 0, 255, 255);
				this.colorFantasma = color(255, 0, 255, 90);
				return [0, 1, 0, 1, 1, 1];
			// Figura Z
			case 6:
				this.anchoMatriz = 3;
				this.altoMatriz = 2;
				this.color = color(0, 128, 0, 255);
				this.colorFantasma = color(0, 128, 0, 90);
				return [1, 1, 0, 0, 1, 1];
		}
	}

	nuevoMolde() {
		this.indice = Externo.numeroAleatorioEntero(0, 7);
		return this.moldeFiguras();
	}

	moldeFiguras() {
		let molde = this.__definicionMolde(),
			fig = [];

		for (let elemento of molde) {
			if (elemento == 1) {
				fig.push(this.color);
			} else {
				fig.push(0);
			}
		}
		let fantasma = [];

		for (let elemento of molde) {
			if (elemento == 1) {
				fantasma.push(this.colorFantasma);
			} else {
				fantasma.push(0);
			}
		}
		return [fig, fantasma];
	}
}

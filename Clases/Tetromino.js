class Tetromino {
	constructor() {
		// Se manejan unicamente 7 figuras, la funcion excluye el segundo parametro
		// Por esa razon se maneja en n+1 a pesar de iniciar desde 0
		this.indice = numeroAleatorioEntero(0, 7);
		this.__color = undefined;
		this.__anchoMatriz = undefined;
	}

	get indice() {
		return this.indice;
	}
	set indice(nuevoValor) {
		this.indice = nuevoValor;
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

	__nuevaFigura() {
		this.indice = numeroAleatorioEntero(0, 7);
	}

	definicionMolde() {
		switch (this.indice) {
			// Figura I
			case 0:
				this.__anchoMatriz = 1;
				this.__color = color(0, 255, 255);
				return [this.__color, this.__color, this.__color, this.__color];
			// Figura J
			case 1:
				this.__anchoMatriz = 2;
				this.__color = color(0, 0, 255);
				return [
					undefined,
					this.__color,
					undefined,
					this.__color,
					this.__color,
					this.__color,
				];
			// Figura L
			case 2:
				this.__anchoMatriz = 2;
				this.__color = color(255, 165, 0);
				return [
					this.__color,
					undefined,
					this.__color,
					undefined,
					this.__color,
					this.__color,
				];
			// Figura O
			case 3:
				this.__anchoMatriz = 2;
				this.__color = color(255, 255, 0);
				return [this.__color, this.__color, this.__color, this.__color];
			// Figura S
			case 4:
				this.__anchoMatriz = 3;
				this.__color = color(255, 0, 0);
				return [
					undefined,
					this.__color,
					this.__color,
					this.__color,
					this.__color,
					undefined,
				];
			// Figura T
			case 5:
				this.__anchoMatriz = 3;
				this.__color = color(255, 0, 255);
				return [
					undefined,
					this.__color,
					undefined,
					this.__color,
					this.__color,
					this.__color,
				];
			// Figura Z
			default:
				this.__anchoMatriz = 3;
				this.__color = color(0, 128, 0);
				return [
					this.__color,
					this.__color,
					undefined,
					undefined,
					this.__color,
					this.__color,
				];
		}
	}
}

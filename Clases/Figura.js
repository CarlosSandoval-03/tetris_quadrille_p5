class Figura extends Tetromino {
	constructor() {
		super();
		this._xPos = COORDENADA.origenX;
		this._yPos = COORDENADA.origenY;
		this.__figuraEnJuego = this.__crearCuadricula();
	}

	get xPos() {
		return this._xPos;
	}
	set xPos(valor = this._xPos) {
		this._xPos = valor;
	}
	get yPos() {
		return this._yPos;
	}
	set yPos(valor = this._yPos) {
		this._yPos = valor;
	}
	get figuraEnJuego() {
		return this.__figuraEnJuego;
	}
	set figuraEnJuego(valor = this.__figuraEnJuego) {
		this.__figuraEnJuego = valor;
	}

	__crearNuevo() {
		this.xPos = COORDENADA.origenX;
		this.yPos = COORDENADA.origenY;
		this.figuraEnJuego = this.__crearCuadricula(super.__nuevoMolde());
	}

	__crearCuadricula(molde = super.definicionMolde()) {
		return createQuadrille(super.anchoMatriz, molde);
	}

	dibujar() {
		drawQuadrille(this.figuraEnJuego, {
			x: this.xPos,
			y: this.yPos,
			cellLength: VAR_MATH.tamanoCeldas,
			outline: VAR_CANVA.bordeFigura,
		});
	}

	__fueraTablero() {
		const indicesTablero = [VAR_MATH.columnas + 1, VAR_MATH.filas + 1];
		if (
			this.xPos < 0 ||
			this.xPos >= indicesTablero[0] - super.anchoMatriz ||
			this.yPos >= indicesTablero[1] - super.altoMatriz
		) {
			return true;
		}
		return false;
	}
	__colision() {
		return false;
	}
	__verificacionPosicionValida() {
		if (!this.__fueraTablero() && !this.__colision()) {
			return true;
		}
		return false;
	}

	izquierda() {
		this.xPos--;
		if (!this.__verificacionPosicionValida()) {
			this.derecha();
		}
	}
	derecha() {
		this.xPos++;
		if (!this.__verificacionPosicionValida()) {
			this.izquierda();
		}
	}
	__arriba() {
		this.yPos--;
		this.__almacenarPieza();
		this.__crearNuevo();
	}
	abajo() {
		this.yPos++;
		if (!this.__verificacionPosicionValida()) {
			this.__arriba();
		}
	}
	hardDrop() {
		while (this.__verificacionPosicionValida()) {
			this.yPos++;
		}
		this.yPos--;
	}

	__actualizacionTamanoMatriz() {
		let temp = this.figuraEnJuego.toMatrix();
		super.anchoMatriz = obtenerAnchoMatriz(temp);
		super.altoMatriz = obtenerAltoMatriz(temp);
	}
	rotacionIzquierda() {
		this.figuraEnJuego.rotate();
		this.__actualizacionTamanoMatriz();
		if (!this.__verificacionPosicionValida()) {
			this.rotacionDerecha();
		}
	}
	rotacionDerecha() {
		// 3 debido a que simula una rotacion inversa
		for (let i = 0; i < 3; i++) {
			this.figuraEnJuego.rotate();
		}
		this.__actualizacionTamanoMatriz();
		if (!this.__verificacionPosicionValida()) {
			this.rotacionIzquierda();
		}
	}

	__almacenarPieza() {
		guardadoPieza(this.figuraEnJuego, { y: this.yPos, x: this.xPos });
	}
}

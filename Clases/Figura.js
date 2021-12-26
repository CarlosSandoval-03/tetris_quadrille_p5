class Figura extends Tetromino {
	constructor() {
		super();
		this._xPos = COORDENADA.origenX;
		this._yPos = COORDENADA.origenY;
		this.__figuraEnJuego = this.__crearCuadricula();
	}

	__crearNuevo() {
		this._xPos = COORDENADA.origenX;
		this._yPos = COORDENADA.origenY;
		this.__figuraEnJuego = this.__crearCuadricula(super.__nuevoMolde());
	}

	__crearCuadricula(molde = super.definicionMolde()) {
		return createQuadrille(super.anchoMatriz, molde);
	}

	dibujar() {
		drawQuadrille(this.__figuraEnJuego, {
			x: this._xPos,
			y: this._yPos,
			cellLength: VAR_MATH.tamanoCeldas,
			outline: VAR_CANVA.borde,
			board: true,
		});
	}

	__fueraTablero() {
		const indicesTablero = VAR_MATH.columnas + 1;
		if (
			this._xPos < 0 ||
			this._xPos >= indicesTablero - super.anchoMatriz ||
			this._yPos >= indicesTablero - super.altoMatriz
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
		this._xPos--;
		if (!this.__verificacionPosicionValida()) {
			this.derecha();
		}
	}
	derecha() {
		this._xPos++;
		if (!this.__verificacionPosicionValida()) {
			this.izquierda();
		}
	}
	__arriba() {
		this._yPos--;
		this.__crearNuevo();
	}
	abajo() {
		this._yPos++;
		if (!this.__verificacionPosicionValida()) {
			this.__arriba();
		}
	}
	// Nuevos valores para el control de bordes
	__rotacionMatematica() {
		let temp = this.__figuraEnJuego.toMatrix();
		super.anchoMatriz = obtenerAnchoMatriz(temp);
		super.altoMatriz = obtenerAltoMatriz(temp);
	}
	rotacionIzquierda() {
		this.__figuraEnJuego.rotate();
		this.__rotacionMatematica();

		if (!this.__verificacionPosicionValida()) {
			this.rotacionDerecha();
		}
	}
	rotacionDerecha() {
		for (let i = 0; i < 3; i++) {
			this.__figuraEnJuego.rotate();
		}
		this.__rotacionMatematica();
		if (!this.__verificacionPosicionValida()) {
			this.rotacionIzquierda();
		}
	}
}
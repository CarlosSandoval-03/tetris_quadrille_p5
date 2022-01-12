// ? Como mi clase figura aplica en otros juegos
class Figura extends Tetromino {
	constructor() {
		super();
		this._xPos = COORDENADA.origenX;
		this._yPos = COORDENADA.origenY;
		this._yFantasmaPos = COORDENADA.origenY;
		this.__figuraEnJuego = this.__crearFiguras()[0];
		this.__fantasma = this.__crearFiguras()[1];
		this.__puntaje = 0;
		this.__nivel = 1;
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
	get yFantasmaPos() {
		return this._yFantasmaPos;
	}
	set yFantasmaPos(valor = this._yFantasmaPos) {
		this._yFantasmaPos = valor;
	}

	get figuraEnJuego() {
		return this.__figuraEnJuego;
	}
	set figuraEnJuego(valor = this.__figuraEnJuego) {
		this.__figuraEnJuego = valor;
	}
	get fantasma() {
		return this.__fantasma;
	}
	set fantasma(valor = this.__fantasma) {
		this.__fantasma = valor;
	}

	get puntaje() {
		return this.__puntaje;
	}
	set puntaje(valor = this.__puntaje) {
		this.__puntaje = valor;
	}
	get nivel() {
		return this.__nivel;
	}
	set nivel(valor = this.__nivel) {
		this.__nivel = valor;
	}

	__crearFiguras(molde = super.moldeFiguras()) {
		return [
			createQuadrille(super.anchoMatriz, molde[0]),
			createQuadrille(super.anchoMatriz, molde[1]),
		];
	}

	__crearNuevo() {
		this.xPos = COORDENADA.origenX;
		this.yPos = COORDENADA.origenY;
		let moldes = this.__crearFiguras(super.nuevoMolde());
		this.figuraEnJuego = moldes[0];
		this.fantasma = moldes[1];
	}

	__actualizacionTamanoMatriz() {
		let temp = this.figuraEnJuego.toMatrix();
		super.anchoMatriz = Externo.obtenerAnchoMatriz(temp);
		super.altoMatriz = Externo.obtenerAltoMatriz(temp);
		let aux = this.fantasma.toMatrix();
		super.anchoMatriz = Externo.obtenerAnchoMatriz(aux);
		super.altoMatriz = Externo.obtenerAltoMatriz(aux);
	}

	__almacenarPieza() {
		Tablero.guardadoPieza(this.figuraEnJuego, { y: this.yPos, x: this.xPos });
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
		let posicion = {
			y: this.yPos,
			x: this.xPos,
		};
		let matrizComparativa = Tablero.comparacionPieza(
			this.figuraEnJuego,
			posicion
		);
		for (let fila of matrizComparativa) {
			for (let valor of fila) {
				if (valor != 0) {
					return true;
				}
			}
		}
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
		this.__limpiezalinea();
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
	rotacionIzquierda() {
		this.figuraEnJuego.rotate();
		this.fantasma.rotate();
		this.__actualizacionTamanoMatriz();
		if (!this.__verificacionPosicionValida()) {
			this.rotacionDerecha();
		}
	}
	rotacionDerecha() {
		// 3 debido a que simula una rotacion inversa
		for (let i = 0; i < 3; i++) {
			this.figuraEnJuego.rotate();
			this.fantasma.rotate();
		}
		this.__actualizacionTamanoMatriz();
		if (!this.__verificacionPosicionValida()) {
			this.rotacionIzquierda();
		}
	}

	__caidaTablero(fila) {
		let inicioRecorrido = fila,
			tablero = Tablero.obtener(),
			matriz = tablero.toMatrix();
		for (let i = inicioRecorrido; i > 0; i--) {
			matriz[i] = matriz[i - 1];
		}
		Tablero.cambiar(matriz);
	}
	// https://objetos.github.io/p5.quadrille.js/docs/demo - Line 23
	__caidaFigura(frames) {
		const VELOCIDAD = Math.floor(60 * (1 / this.__nivel));
		if (frames % VELOCIDAD === 0) {
			this.abajo();
		}
		this.__cambioNivel();
	}

	__posicionValidaFantasma() {
		if (!this.__fueraFantasma() && !this.__colisionFantasma()) {
			return true;
		}
		return false;
	}
	__fueraFantasma() {
		const indicesTablero = [VAR_MATH.columnas + 1, VAR_MATH.filas + 1];
		if (
			this.xPos < 0 ||
			this.xPos >= indicesTablero[0] - super.anchoMatriz ||
			this.yFantasmaPos >= indicesTablero[1] - super.altoMatriz
		) {
			return true;
		}
		return false;
	}
	__colisionFantasma() {
		let posicion = {
			y: this.yFantasmaPos,
			x: this.xPos,
		};
		let matrizComparativa = Tablero.comparacionPieza(this.fantasma, posicion);
		for (let fila of matrizComparativa) {
			for (let valor of fila) {
				if (valor != 0) {
					return true;
				}
			}
		}
		return false;
	}
	__hardDropFantasma() {
		while (this.__posicionValidaFantasma()) {
			this.yFantasmaPos++;
		}
		this.yFantasmaPos--;
	}

	__limpiezalinea() {
		let contador = 0;
		for (let i = 0; i < VAR_MATH.filas; i++) {
			let fila = Tablero.busquedaFila();
			if (fila != undefined) {
				Tablero.limpiarLinea(fila);
				contador += 1;
				this.__caidaTablero(fila);
			}
		}
		this.__aumentarPuntaje(contador);
	}

	__aumentarPuntaje(lineasBorradas = 0) {
		const puntosLinea = 100,
			denominadorFraccionPorcentaje = 10;
		let puntajeTemporal = lineasBorradas * puntosLinea;
		this.puntaje +=
			puntajeTemporal +
			puntajeTemporal * (lineasBorradas / denominadorFraccionPorcentaje);
	}

	__cambioNivel() {
		const SIMPLIFICACION_A_DECENAS = 1000,
			EVITAR_NIVEL_CERO = 1;
		this.nivel = Math.floor(
			this.puntaje / SIMPLIFICACION_A_DECENAS + EVITAR_NIVEL_CERO
		);
	}

	/* 
	En versiones anteriores de Quadrille se usaban parametros x - y, desde la version 0.9.0 
	se emplea el manejo de columnas y filas, debido a esto ocurrian incongruencias con versiones
	anteriores del codigo, desde ahora x = col, y = row
	*/
	__dibujar() {
		drawQuadrille(this.figuraEnJuego, {
			col: this.xPos,
			row: this.yPos,
			cellLength: VAR_MATH.tamanoCeldas,
			outline: VAR_CANVA.bordeFigura,
		});
		this.__hardDropFantasma();
		drawQuadrille(this.fantasma, {
			col: this.xPos,
			row: this.yFantasmaPos,
			cellLength: VAR_MATH.tamanoCeldas,
			outline: VAR_CANVA.bordeFigura,
		});
	}
	iniciar() {
		this.__dibujar();
		if (!pausa) {
			this.__caidaFigura(frameCount);
		}
		if (!derrota) {
			derrota = this.__perder();
		} else {
			if (parseInt(Almacenamiento.obtenerTopScore(), 10) < this.puntaje) {
				Almacenamiento.guardarTopScore(this.puntaje);
			}
		}
	}
	__perder() {
		let mapa = Tablero.obtener();
		mapa = mapa.toMatrix();
		for (let col of mapa[0]) {
			if (col != 0) {
				return true;
			}
		}
		return false;
	}
}

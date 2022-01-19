/********************************************************************************************************************
 * Figura.js
 * Copyright (c) 2021 Carlos Sandoval
 * @author Carlos Santiago Sandoval Casallas, https://github.com/CarlosSandoval-03/tetris_quadrille_p5
 * Released under the terms of the MIT License, refer to: https://opensource.org/licenses/MIT
 *
 * JS Docs based on https://github.com/objetos/p5.quadrille.js/blob/main/p5.quadrille.js
 ********************************************************************************************************************/
class Figura extends Tetromino {
	/**
	 * Se definen posiciones de ambas figuras, sus respectivas cuadriculas e inicializamos el puntaje
	 */
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

	/**
	 * Construimos los respectivos getters y setters de los atributos de clase
	 */
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

	/**
	 *
	 * @param {Array} molde es un arreglo que almacena las matrices de ambas figuras
	 * (la que esta en juego y el fantasma)
	 * @returns Arreglo de cuadriculas
	 */
	__crearFiguras(molde = super.moldeFiguras()) {
		return [
			createQuadrille(super.anchoMatriz, molde[0]),
			createQuadrille(super.anchoMatriz, molde[1]),
		];
	}

	/**
	 * Reestaablecemos la posicion inicial, creamos de nuevo los moldes los aplicamos
	 */
	__crearNuevo() {
		this.xPos = COORDENADA.origenX;
		this.yPos = COORDENADA.origenY;
		let moldes = this.__crearFiguras(super.nuevoMolde());
		this.figuraEnJuego = moldes[0];
		this.fantasma = moldes[1];
	}

	/**
	 * Al estar manejando matrices no podemos acceder a la propiedad de tamaños
	 * que brinda Quadrille, por esa razon usamos metodos externos a la clase y encontramos
	 * dichas medidas
	 * Aplicaciones:
	 * @see __fueraTablero()
	 */
	__actualizacionTamanoMatriz() {
		let temp = this.figuraEnJuego.toMatrix();
		super.anchoMatriz = Externo.obtenerAnchoMatriz(temp);
		super.altoMatriz = Externo.obtenerAltoMatriz(temp);
	}

	/**
	 * Guardamos la pieza en la cuadricula del tablero
	 * @see Tablero.js
	 */
	__almacenarPieza() {
		Tablero.guardadoPieza(this.figuraEnJuego, { y: this.yPos, x: this.xPos });
	}

	/**
	 * Esta funcion toma en cuenta el tamaño del tablero, la posicion actual de la
	 * figura y su tamaño, en base a esto define cuando la pieza sale del tablero
	 * @returns Booleano que identifica si la pieza sale del tablero
	 */
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
	/**
	 * Realizamos una comparacion AND entre la pieza y el tablero, si esta
	 * posee un numero diferente a 0, deducimos que hay un choque o colision
	 */
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
	/**
	 * Esta funcion nos facilita el proceso de evaluar la posicion de una figura
	 * @returns Booleano sobre la correcta posicion de la figura
	 */
	__verificacionPosicionValida() {
		if (!this.__fueraTablero() && !this.__colision()) {
			return true;
		}
		return false;
	}

	/**
	 * Estas funciones realizan el movimiento descrito, en caso de ser invalido
	 * ejerce el movimiento opuesto
	 */
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
	/**
	 * Al ser un movimiento invalido en el Tetris, cuando se llama a esta funcion
	 * podemos establecer que existe un choque, asi que almacenamos la pieza,
	 * limpiamos el tablero si es posible y creamos una nueva figura
	 */
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
	/**
	 * Caida inmediata
	 */
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

	/**
	 *
	 * @param {number} fila indica desde que parte del tablero se debe iniciar
	 * la busqueda de figuras que deben caer
	 */
	__caidaTablero(fila) {
		let inicioRecorrido = fila,
			tablero = Tablero.obtener(),
			matriz = tablero.toMatrix();
		for (let i = inicioRecorrido; i > 0; i--) {
			matriz[i] = matriz[i - 1];
		}
		Tablero.cambiar(matriz);
	}
	// Aplicacion del framerate para realizar cambios en el canva
	// https://objetos.github.io/p5.quadrille.js/docs/demo - Linea 23
	__caidaFigura(frames) {
		// Operacion que permite una mayor caida respecto al nivel
		const VELOCIDAD = Math.floor(60 * (1 / this.__nivel));
		if (frames % VELOCIDAD === 0) {
			this.abajo();
		}
		this.__cambioNivel();
	}

	/**
	 * El fantasma posee caracteristicas distintas, debido a que debe estar en
	 * constante "Hard drop" para mostrar el lugar de caida, por esta razon
	 * se redefinen los movimientos validos
	 * @returns booleano que indica si el movimiento es valido
	 */
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

	/**
	 * Realiza la busqueda de una fila completa y limpia las respectivas filas
	 * @see Tablero.js
	 */
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

	/**
	 * Cada linea da 100 puntos, pero existe un bonus en base a cuantas lineas se
	 * borraron en combo
	 * @param {number} lineasBorradas entero positivo de lineas limpiadas
	 */
	__aumentarPuntaje(lineasBorradas = 0) {
		const puntosLinea = 100,
			denominadorFraccionPorcentaje = 10;
		let puntajeTemporal = lineasBorradas * puntosLinea;
		this.puntaje +=
			puntajeTemporal +
			puntajeTemporal * (lineasBorradas / denominadorFraccionPorcentaje);
	}

	/**
	 * Cada mil puntos aumenta el nivel, aumentando asi la velocidad de caida
	 */
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
	// Si la primera fila tiene algun elemento se considera como perdido el juego
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

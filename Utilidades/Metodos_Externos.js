const Externo = {
	// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	// Esta funcion genera un numero aleatorio [min,max)
	numeroAleatorioEntero: function (min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	},
	obtenerAltoMatriz: function (matriz = []) {
		return matriz.length;
	},
	obtenerAnchoMatriz: function (matriz = []) {
		for (let fila in matriz) {
			return matriz[fila].length;
		}
	},

	deteccionDispositivoMovil: function () {
		// El juego realiza los movimientos a traves del teclado, se envia una alerta sobre compatibilidad
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
	},
};

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

	static deteccionDispositivoMovil() {
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
	}

	// https://platzi.com/tutoriales/1050-programacion-basica/178-mostrar-y-ocultar-div-con-javascript-y-css3/
	static divPausa() {
		if (pausa) {
			document.getElementById("pantalla-pausa").style.height = "100%";
			document.getElementById("titulo-pausa").style.visibility = "visible";
			document.getElementById("parrafo-pausa").style.visibility = "visible";
			// https://developer.mozilla.org/es/docs/Web/CSS/position
			document.getElementById("mainGame").style.position = "relative";
			document.getElementById("mainGame").style.top = "999em";
		} else {
			document.getElementById("pantalla-pausa").style.height = "0px";
			document.getElementById("titulo-pausa").style.visibility = "hidden";
			document.getElementById("parrafo-pausa").style.visibility = "hidden";

			document.getElementById("mainGame").style.position = "static";
			document.getElementById("mainGame").style.left = "0px";
		}
	}

	// https://es.stackoverflow.com/questions/57080/c%C3%B3mo-detener-al-momento-de-refrescar-una-p%C3%A1gina
	static noRecarga() {
		window.onbeforeunload = function () {
			return "¿Desea recargar la página web?";
		};
	}
	// TODO: Implementar top score
	static actualizacionDatos() {
		let puntaje = `${figura.puntaje}`;
		let nivel = `${figura.nivel}`;
		// https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
		document.getElementById("game-score").innerHTML = puntaje;
		document.getElementById("game-level").innerHTML = nivel;
	}

	static manejoCanva() {
		Externo.actualizacionDatos();
		Externo.divPausa();
		Externo.noRecarga();
		if (!focused) {
			pausa = true;
		} else {
			pausa = false;
		}
	}
}

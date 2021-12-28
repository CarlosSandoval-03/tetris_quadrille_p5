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

	// https://platzi.com/tutoriales/1050-programacion-basica/178-mostrar-y-ocultar-div-con-javascript-y-css3/
	static divPausa() {
		if (pausa) {
			document.getElementById("pantalla-pausa").style.height = "100%";
			document.getElementById("titulo-pausa").style.visibility = "visible";
			document.getElementById("parrafo-pausa").style.visibility = "visible";
		} else {
			document.getElementById("pantalla-pausa").style.height = "0px";
			document.getElementById("titulo-pausa").style.visibility = "hidden";
			document.getElementById("parrafo-pausa").style.visibility = "hidden";
		}
	}

	static manejoCanva() {
		Externo.divPausa();
		Externo.noRecarga();
		if (!focused) {
			pausa = true;
		} else {
			pausa = false;
		}
	}
	// https://es.stackoverflow.com/questions/57080/c%C3%B3mo-detener-al-momento-de-refrescar-una-p%C3%A1gina
	static noRecarga() {
		window.onbeforeunload = function () {
			return "¿Desea recargar la página web?";
		};
	}
}

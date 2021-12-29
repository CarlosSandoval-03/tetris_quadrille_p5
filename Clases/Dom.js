class ControladorDOM {
	static actualizacion() {
		Almacenamiento.actualizacionDatos();
		ControladorDOM.divPausa(pausa);
		ControladorDOM.divDerrota(derrota);
		ControladorDOM.noRecarga();
		if (!focused || contador % 2 != 0) {
			pausa = true;
		} else {
			pausa = false;
		}
	}

	// https://platzi.com/tutoriales/1050-programacion-basica/178-mostrar-y-ocultar-div-con-javascript-y-css3/
	// https://developer.mozilla.org/es/docs/Web/CSS/position
	static divPausa(pausa = false) {
		let titulo = document.getElementById("titulo-pausa"),
			parrafo = document.getElementById("parrafo-pausa"),
			contenedor = document.getElementById("pantalla-pausa"),
			canva = document.getElementById("mainGame");

		if (pausa) {
			contenedor.style.height = "100%";
			titulo.style.visibility = "visible";
			parrafo.style.visibility = "visible";
			canva.style.position = "relative";
			canva.style.top = "999em";
		} else {
			contenedor.style.height = "0px";
			titulo.style.visibility = "hidden";
			parrafo.style.visibility = "hidden";
			document.getElementById("mainGame").style.position = "static";
			document.getElementById("mainGame").style.left = "0px";
		}
	}
	static divDerrota(derrota = false) {
		let contenedor = document.getElementById("pantalla-derrota"),
			titulo = document.getElementById("titulo-derrota"),
			parrafo = document.getElementById("parrafo-derrota"),
			canva = document.getElementById("mainGame");

		if (derrota) {
			contenedor.style.height = "100%";
			titulo.style.visibility = "visible";
			parrafo.style.visibility = "visible";
			canva.style.visibility = "hidden";
			document.getElementById("pantalla-pausa").style.height = "0px";
		}
	}

	// https://es.stackoverflow.com/questions/57080/c%C3%B3mo-detener-al-momento-de-refrescar-una-p%C3%A1gina
	static noRecarga() {
		window.onbeforeunload = function () {
			return "¿Desea recargar la página web?";
		};
	}
}

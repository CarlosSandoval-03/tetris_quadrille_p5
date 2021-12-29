class ControladorDOM {
	static actualizacion() {
		Almacenamiento.actualizacionDatos();
		ControladorDOM.divPausa(pausa, derrota);
		ControladorDOM.divDerrota(derrota);
		if (!focused || contador % 2 != 0) {
			pausa = true;
		} else {
			pausa = false;
		}
	}

	// https://platzi.com/tutoriales/1050-programacion-basica/178-mostrar-y-ocultar-div-con-javascript-y-css3/
	// https://developer.mozilla.org/es/docs/Web/CSS/position
	static divPausa(pausa = false, derrota = false) {
		let titulo = document.getElementById("titulo-pausa"),
			parrafo = document.getElementById("parrafo-pausa"),
			contenedor = document.getElementById("pantalla-pausa"),
			canva = document.getElementById("mainGame");

		if (pausa && derrota == false) {
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
			document.getElementById("pantalla-pausa").style.height = "0px";
			contenedor.style.height = "100%";
			titulo.style.visibility = "visible";
			parrafo.style.visibility = "visible";
			canva.style.visibility = "hidden";
			Almacenamiento.actualizacionDatos();
			Almacenamiento.obtenerTopScore();
		}
	}
}

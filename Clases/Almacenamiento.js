class Almacenamiento {
	// https://www.youtube.com/watch?v=hb8O0qRqiSk
	static guardarTopScore(nuevoPuntaje) {
		localStorage.setItem("topScore", nuevoPuntaje);
	}
	static obtenerTopScore() {
		let score = localStorage.getItem("topScore");
		if (score == null || score == undefined) {
			score = 0;
		}
		return score;
	}

	// https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
	static actualizacionDatos() {
		let puntaje = `${figura.puntaje}`;
		let nivel = `${figura.nivel}`;
		document.getElementById("game-score").innerHTML = puntaje;
		document.getElementById("game-level").innerHTML = nivel;
	}

	static obtenerPuntajeMaximo() {
		document.getElementById("top-score").innerHTML =
			Almacenamiento.obtenerTopScore();
	}
}

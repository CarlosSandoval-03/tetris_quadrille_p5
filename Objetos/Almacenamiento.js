const Almacenamiento = {
	// Almacenar data en LocalStorage - este valor sera almacenado cuando el score actual supere al almacenado de antemano
	// O no hayan datos
	// https://www.youtube.com/watch?v=hb8O0qRqiSk
	guardarTopScore: function (nuevoPuntaje) {
		localStorage.setItem("topScore", nuevoPuntaje);
	},
	obtenerTopScore: function () {
		let score = localStorage.getItem("topScore");
		if (score == null || score == undefined) {
			score = 0;
		}
		return score;
	},

	// Cambiar el contenido de un elemento HTML a traves de JavaScript
	// https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML
	actualizacionDatos: function () {
		let puntaje = `${figura.puntaje}`;
		let nivel = `${figura.nivel}`;
		document.getElementById("game-score").innerHTML = puntaje;
		document.getElementById("game-level").innerHTML = nivel;
	},

	obtenerPuntajeMaximo: function () {
		document.getElementById("top-score").innerHTML =
			Almacenamiento.obtenerTopScore();
	},
};

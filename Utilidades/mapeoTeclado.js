const SPACE_KEY = 32,
	Z_KEY = 90,
	P_KEY = 80;

let contador = 0;

function keyPressed() {
	if (keyIsDown(P_KEY)) {
		pausa = !pausa;
		contador += 1;
	}
	if (!pausa) {
		if (keyIsDown(RIGHT_ARROW)) {
			figura.derecha();
		} else if (keyIsDown(LEFT_ARROW)) {
			figura.izquierda();
		} else if (keyIsDown(UP_ARROW)) {
			figura.rotacionDerecha();
		} else if (keyIsDown(DOWN_ARROW)) {
			figura.abajo();
		} else if (keyIsDown(Z_KEY)) {
			figura.rotacionIzquierda();
		} else if (keyIsDown(SPACE_KEY)) {
			figura.hardDrop();
		}
	}
}

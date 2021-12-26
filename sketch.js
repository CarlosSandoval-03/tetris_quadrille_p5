let figura, tablero;
let posX = 3,
	posY = 4;

function setup() {
	createCanvas(VAR_CANVA.ancho + 200, VAR_CANVA.alto + 200);
	tablero = createQuadrille(VAR_MATH.columnas, VAR_MATH.filas);
	figura = new Figura();
}

function draw() {
	background(VAR_CANVA.color);

	drawQuadrille(tablero, {
		cellLength: VAR_MATH.tamanoCeldas,
		outline: "magenta",
		board: true,
	});
	figura.dibujar();
}

const SPACE_KEY = 32,
	Z_KEY = 90;

function keyPressed() {
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
		console.log("En construccion: Hard Drop");
	}
}

let figura, tablero;
let posX = 3,
	posY = 4;

function setup() {
	createCanvas(VAR_CANVA.ancho + 200, VAR_CANVA.alto + 200);
	tablero = createQuadrille(VAR_MATH.columnas, VAR_MATH.filas);
	figura = createQuadrille(4, 4);
}

function draw() {
	background(VAR_CANVA.color);

	drawQuadrille(tablero, {
		cellLength: VAR_MATH.tamanoCeldas,
		outline: "black",
		board: true,
	});

	drawQuadrille(figura, {
		x: posX,
		y: posY,
		cellLength: VAR_MATH.tamanoCeldas,
		outline: "magenta",
		board: true,
	});
}

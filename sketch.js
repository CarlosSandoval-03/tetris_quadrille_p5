let figura, tablero;
let posX = 3,
	posY = 4;

function setup() {
	let canva = createCanvas(VAR_CANVA.ancho, VAR_CANVA.alto);
	canva.id("mainGame");
	canva.class("gameWindow");
	select(".canvas-box").child(canva);

	tablero = createQuadrille(VAR_MATH.columnas, VAR_MATH.filas);
	figura = new Figura();
}

function draw() {
	background(VAR_CANVA.color);

	drawQuadrille(tablero, {
		cellLength: VAR_MATH.tamanoCeldas,
		outline: VAR_CANVA.bordeTablero,
		board: true,
	});
	figura.dibujar();
}

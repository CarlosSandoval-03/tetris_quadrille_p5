let figura, tablero, pausa;
let posX = 3,
	posY = 4;

function setup() {
	Externo.deteccionDispositivoMovil();

	let canva = createCanvas(VAR_CANVA.ancho, VAR_CANVA.alto);
	canva.id("mainGame");
	canva.class("gameWindow");
	select(".canvas-box").child(canva);

	tablero = createQuadrille(VAR_MATH.columnas, VAR_MATH.filas);
	figura = new Figura();
	pausa = false;
}

function draw() {
	background(VAR_CANVA.color);
	Externo.manejoCanva();

	drawQuadrille(tablero, {
		cellLength: VAR_MATH.tamanoCeldas,
		outline: VAR_CANVA.bordeTablero,
		board: true,
	});
	figura.iniciar(pausa);
}

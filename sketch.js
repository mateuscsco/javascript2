function setup() {
  createCanvas(600, 400);//cria o "cenário"
  trilha.loop();
}

function draw() {
  background(0);
  exibeBola();
  movimentaBola();
  sensor();
  exiberaquete(xr,yr);
  exiberaquete(xR, yR);
  movimentaraquete();
  verificaColisaoRaquete(xr, yr);
  verificaColisaoRaquete(xR, yR);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
  calculaChanceDeErrar();
}
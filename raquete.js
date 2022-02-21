//Variáveis raquete:
let xr=9;
let yr=150;
let lr=7;
let cr=100;

//variáveis do oponente
let xR = 585;
let yR = 150;
let velocidadeYOponente;
let colidiu = false;
let chanceDeErrar = 0;

function exiberaquete(x,y){
  rect(x,y,lr,cr);
}
  function movimentaraquete() {
  if (keyIsDown(UP_ARROW)){
    yr-=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yr+=10;
  }
  }

function movimentaRaqueteOponente() {
    velocidadeYOponente = yb - yR - lr / 2 - 30;
    yR += velocidadeYOponente+chanceDeErrar
}
function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
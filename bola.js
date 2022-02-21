//variáveis da bola:
let xb=300;
let yb=200;  
let diametro=30;
let raio = diametro/2;

function exibeBola(){

  bola =circle(xb,yb,diametro);
}

//variáveis de movimento:
let velocidadeby = 9;
let velocidadebx = 9;


function movimentaBola(){
  yb+=velocidadeby;
  xb+=velocidadebx;
  
}
function sensor(){
  if (yb+raio>height || yb-raio<0){
    velocidadeby*=-1;
  }
  if (xb+raio>width||xb-raio<0 ){
    velocidadebx*=-1;
  }
}

function verificaColisaoRaquete(x, y) {
     colidiu = collideRectCircle(x, y, lr, cr, xb, yb, raio);
    if (colidiu){
        velocidadebx *= -1;
    raquetada.play();
    }
}

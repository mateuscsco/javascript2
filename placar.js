//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function incluiPlacar() {
    stroke(255);//adicions contorno nos objetos
    textAlign(CENTER);//alinha o texto
    textSize(16);//tamanho do texto
    fill(color(255, 140, 0));//modifica cor da caixa do meu placar
    rect(150, 10, 40, 20);//dimensão e posição do meu placar
    fill(255);//cor do preenchimento das linhas
    text(meusPontos, 170, 26);//exibe pontos
    fill(color(255, 140, 0));//cor caixa pontos oponente
    rect(450, 10, 40, 20);//caixa de pontuação oponente
    fill(255);//preenchimento das linhas
    text(pontosDoOponente, 470, 26);//exibe pontos
}

function marcaPonto() {
    if (xb+raio > 594) {
        meusPontos += 1;
        ponto.play();
    }
    if (xb-raio < 6) {
        pontosDoOponente += 1;
        ponto.play();
    }
}
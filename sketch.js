function setup() {
  createCanvas(500, 400);
   // somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  passouTodaATela();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  pontosMaiorQueZero();
  podeSeMover();
  
}











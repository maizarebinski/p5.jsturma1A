//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variáveis da raquete
 let xRaquete = 5;
 let yRaquete = 150;
 let raqueteLargura = 10;
 let raqueteAltura = 90;

 //variaveis da raquete oponente
 let xRaqueteOponente = 585;
 let yRaqueteOponente = 150;


//placar do jogo
 let meusPontos = 0;
 let pontosOponentes = 0;

//sons do jogo

 let ponto;
 let trilha;
 let raquetada;


let colidiu = false;

function preload() {
  
  trilha = loadSound("trilha.mp3")
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}
 
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

 function draw () {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPontos();
}
   
  
function mostraBolinha() {
  circle(xBolinha,yBolinha,diametro);
  
}

function mostraRaqueteOponente(){
  rect(xRaqueteOponente,yRaqueteOponente,raqueteLargura,raqueteAltura);
}


function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  
}

function verificaColisaoBorda() {
if (xBolinha + raio > width || xBolinha - raio < 0) {
   velocidadexBolinha *= - 1;
  } 
  
if (yBolinha + raio > height || yBolinha - raio < 0) {
   velocidadeyBolinha *= - 1;
  } 
}
 

function mostraRaquete(x, y){
  rect(x,y,raqueteLargura,raqueteAltura);
}

  function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  } 
  
    if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
    }
}

 function verificaColisaoRaquete() {  
 if(xBolinha - raio < xRaquete + raqueteLargura
  &&yBolinha - raio < yRaquete + raqueteAltura
  &&yBolinha + raio < yRaquete)
 {
   velocidadexBolinha *= -1; 
   raquetada.play()
 }
  
}

function verificaColisaoRaquete(x, y){
 colidiu = collideRectCircle(x, y, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio);
  
  if(colidiu) {
    
    velocidadexBolinha *= - 1;
    raquetada.play();
   }
  
  

function verificaColisãoRaquete(x, y){
 colidiu = collideRectCircle(x, y, raqueteLargura, raqueteAltura, xBolinha, yBolinha, raio);
  
  if(colidiu) {
    
    velocidadexBolinha *= - 1;
   }
}
}

 function movimentaRaqueteOponente() 
{
    
   if(keyIsDown(87)){
     yRaqueteOponente -= 10;
     }
  
  if(keyIsDown(83)){
     yRaqueteOponente += 10;
  }
}


function incluiPlacar()
{
  stroke("purple");
  textAlign(CENTER);
  textSize(16);
  fill(255);
  
  //placar meuPontos
  fill(color(255, 171, 0));
  rect(135, 10, 35, 20);
  fill("white");
  text(meusPontos, 150, 26);
  
  //placar pontosOponentes 
  fill(color(255, 171, 0));
  rect(430, 10, 35, 20);
  fill("white");
  text(pontosOponentes, 450, 26);
}

function marcaPontos() 
{
  if(xBolinha >590){
    meusPontos += 1; 
    ponto.play();
  }
  if(xBolinha <10){
    pontosOponentes +=1;
    ponto.play();
  }
}
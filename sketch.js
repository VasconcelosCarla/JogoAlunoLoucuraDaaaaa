
//global
var personagem;
var Guitar, GuitarImg;
//tela inicial
var botao, botaoImg;
//imagens fase 1
var JohnLennonImg, JohnLennonImg1, JohnLennonImg2;
var DiscoImg;
//depois eu resolvo
var telaFinal, telaFinalImg;
var cenario;
var começo, começoImg;
//estados
var TELAINCIAL = 0;
var FASEUM = 1;
var FASEDOIS = 2;
var estadoGlobal = TELAINCIAL;

function preload(){
  //tela inicial
  botaoImg = loadImage('imagens/botao.png');
  //fase um
  JohnLennonImg = loadAnimation('imagens/JohnLennon - parado.png');
  JohnLennonImg1 = loadAnimation('imagens/JohnLennon - direita1.png', 'imagens/JohnLennon - direita2.png', 'imagens/JohnLennon - direita3.png', 'imagens/JohnLennon - direita4.png');
  JohnLennonImg2 = loadAnimation('imagens/JohnLennon - esquerda1.png', 'imagens/JohnLennon - esquerda2.png', 'imagens/JohnLennon - esquerda3.png', 'imagens/JohnLennon - esquerda4.png');
  
  GuitarImg = loadImage('imagens/Guitarra - JohnLennon.png');

  DiscoImg = loadImage('imagens/Please Please me disc.png');

  //telaFinal = loadImage('imagens/tela final.png');
  começoImg = loadImage('imagens/começo.png');
  cenario = loadImage('imagens/background.png');
}

function setup() {
  createCanvas(800,400);
  //global
  personagem = createSprite(50, 70);
  personagem.scale = 0.08;
  Guitar = createSprite(750, 320);
  Guitar.scale = 0.08;
  //fase1:
  personagem.addAnimation('JohnLennon parado', JohnLennonImg);
  personagem.addAnimation('JohnLennon andando para direita', JohnLennonImg1);
  personagem.addAnimation('JohnLennon andando para esquerda', JohnLennonImg2);
  Guitar.addImage('Guitarra do JohnLennon', GuitarImg);

  botao = createSprite(400, 300, 150, 30);
  botao.addImage('botao', botaoImg);
  botao.scale = 0.5

}

function draw() {
  if(estadoGlobal === TELAINCIAL){
    telaInicial(); 

  }
  if(estadoGlobal == TELAINCIAL && mousePressedOver(botao)){
    estadoGlobal = FASEUM;
    console.log("estadoGlobal é " + estadoGlobal);
    
    
  }
  

  if(estadoGlobal === 1){
    botao.destroy();
    faseUm();
    botao = null;


    
  }
  if(estadoGlobal == FASEUM && personagem.isTouching(Guitar)){
    estado = FASEDOIS
  }

  

  drawSprites();
  console.log(botao.visible);
}

function telaInicial(){
  personagem.visible = false;
  Guitar.visible = false;

  //criação de sprites
  background('purple');
 
  
}

function faseUm(){
  var parede1, parede2, parede3, parede4, parede5, parede6, parede7, parede8, parede9, parede10, parede11, parede12, parede13, parede14, parede15, parede16, parede17, parede18, parede19, parede20, parede21, parede22, parede23, parede24; 
  var Disco;

  var INICIO = 1;
  var JOGAR = 2;
  var RECOMEÇAR = 3;
  var estado = INICIO;

  

  //criação de sprites
  background(cenario); 
  botao.visible = false;

  parede1 = createSprite(3, 150, 10, 250);
  parede1.visible = false;

  parede2 = createSprite(48, 22, 80, 10);
  parede2.visible = false;

  parede3 = createSprite(90, 84, 10, 120);
  parede3.visible = false;

  parede4 = createSprite(180, 140, 180, 10);
  parede4.visible = false;

  parede5 = createSprite(42, 250, 80, 10);
  parede5.visible = false;

  parede6 = createSprite(78, 300, 10, 100);
  parede6.visible = false;

  parede7 = createSprite(115, 344, 70, 10);
  parede7.visible = false;

  parede8 = createSprite(153, 300, 10, 100);
  parede8.visible = false;

  parede9 = createSprite(303, 250, 310, 10);
  parede9.visible = false;
  
  parede10 = createSprite(267, 100, 10, 90);
  parede10.visible = false;

  parede11 = createSprite(300, 55, 70, 10);
  parede11.visible = false;

  parede12 = createSprite(340, 96, 10, 90);
  parede12.visible = false;

  parede13 = createSprite(490, 140, 305, 10);
  parede13.visible = false;

  parede14 = createSprite(453, 298, 10, 100);
  parede14.visible = false;

  parede15 = createSprite(640, 100, 10, 90);
  parede15.visible = false;

  parede16 = createSprite(495, 345, 70, 10);
  parede16.visible = false;

  parede17 = createSprite(529, 298, 10, 100);
  parede17.visible = false;

  parede18 = createSprite(678, 55, 70, 10);
  parede18.visible = false;

  parede19 = createSprite(716, 98, 10, 90);
  parede19.visible = false;

  parede20 = createSprite(615, 250, 180, 10);
  parede20.visible = false;

  parede21 = createSprite(703, 312, 10, 130);
  parede21.visible = false;

  parede22 = createSprite(750, 375, 90, 10);
  parede22.visible = false;

  parede23 = createSprite(791, 260, 10, 230);
  parede23.visible = false;

  parede24 = createSprite(758, 140, 90, 10);
  parede24.visible = false;

  Disco = createSprite(50, 200);
  Disco.addImage('Disco', DiscoImg);
  Disco.scale = 0.08;  

  começo = createSprite(175, 80);
  começo.addImage('começo', começoImg);
  começo.scale = 0.1;

  //funções do jogo
  console.log("estado é "+ estado);
  if(estado === INICIO && keyDown('space')){
    estado = JOGAR;
    personagem.visible = true;
    Disco.visible = true;
    Guitar.visible = true;


  }

  if(estado === JOGAR){

    if(keyDown('w')){
      personagem.y = personagem.y - 6;
      personagem.changeAnimation('JohnLennon andando para direita');
    }
    if(keyDown('s')){
      personagem.y = personagem.y + 6;
      personagem.changeAnimation('JohnLennon andando para esquerda');
    }
    if(keyDown('a')){
      personagem.changeAnimation('JohnLennon andando para esquerda');
      personagem.x = personagem.x - 6;
    }
    if(keyDown('d')){
      personagem.changeAnimation('JohnLennon andando para direita');
      personagem.x = personagem.x + 6;
    }

    Disco.velocityX = 20;
    começo.visible = false;
  }

  if(Disco.isTouching(parede23)){
    Disco.velocityX = - 15;
  }

  if(Disco.isTouching(parede1)){
    Disco.velocityX = 15;
  }

  if(personagem.isTouching(Disco)){
    estado = RECOMEÇAR;
  }

  if(estado === RECOMEÇAR){
    personagem.y = 70;
    personagem.x = 50;
  }

  personagem.collide(parede2);
  personagem.collide(parede1);
  personagem.collide(parede3);
  personagem.collide(parede4);
  personagem.collide(parede5);
  personagem.collide(parede6);
  personagem.collide(parede7);
  personagem.collide(parede8);
  personagem.collide(parede9);
  personagem.collide(parede10);
  personagem.collide(parede11);
  personagem.collide(parede12);
  personagem.collide(parede13);
  personagem.collide(parede14);
  personagem.collide(parede15);
  personagem.collide(parede16);
  personagem.collide(parede17);
  personagem.collide(parede18);
  personagem.collide(parede19);
  personagem.collide(parede20);
  personagem.collide(parede21);
  personagem.collide(parede22);
  personagem.collide(parede23);
  personagem.collide(parede24);

}

function faseDois(){
  
}

function final(){
  telaFinal = createSprite(400, 200);
  telaFinal.addImage('telafinal', telaFinalImg);
  telaFinal.scale = 0.47;
  telaFinal.visible = false;
}
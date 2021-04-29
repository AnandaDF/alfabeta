var t, img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img4, x, y, xc, yc, x1, y1, x2, y2, x3, y3;

x = 0
y = 0
xc = -1000
yc = -1000
x1 = -1000
y1 = -1000
x2 = -1000
y2 = -1000
x3 = -1000
y3 = -1000

t = 0;

function setup() {
  createCanvas(1024, 1024);
  img = loadImage('capa v1.png');
  img1 = loadImage('jogo1.png')
  img2 = loadImage('jogo2.png')
  img3 = loadImage('fundo in.png')
  img4 = loadImage('fundo cre2.png')
  img5 = loadImage('livro menu.png')
  img6 = loadImage('seta.png')
  img7 = loadImage('seta2.png')
  img8 = loadImage('certo.png')
  img9 = loadImage('PROF.png')
  img10 = loadImage('certo-1.png')
  img11 = loadImage('certo-2.png')
  img12 = loadImage('certo-3.png')
  img13 = loadImage('fundoin2.png')
  img14 = loadImage('fim 1.png')
}

function draw() {
  background(img);
  if(t==0)
    menu()
  if(t==1)
    jogar()
  if(t==2)
    instrucoes()
  if(t==3)
    creditos()
  if(t==4)
    segundafase()
  if(t==5)
    instrucoes2()
  if(t==6){
    endgame()
  }
}
  
function menu(){  
  fill(255, 203, 255)
  noStroke()              
  textSize(100);
  text("αβ", 450, 100);           
  textSize(65);
  text("Jogar", 400, 720);
  text("Instruções", 335, 840);
  text("Créditos", 370, 960);
}

function jogar(){
  image(img1, 0, 0)
  image(img6, 10, 904)
  image(img7, 904, -10)
  fill(255)
  textSize(40)
  text("Bem vindo à escola αβ,"+"\n"+"aqui você aprenderá o afabeto!"+"\n"+"Hoje, vamos aprender a letra A e"+"\n"+"quero que você encontre alguns "+"\n"+"elementos para mim.", 10, 50)
  
}

function segundafase(){
  image(img2, x, y)
  image(img6, 10, 904)
  image(img5, 0, 0)
  image(img8, xc, yc)
  image(img10, x1, y1)
  image(img8, x2, y2)
  image(img8, x3, y3)
  if(keyIsDown(65)){
    x +=3
  }
  if(keyIsDown(68)){
    x -=3 
  }
}

function instrucoes(){
  image(img3, 0, 0)
  image(img6, 10, 904)
  image(img7, 904, -10)
}

function instrucoes2(){
  image(img13, 0, 0)
  image(img6, 10, 904)
}

function creditos(){
  image(img4, 0, 0)
  image(img6, 10, 904)
}

function endgame(){
  image(img14, 0, 0)
}

function mouseClicked(){
   if(t==0){
    if(mouseX>300 && mouseX<600 && mouseY>655 && mouseY<1310){
      t=1
    }
    if(mouseX>300 && mouseX<600 && mouseY>775 && mouseY<1550){
      t=2
    }
     if(mouseX>300 && mouseX<600 && mouseY>895 && mouseY<1790){
      t=3
    }
  }
  if(t==1){
     if(mouseX>10 && mouseX<120 && mouseY>904 && mouseY<1024){
      t=0
     }  if(mouseX>904 && mouseX<1024 && mouseY>-10 && mouseY<100)
      t=4
  }
  if(t==2){
     if(mouseX>10 && mouseX<120 && mouseY>904 && mouseY<1024)
      t=0
    if(mouseX>904 && mouseX<1024 && mouseY>-10 && mouseY<100)
      t=5
    
  }
  if(t==3 || t==4){
    if(mouseX>10 && mouseX<120 && mouseY>904 && mouseY<1024){
      t=0
       }
}
  if(t==5){
    if(mouseX>10 && mouseX<120 && mouseY>904 && mouseY<1024)
      t=2
  }
  if(t==4){
   if(mouseX>0 && mouseX<180 && mouseY>0 && mouseY<1024)
      xc = 647
      yc = 860
   if(mouseX>200 && mouseX<300 && mouseY>180 && mouseY<300)
      x1 = 810
      y1 = 867
    if(mouseX>470 && mouseX<530 && mouseY>760 && mouseY<900)
      x2 = 275
      y2 = 880
    if(mouseX>890 && mouseX<1024 && mouseY>600 && mouseY<650)
      x3 = 410
      y3 = 880
      if(mouseX>904 && mouseX<1024 && mouseY>500 && mouseY<550)
      t=6
  }
 if(t==6){
 if(mouseX>670 && mouseX<750 && mouseY>720 && mouseY<800){
    t=0
  }
 }
}
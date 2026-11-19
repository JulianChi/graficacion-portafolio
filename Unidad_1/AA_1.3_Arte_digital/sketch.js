function setup() {
  createCanvas(600, 700);
  noLoop();
}

function draw() {
  background(140,205,190);
  //color y grosor
  stroke("#3E5B29");
  strokeWeight(25);
  //dos primeros troncos
  line(480, 700, 350, 550);
  line(350, 550, 150, 500);
  //medianas ramas
  strokeWeight(15);
  line(300, 700, 305, 540);
  line(330, 700, 340, 550);
  strokeWeight(13);
  line(305, 540, 280, 350);
  line(340, 550, 400, 350);
  line(200, 500,140, 350);
  line(360, 500, 500, 500);
  line(500, 500,550, 400);
  strokeWeight(12);
  line(600, 130,500, 145);
  line(500, 145, 350, 125);
  line(350, 125,250, 140);
  //ramas pequeñas
  strokeWeight(6);
  line(180,450,100,400);
  line(165,400,200,340);
  line(290,400,230,430);
  line(390,370,500,360);
  line(360,470,465,420);
  line(385,130,350,180);
  line(410,130,430,90);
  line(240,0,180,100);
  noStroke();

  // Brotes puntiagudos con triángulos
  fill("#3E5B29");
  triangle(240, 145, 250, 130, 260, 145);

  // Nodos o cortes leñosos con rectángulos
  fill("#88A65E");
  rect(345, 120, 8, 8);
  
  dibujarFlor(100,400);
  dibujarFlor(415,105);
  dibujarFlor(500, 145);
  dibujarFlor(300,130);
  dibujarFlor(195,100);
  dibujarFlor(200,40);
  dibujarFlor(355,165);
  dibujarFlor(365,135);
  dibujarFlor(140, 350);
  dibujarFlor(280, 350);
  dibujarFlor(500, 360);
  dibujarFlor(550, 400);
  dibujarFlor(350, 550);
  dibujarFlor(140, 500);
  dibujarFlor(360, 500);
  dibujarFlor(450,360);
  dibujarFlor(200,360);
  dibujarFlor(280,400);
  dibujarFlor(210,495);
  dibujarFlor(465,425);
  dibujarFlor(390,350);
  dibujarFlor(240,430);
  dibujarFlor(405,435);
}

//funcion que use para no hacer o repeitr mucho el mismo codigo
  function dibujarFlor(x, y) {
  noStroke();

  // Pétalos blancos marfil (óvalos alrededor del centro)
  fill(244, 246, 240);
  ellipse(x, y - 7, 10, 14); // Pétalo de arriba (vertical)
  ellipse(x, y + 7, 10, 14); // Pétalo de abajo (vertical)
  ellipse(x - 7, y, 14, 10); // Pétalo de la izquierda 
  ellipse(x + 7, y, 14, 10); // Pétalo de la derecha 

  // Centro
  fill(204, 255, 102);
  ellipse(x, y, 8, 8);
  }
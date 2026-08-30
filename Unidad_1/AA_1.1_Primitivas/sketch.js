function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Fondo
  background(30, 35, 50);

  // Antenas
  stroke(0, 220, 255);
  strokeWeight(3);
  line(180, 110, 160, 75);
  line(220, 110, 240, 75);

  // Brazos
  stroke(120, 130, 150);
  strokeWeight(6);
  line(125, 230, 80, 275);
  line(275, 230, 320, 275);

  // Triángulo superior
  stroke(255, 200, 0);
  strokeWeight(2);
  fill(255, 220, 50);
  triangle(200, 55, 190, 80, 210, 80);

  // Cuello
  stroke(60, 70, 90);
  strokeWeight(2);
  fill(130, 140, 160);
  rect(185, 180, 30, 20);

  // Cuerpo
  stroke(0, 180, 200);
  strokeWeight(3);
  fill(50, 60, 80);
  rect(125, 195, 150, 130, 10);

  // Pantalla del cuerpo
  stroke(0, 220, 180);
  strokeWeight(2);
  fill(20, 30, 40);
  rect(145, 210, 110, 90, 5);

  // Triangulo en el pecho
  stroke(255);
  strokeWeight(1);
  fill(255, 80, 80);
  triangle(200, 225, 185, 255, 215, 255);

  // Cabeza
  stroke(0, 180, 200);
  strokeWeight(3);
  fill(60, 70, 95);
  rect(140, 90, 120, 95, 10);

  // Puntas de antena
  stroke(0, 220, 255);
  strokeWeight(2);
  fill(0, 255, 220);
  circle(160, 75, 10);
  circle(240, 75, 10);

  // Orejas
  fill(120, 130, 150);
  noStroke();
  ellipse(135, 137, 10, 22);
  ellipse(265, 137, 10, 22);

  // Ojos
  stroke(255);
  strokeWeight(2);
  fill(0, 240, 200);
  ellipse(175, 130, 24, 24);
  ellipse(225, 130, 24, 24);

  // Pupilas
  fill(255);
  noStroke();
  circle(177, 128, 7);
  circle(227, 128, 7);

  // Boca
  stroke(0, 240, 200);
  strokeWeight(3);
  line(175, 160, 225, 160);

  // Botones inferiores
  stroke(0);
  strokeWeight(1);
  fill(0, 255, 150);
  circle(170, 280, 10);
  fill(255, 200, 0);
  circle(200, 280, 10);
  fill(255, 60, 80);
  circle(230, 280, 10);
}

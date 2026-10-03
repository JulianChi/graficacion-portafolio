function setup() {
  createCanvas(600, 250);
  angleMode(DEGREES); // Usamos grados para que rotar
}

function draw() {
  background(245, 245, 250);
 //Bebé 
  push();
  translate(60, 130);
  scale(0.6);//Tamaño 60%, mas chico
  rotate(-10);//Inclinado a la izquierda
  dibujarGato(color(255, 255, 255), 5); 
  pop();
  //Joven
  push();
  translate(160, 130);//Posición 2
  scale(0.9);//Un poco más grande
  rotate(5);
  dibujarGato(color(250, 230, 210), 10); 
  pop();
  //Adulto
  push();
  translate(280, 130);//Posición 3
  scale(1.2);//Tamaño normal
  rotate(-5);
  dibujarGato(color(240, 180, 120), 15); 
  pop();
  //Señor
  push();
  translate(420, 130);// Posición 4
  scale(1.5);//Más grande y robusto
  rotate(8);
  dibujarGato(color(220, 140, 70), 20); 
  pop();
  //Anciano
  push();
  translate(560, 130);//Posición 5
  scale(1.8);//El tamaño máximo
  rotate(0);
  dibujarGato(color(180, 180, 180), 25); 
  pop();
  noLoop();//Solo lo dibuja una vez para no repetir 60 veces por segundo
}
// FUNCIÓN DIBUJAR GATO
function dibujarGato(colorPelo, largoBigote) {
  noStroke();//Quitar los bordes negro
  // PIEL O PELOS DEL GATO, TAMBIEN OREJAS CON LOS TRIANGULOS
  fill(colorPelo);//Usamos el color de pelo
  triangle(-10, -15, -25, -35, -22, -10);//Oreja Izquierda
  triangle(10, -15, 25, -35, 22, -10);//Oreja Derecha
  //Interior de las orejas (rosado)
  fill(255, 180, 190);
  triangle(-12, -16, -21, -30, -19, -13);//Centro Izquierdo
  triangle(12, -16, 21, -30, 19, -13);//Centro Derecho
  //CABEZA PRINCIPAL
  fill(colorPelo);
  ellipse(0, 0, 50, 40);//50 de ancho, 40 de alto. Origen en 0,0 
  //OJOS
  fill(30);
  ellipse(-10, 0, 6, 8);//Ojo Izquierdo 
  ellipse(10, 0, 6, 8);//Ojo Derecho
  //Brillo de los ojos
  fill(255); // Blanco
  circle(-11, -2, 2.5);//2.5 diamentro
  circle(9, -2, 2.5);
  //NARIZ
  fill(255, 150, 150);
  ellipse(0, 8, 6, 4);
  //BIGOTES
  stroke(100);//Color gris oscuro para las líneas
  strokeWeight(1.5);//Grosor de la línea
  //Bigotes izquierdos
  line(-15, 5, -15 - largoBigote, 2); 
  line(-15, 9, -15 - largoBigote, 9);
  //Bigotes derechos
  line(15, 5, 15 + largoBigote, 2); 
  line(15, 9, 15 + largoBigote, 9);
}
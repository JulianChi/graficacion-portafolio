let cancion;
let logoTec;
let sonando = false;
let reproduciendo = false; 

// Medidas base de nuestra "Caja Virtual"
const W = 1200;
const H = 800;
let mx, my; // Mouse ajustado a la escala

let foto1;
let foto2; 

async function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  logoTec = await loadImage('Logotec.png'); 
  cancion = createAudio('audio.mp3'); 
  
   foto1 = await loadImage('hola.jpg');
   foto2 = await loadImage('personaMaya.jpg');
}

function draw() {
  background(15, 20, 30); 

  let factor = min(width / W, height / H);
  let offsetX = (width - (W * factor)) / 2;
  let offsetY = (height - (H * factor)) / 2;
  
  // Ajustamos el mouse para que las calaveras sigan viéndolo bien
  mx = (mouseX - offsetX) / factor;
  my = (mouseY - offsetY) / factor;
  
  push();
  // Centramos y encogemos/agrandamos todo el lienzo proporcionalmente
  translate(offsetX, offsetY);
  scale(factor);
  
  if (!reproduciendo) {
    fill(255, 150); 
    textSize(16);
    textAlign(LEFT, TOP);
    text("Haz un clic en la pantalla para escuchar la música", 130, 25); 
  }
  
  dibujarPapelPicado();
  dibujarMuchosPetalosAbajo(); 
  dibujarAltarTradicional();
  dibujarLuzMouse();
  
  if (logoTec) {
    rectMode(CENTER);
    fill(255); 
    noStroke();
    rect(45, 45, 70, 70, 8); 
    imageMode(CENTER);
    image(logoTec, 45, 45, 60, 60); 
  }
  
  pop();
}

function dibujarPapelPicado() {
  let colores = [color(255, 0, 100), color(0, 200, 255), color(150, 255, 0), color(255, 150, 0)];
  let ancho = 100;
  let separacion = ancho + 20;
  let numPapeles = floor(W / separacion) + 1;
  let centro = floor(numPapeles / 2); 
  
  stroke(255, 50);
  line(0, 50, W, 50);
  noStroke();

  for (let i = 0; i < numPapeles; i++) {
    push();
    translate(i * separacion, 50);
    rotate(sin(frameCount * 2 + i * 20) * 5);
    
    let colorPapel = colores[i % colores.length];
    fill(colorPapel);
    rectMode(CENTER);
    rect(0, 40, ancho, 80, 5); 
    
    fill(15, 20, 30); 
    quad(0, 15, 25, 40, 0, 65, -25, 40); 
    triangle(-40, 10, -20, 10, -40, 30);
    triangle(40, 10, 20, 10, 40, 30);
    triangle(-40, 70, -20, 70, -40, 50);
    triangle(40, 70, 20, 70, 40, 50);
    triangle(-ancho/2, 80, 0, 100, ancho/2, 80); 
    
    fill(colorPapel); 
    textSize(35);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    if (i === centro - 1) text("I", 0, 43);
    else if (i === centro) text("S", 0, 43);
    else if (i === centro + 1) text("C", 0, 43);
    
    pop();
  }
}

function dibujarAltarTradicional() {
  rectMode(CENTER);
  noStroke();
  
  let cx = W / 2;
  let baseW = W * 0.7;   let y1 = H - 150;
  let midW = W * 0.5;    let y2 = H - 250;
  let topW = W * 0.3;    let y3 = H - 350;
  
  let prof = 30; 
  let incl = 20; 
  
  let colorTapa = color(220, 220, 230); 
  let colorFrente = color(250, 250, 255); 

  // ================= NIVEL 3 (HASTA ATRÁS) =================
  fill(80, 50, 35); 
  rect(cx, y3 + 50, topW, 100, 5, 5, 0, 0); 
  
  fill(colorTapa); 
  quad(cx - topW/2 + incl, y3 - prof, cx + topW/2 - incl, y3 - prof, cx + topW/2, y3, cx - topW/2, y3);
  
  fill(colorFrente); 
  rect(cx, y3 + 25, topW, 50, 5, 5, 0, 0); 
  dibujarBordeMantel(cx, y3 + 50, topW);
  
  dibujarMarcoFoto(cx - 60, y3 - 50, foto1);
  dibujarMarcoFoto(cx + 60, y3 - 50, foto2);
  dibujarVela(cx, y3 - 45, color(255, 255, 255)); 
  dibujarMiniFlor(cx - 100, y3 - 15);
  dibujarMiniFlor(cx + 100, y3 - 15);
  
  // ================= NIVEL 2 (MEDIO) =================
  fill(80, 50, 35); 
  rect(cx, y2 + 50, midW, 100, 5, 5, 0, 0); 
  
  fill(colorTapa); 
  quad(cx - midW/2 + incl, y2 - prof, cx + midW/2 - incl, y2 - prof, cx + midW/2, y2, cx - midW/2, y2);
  
  fill(colorFrente); 
  rect(cx, y2 + 25, midW, 50, 5, 5, 0, 0); 
  dibujarBordeMantel(cx, y2 + 50, midW);
  
  dibujarVela(cx - midW/2 + 40, y2 - 45, color(255, 0, 150)); 
  dibujarVela(cx + midW/2 - 40, y2 - 45, color(150, 0, 255)); 
  dibujarPan(cx - 60, y2 - 30);
  dibujarPan(cx + 60, y2 - 30);
  dibujarVasoAgua(cx - 20, y2 - 25); 
  dibujarCopal(cx + 20, y2 - 25);
  dibujarMiniFlor(cx - 120, y2 - 15);
  dibujarMiniFlor(cx + 120, y2 - 15);
  
  // ================= NIVEL 1 (FRENTE BASE) =================
  fill(80, 50, 35); 
  rect(cx, y1 + 75, baseW, 150, 5, 5, 0, 0); 
  
  fill(colorTapa); 
  quad(cx - baseW/2 + incl, y1 - prof, cx + baseW/2 - incl, y1 - prof, cx + baseW/2, y1, cx - baseW/2, y1);
  
  fill(colorFrente); 
  rect(cx, y1 + 37.5, baseW, 75, 5, 5, 0, 0); 
  dibujarBordeMantel(cx, y1 + 75, baseW);
  
  dibujarVela(cx - baseW/2 + 40, y1 - 45, color(0, 200, 255)); 
  dibujarVela(cx + baseW/2 - 40, y1 - 45, color(255, 100, 0)); 
  dibujarTrompo(cx - 160, y1 - 25); 
  dibujarMandarinas(cx + 160, y1 - 25); 
  dibujarTamales(cx, y1 - 20); 
  dibujarCalaveritas(cx - 70, y1 - 25); 
  dibujarCalaveritas(cx + 70, y1 - 25);
  dibujarMiniFlor(cx - 120, y1 - 10);
  dibujarMiniFlor(cx + 120, y1 - 10);
  
  // ================= ADORNOS HASTA EL FRENTE =================
  dibujarCruz(cx, H - 40);
  dibujarFlorCempasuchil(cx - 100, H - 40);
  dibujarFlorCempasuchil(cx + 100, H - 40);
  
  dibujarCalaveraGigante(cx - baseW/2 - 70, H - 70);
  dibujarCalaveraGigante(cx + baseW/2 + 70, H - 70);
}

function dibujarBordeMantel(x, y, anchoTela) {
  fill(250, 250, 255); 
  let radio = 30;
  let numArcos = floor(anchoTela / radio);
  let sobrante = anchoTela - (numArcos * radio);
  let inicio = x - (anchoTela / 2) + (radio / 2) + (sobrante / 2);
  
  for (let i = 0; i < numArcos; i++) {
    arc(inicio + i * radio, y, radio, 20, 0, 180);
  }
}

function dibujarMarcoFoto(x, y, miFoto) {
  fill(100, 50, 30); 
  rectMode(CENTER);
  rect(x, y, 60, 80, 2); 
  
  if (miFoto) {
    imageMode(CENTER);
    image(miFoto, x, y, 50, 70); 
  } else {
    fill(200); 
    rect(x, y, 50, 70);
    fill(255);
    circle(x, y - 10, 25); 
    rect(x, y + 15, 30, 20, 10); 
  }
}

function dibujarPan(x, y) {
  noStroke();
  fill(180, 100, 50); 
  ellipse(x, y, 45, 25);
  fill(200, 120, 60); 
  push();
  translate(x, y - 5);
  rotate(45);
  rect(0, 0, 35, 8, 4);
  rotate(90);
  rect(0, 0, 35, 8, 4);
  pop();
  circle(x, y - 10, 12); 
}

function dibujarTrompo(x, y) {
  noStroke();
  fill(255, 150, 50); 
  triangle(x - 15, y - 5, x + 15, y - 5, x, y + 20); 
  fill(50, 100, 200); 
  arc(x, y - 5, 30, 15, 180, 0);
  fill(200); 
  rect(x, y + 22, 2, 8);
}

function dibujarVasoAgua(x, y) {
  push();
  translate(x, y);
  scale(1.2); 
  noStroke();
  fill(180, 220, 255, 180); 
  rect(0, 0, 15, 25, 2, 2, 5, 5);
  fill(255, 255, 255, 200); 
  rect(-4, 0, 2, 15, 2);
  pop();
}

function dibujarCopal(x, y) {
  push();
  translate(x, y);
  scale(1.2); 
  noStroke();
  fill(160, 82, 45); 
  arc(0, 5, 20, 15, 0, 180);
  rect(0, 15, 8, 5);
  
  fill(200, 200, 200, 150);
  let humoY1 = 0 - (frameCount % 30);
  let humoY2 = 0 - ((frameCount + 15) % 30);
  circle(-2 + sin(frameCount * 5) * 3, humoY1, 6);
  circle(2 - sin(frameCount * 5) * 3, humoY2, 8);
  pop();
}

function dibujarCalaveritas(x, y) {
  // Ajustado con "mx" y "my" para que brille bien sin importar el tamaño de pantalla
  let distancia = dist(mx, my, x, y);
  let brilloOjos = distancia < 100 ? color(255, 255, 0) : color(0, 150, 255); 
  
  push();
  translate(x, y);
  scale(1.2); 
  noStroke();
  let colorHueso = color(240, 220, 200); 
  
  fill(colorHueso); 
  circle(0, 0, 20); 
  rect(0, 8, 10, 8, 2); 
  fill(255, 0, 100); circle(-4, -2, 5); 
  fill(brilloOjos); circle(4, -2, 5); 
  pop();
}

function dibujarCalaveraGigante(x, y) {
  noStroke();
  fill(240, 240, 240); 
  circle(x, y - 15, 60); 
  rectMode(CENTER);
  rect(x, y + 15, 30, 25, 5); 
  
  fill(15, 20, 30); 
  circle(x - 12, y - 15, 18); 
  circle(x + 12, y - 15, 18); 
  triangle(x, y - 5, x - 5, y + 3, x + 5, y + 3);
  
  stroke(15, 20, 30);
  strokeWeight(2);
  line(x - 12, y + 15, x + 12, y + 15); 
  line(x - 6, y + 10, x - 6, y + 20);   
  line(x, y + 10, x, y + 20);           
  line(x + 6, y + 10, x + 6, y + 20);   
  noStroke();
  
  dibujarMiniFlor(x, y - 45);
}

function dibujarMandarinas(x, y) {
  push();
  stroke(200, 80, 0); 
  strokeWeight(1.5);
  fill(255, 140, 0); 
  circle(x - 12, y + 5, 25);
  circle(x + 12, y + 5, 25);
  circle(x, y - 10, 25); 
  noStroke();
  fill(50, 200, 50); 
  ellipse(x, y - 25, 15, 8);
  pop();
}

function dibujarTamales(x, y) {
  noStroke();
  fill(200); 
  ellipse(x, y + 10, 60, 15); 
  fill(154, 205, 50); 
  rectMode(CENTER);
  rect(x - 10, y, 20, 30, 3);
  rect(x + 10, y, 20, 30, 3);
  stroke(100, 150, 30); 
  strokeWeight(2);
  line(x - 20, y, x, y);
  line(x, y, x + 20, y);
  noStroke();
}

function dibujarVela(x, y, colorVela) {
  noStroke();
  fill(colorVela); 
  rect(x, y, 20, 60, 3);
  
  push();
  translate(x, y - 35); 
  scale(map(sin(frameCount * 10), -1, 1, 0.8, 1.2));
  
  fill(255, 100, 0, 100); 
  ellipse(0, -10, 25, 40); 
  fill(255, 200, 50);     
  ellipse(0, -10, 12, 20);
  fill(255, 255, 255);    
  ellipse(0, -8, 6, 12);
  pop();
}

function dibujarMiniFlor(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill(255, 120, 0); 
  for (let i = 0; i < 8; i++) {
    rotate(45);
    ellipse(8, 0, 12, 6); 
  }
  fill(255, 200, 0); 
  circle(0, 0, 10);
  pop();
}

function dibujarFlorCempasuchil(x, y) {
  push();
  translate(x, y);
  rotate(frameCount); 
  noStroke();
  fill(255, 120, 0); 
  for (let i = 0; i < 12; i++) {
    rotate(30);
    ellipse(20, 0, 30, 12); 
  }
  fill(255, 180, 0); 
  circle(0, 0, 20);
  pop();
}

function dibujarCruz(x, y) {
  fill(255, 120, 0); 
  noStroke();
  rect(x, y, 12, 40, 2); 
  rect(x, y - 5, 30, 12, 2); 
}

function dibujarMuchosPetalosAbajo() {
  fill(255, 140, 0);
  noStroke();
  
  let baseW = W * 0.7;
  let orillaIzq = (W / 2) - (baseW / 2);
  let orillaDer = (W / 2) + (baseW / 2);
  
  for(let i = -120; i < 60; i += 18) {
    ellipse(orillaIzq + i, H - 15, 15, 8);
    ellipse(orillaIzq + i + 10, H - 25, 12, 6);
    ellipse(orillaIzq + i - 5, H - 40, 15, 8);
    ellipse(orillaIzq + i + 15, H - 55, 10, 5);
  }
  
  for(let i = -60; i < 120; i += 18) {
    ellipse(orillaDer + i, H - 15, 15, 8);
    ellipse(orillaDer + i + 10, H - 25, 12, 6);
    ellipse(orillaDer + i - 5, H - 40, 15, 8);
    ellipse(orillaDer + i - 15, H - 55, 10, 5);
  }
}

function dibujarLuzMouse() {
  noStroke();
  fill(0, 255, 200, 150);
  circle(mx, my, 20);
  fill(255, 255, 255);
  circle(mx, my, 8);
}

function mousePressed() {
  userStartAudio(); 
  reproduciendo = true; 
  
  if (cancion && !sonando) {
    cancion.loop(); 
    sonando = true;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
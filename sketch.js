let item;
let score = 0;
let gameOver = false;

function setup() {
  createCanvas(400, 400);
  novoItem();
}

function draw() {
  background(200);

  // Divisão campo / cidade
  fill(100, 200, 100);
  rect(0, 0, width / 2, height);
  fill(150);
  rect(width / 2, 0, width / 2, height);
  fill("green");
  // Textos
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text("🌾 Campo", width / 4, 20);
  text("🏙️ Cidade", 3 * width / 4, 20);
  text("Pontuação: " + score, width / 2, height - 20);

  if (gameOver) {
    textSize(24);
    text("Fim de jogo!", width / 2, height / 2);
    textSize(16);
    text("Pressione R para reiniciar", width / 2, height / 2 + 30);
    return;
  }

  // Item
  fill(255);
  textSize(24);
  text(item.emoji, item.x, item.y);
  item.y += 2;

  // Checa se caiu fora
  if (item.y > height) {
    gameOver = true;
  }
}

function keyPressed() {
  if (gameOver && key === 'r') {
    score = 0;
    gameOver = false;
    novoItem();
  }

  if (!gameOver && (key === 'a' || key === 'd')) {
    if (
      (key === 'l' && item.type === 'campo') ||
      (key === 'a' && item.type === 'cidade')
    ) {
      score++;
    } else {
      score--;
    }
    novoItem();
  }
}

function novoItem() {
  let tipos = [
    { emoji: '🌽', type: 'campo' },
    { emoji: '🐄', type: 'campo' },
    { emoji: '🐔', type: 'campo' },
    { emoji: '🏢', type: 'cidade' },
    { emoji: '🌿', type: 'campo' },
    { emoji: '✈️', type: 'cidade' }
  ];
  item = random(tipos);
  item.x = random(100, 300);
  item.y = 0;
}


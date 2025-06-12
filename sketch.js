 let item;
let score = 0;
let gameOver = false;

function setup() {
  createCanvas(300, 300);
  novoItem();
}

function draw() {
  background(100);

  // Divisão campo / cidade
  fill(100, 200, 100);
  fill("green");
  rect(0, 0, width / 2, height);
  fill(150);
  fill("#054F77")
  rect(width / 2, 0, width / 2, height);

  // Textos
  fill(0);
  fill("#FFFDD0")
  textSize(16);
  textAlign(CENTER);
  text("🌾'L'para Campo", width / 4, 20);
  text( "🏙️ 'A' para Cidade", 3 * width / 4, 20);
  text("Pontuação: " + score, width / 2, height - 20);

  if (gameOver) {
    textSize(24);
    text("Fim!", width / 2, height / 2);
    textSize(16);
    text("T para tentar de novo", width / 2, height / 2 + 30);
    return;
  }

  // Item
  fill(255);
  fill("#555D50")
  textSize(24);
  text(item.emoji, item.x, item.y);
  item.y += 2;

  // Checa se caiu fora
  if (item.y > height) {
    gameOver = true;
  }
}

function keyPressed() {
  if (gameOver && key === 't') {
    score = 0;
    gameOver = false;
    novoItem();
  }

  if (!gameOver && (key === 'L' || key === 'A')) {
    if (
      (key === 'L' && item.type === 'campo') ||
      (key === 'A' && item.type === 'cidade')
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
 






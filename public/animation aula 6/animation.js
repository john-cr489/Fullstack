const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

const W = canvas.width;  // 300
const H = canvas.height; // 300
const R = 28; // raio da bola

// Posição inicial: centro do canvas
let bx = W / 2;
let by = H / 2;

// Garante que a bola nunca saia do canvas
function clamp(valor, min, max) {
  return Math.max(min, Math.min(max, valor));
}

// Desenha a bola de basquete no canvas
function desenharBola(x, y) {
  ctx.clearRect(0, 0, W, H);

  // Corpo laranja com clip para as linhas internas
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, R, 0, Math.PI * 2);
  ctx.fillStyle = '#e76f00';
  ctx.fill();
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.clip();

  // Linha horizontal
  ctx.beginPath();
  ctx.moveTo(x - R, y);
  ctx.lineTo(x + R, y);
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 1.8;
  ctx.stroke();

  // Linha vertical
  ctx.beginPath();
  ctx.moveTo(x, y - R);
  ctx.lineTo(x, y + R);
  ctx.stroke();

  // Curva esquerda
  ctx.beginPath();
  ctx.arc(x - R * 0.5, y, R * 0.7, -Math.PI * 0.5, Math.PI * 0.5);
  ctx.stroke();

  // Curva direita
  ctx.beginPath();
  ctx.arc(x + R * 0.5, y, R * 0.7, Math.PI * 0.5, Math.PI * 1.5);
  ctx.stroke();

  ctx.restore();

  // Borda externa
  ctx.beginPath();
  ctx.arc(x, y, R, 0, Math.PI * 2);
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Bola segue o ponteiro do mouse, centralizada nele
canvas.addEventListener('mousemove', function(event) {
  const rect = canvas.getBoundingClientRect();

  // Centraliza a bola no ponteiro e aplica clamp para não sair do canvas
  bx = clamp(event.clientX - rect.left, R, W - R);
  by = clamp(event.clientY - rect.top,  R, H - R);

  desenharBola(bx, by);
});

// Mouse saiu do canvas: mantém a bola na última posição (nunca desaparece)
canvas.addEventListener('mouseleave', function() {
  desenharBola(bx, by);
});

// Desenho inicial
desenharBola(bx, by);
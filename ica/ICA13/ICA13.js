// set up canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random RGB color value

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    if (this.x + this.size >= width) {
      this.velX = -Math.abs(this.velX);
    }

    if (this.x - this.size <= 0) {
      this.velX = Math.abs(this.velX);
    }

    if (this.y + this.size >= height) {
      this.velY = -Math.abs(this.velY);
    }

    if (this.y - this.size <= 0) {
      this.velY = Math.abs(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

    collisionDetect() {
    for (const ball of balls) {
        if (this === ball) continue;

        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDist = this.size + ball.size;

        if (distance < minDist) {
        // create a normalized directional vector
        const nx = dx / distance;
        const ny = dy / distance;

        // we first need to seperate the balls, make sure they dont get stuck inside each other
        const overlap = minDist - distance;
        this.x += nx * (overlap / 2);
        this.y += ny * (overlap / 2);
        ball.x -= nx * (overlap / 2);
        ball.y -= ny * (overlap / 2);

        // Dot product, this helps us figure out the direction and magnitude with which to reverse the velocitys
        const dot1 = this.velX * nx + this.velY * ny;
        const dot2 = ball.velX * nx + ball.velY * ny;

        // actually reverse the velocity using dot product - found this equation all online.
        this.velX -= 2 * dot1 * nx;
        this.velY -= 2 * dot1 * ny;
        ball.velX -= 2 * dot2 * nx;
        ball.velY -= 2 * dot2 * ny;
        }
    }
    }

}

const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-3, 3),
    random(-3, 3),
    randomRGB(),
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();
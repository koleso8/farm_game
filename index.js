let board;
let boardWidth = 375;
let boardHeight = 667;
let context;

const WIDTH_MULTI = boardWidth / 360;

// bird
let birdWidth = 40 * WIDTH_MULTI; //TODO
let birdHeight = 40 * WIDTH_MULTI; //TODO
// let birdWidth = 34 * WIDTH_MULTI;
// let birdHeight = 24 * WIDTH_MULTI;

let birdX = boardWidth / 8;
let birdY = boardHeight / 2;
let birdImage;
let farp;

let birdImages = { normal: new Image(), clicked: new Image() };
birdImages.normal.src = './assets/out.png';
birdImages.clicked.src = './assets/outpuk.png';

let gameOver = false;
let score = 0;

const bird = {
  x: birdX,
  y: birdY,
  width: birdWidth,
  height: birdHeight,
};

// pipes
let pipeArray = [];
let pipeWidth = 64 * WIDTH_MULTI;
let pipeHeight = 512 * WIDTH_MULTI;
let pipeX = boardWidth;
let pipeY = 0;

let topHeightImage;
let bottomHeightImage;

// physics
let velocityX = -6;
let velocityY = 0; // bird jump speed;
// let gravity = 0.1; //TODO
let gravity = 0.25;

window.onload = function () {
  board = document.getElementById('game');
  board.width = boardWidth;
  board.height = boardHeight;

  // used to draw on the canvas
  context = board.getContext('2d');

  // draw background
  const background = new Image();
  background.src = './assets/flappybirdbg.png';

  background.onload = function () {
    context.drawImage(background, 0, 0, boardWidth, boardHeight);

    farp = {
      lvl_1: new Audio(),
      lvl_2: new Audio(),
      lvl_3: new Audio(),
      lvl_4: new Audio(),
      lvl_5: new Audio(),
    };
    farp.lvl_1.src = `./assets/farp_2.mp3`;
    farp.lvl_2.src = `./assets/farp_1.mp3`;
    farp.lvl_3.src = `./assets/farp_3.mp3`;
    farp.lvl_4.src = `./assets/farp_4.mp3`;
    farp.lvl_5.src = `./assets/farp_5.mp3`;

    birdImage = birdImages.normal;

    birdImage.onload = function () {
      context.drawImage(birdImage.src, bird.x, bird.y, bird.width, bird.height);
    };

    topHeightImage = new Image();
    topHeightImage.src = './assets/toppipe.png';
    bottomHeightImage = new Image();
    bottomHeightImage.src = './assets/bottompipe.png';
  };

  requestAnimationFrame(update);
  setInterval(placePipes, 1300); //TODO
  document.addEventListener('click', moveBird);

  function update() {
    requestAnimationFrame(update);

    if (gameOver) {
      context.fillStyle = '#FFF';
      context.font = '50px Arial';

      // Налаштування тіні
      context.shadowColor = 'rgba(0, 0, 0, 0.2)';
      context.shadowOffsetX = 4;
      context.shadowOffsetY = 4;
      context.shadowBlur = 5;

      context.fillText('GAME OVER', boardWidth / 9, 200);
      context.fillText(score, boardWidth / 2.1, boardHeight / 2);

      // Скидання параметрів тіні, щоб вони не вплинули на інший текст або малюнки
      context.shadowColor = 'transparent';
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 0;

      return;
    }

    context.clearRect(0, 0, boardWidth, boardHeight);
    context.drawImage(background, 0, 0, boardWidth, boardHeight);

    // bird
    velocityY += gravity;
    bird.y = Math.max(bird.y + velocityY, 0);
    context.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);

    if (bird.y >= boardHeight - bird.height) {
      gameOver = true;
    }

    // pipes
    pipeArray.forEach(pipe => {
      pipe.x += velocityX;
      context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

      if (!pipe.passed && bird.x > pipe.x + pipe.width) {
        pipe.passed = true;
        // there are two pipes for each gap
        score += 0.5;
      }

      if (isCollision(bird, pipe)) {
        gameOver = true;
      }
    });

    // clear pipes
    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
      pipeArray.shift();
    }

    // score
    context.fillStyle = '#FFF';
    context.font = '20px Arial';
    context.fillText(score, 15, 30);
  }

  function placePipes() {
    if (gameOver) {
      return;
    }

    let randomPipeY = pipeY - pipeHeight / 4 - Math.random() * (pipeHeight / 2);
    let openingSpace = boardHeight / 4;

    const topPipe = {
      img: topHeightImage,
      x: pipeX,
      y: randomPipeY,
      width: pipeWidth,
      height: pipeHeight,
      passed: false,
    };

    const bottomPipe = {
      img: bottomHeightImage,
      x: pipeX,
      y: randomPipeY + pipeHeight + openingSpace,
      width: pipeWidth,
      height: pipeHeight,
      passed: false,
    };

    pipeArray.push(topPipe, bottomPipe);
  }

  function moveBird() {
    velocityY = -3 - gravity; //TODO
    // velocityY = -6 - gravity;

    birdImage = birdImages.clicked;

    if (score <= 10) farp.lvl_1.play();
    if (score > 10 && score <= 20) farp.lvl_2.play();
    if (score > 20 && score <= 30) farp.lvl_3.play();
    if (score > 30 && score <= 40) farp.lvl_4.play();
    if (score > 40) farp.lvl_5.play();

    setTimeout(() => {
      birdImage = birdImages.normal;
    }, 50);

    if (gameOver) {
      gameOver = false;
      bird.y = birdY;
      pipeArray = [];
      score = 0;
    }
  }

  function isCollision(a, b) {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }
};

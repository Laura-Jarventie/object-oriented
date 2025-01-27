class Background {
  constructor(el) {
    this.el = el;
  }

  scrollSideway = function (distance) {
    document.getElementById("background").style.backgroundPosition = `${
      distance / 10
    }px 0`;
  };

  init = function () {
    const bg = document.createElement("div");
    bg.id = "background";
    bg.setAttribute("style", "z-index: -1");
    bg.style.top = "0";
    bg.style.left = "0";
    bg.style.backgroundImage = "url(img/bg.png)";
    bg.style.backgroundRepeatY = "no-repeat";
    bg.style.position = "fixed";
    bg.style.width = "100%";
    bg.style.height = "100%";

    this.el.appendChild(bg);
  };
}

class Bird {
  // blueprint to create objects of the same class
  /**
   *
   * @param {number} width decides the size of our bird
   * @param {DOMNode} el the place where we place the bird
   */
  constructor(width, el) {
    this.width = width;
    this.el = el;
    this.movingSpeed = 800 + Math.random() * 500;
  }

  fly = function () {
    console.log("flap flap");
    return "I can fly";
  };

  showYourself = function () {
    const newBird = document.createElement("img");

    this.birdId = "bird" + Math.random() * 10;

    newBird.id = this.birdId;
    newBird.src = "img/bird.png";
    newBird.width = this.width;
    newBird.style.position = "fixed";
    newBird.style.top = 100 + Math.random() * 100 + "px";

    this.initialLeftPosition = Math.random() * 500;

    newBird.style.left = this.initialLeftPosition + "px";

    this.el.appendChild(newBird);
  };

  scrollSideway = function (distance) {
    this.initialLeftPosition += distance / this.movingSpeed;
    document.getElementById(
      this.birdId
    ).style.left = `${this.initialLeftPosition}px`;
  };
}

const background = new Background(document.body);
background.init();

birds = [];
for (let i = 0; i < 10; i++) {
  birds[i] = new Bird(Math.random() * 300, document.body);
  birds[i].showYourself();
}

document.addEventListener("scroll", (e) => {
  background.scrollSideway(window.pageYOffset);
  for (let i = 0; i < 10; i++) {
    birds[i].scrollSideway(window.pageYOffset);
  }
  for (let i = 0; i < 10; i++) {
    putket[i].movePipes(window.pageYOffset);
  }
});

class Pipe {
  // blueprint to create objects of the same class
  /**
   *
   * @param {number} width decides the size of our pipes
   * @param {DOMNode} el the place where we place the pipe
   */
  constructor(width, el) {
    this.width = width;
    this.el = el;
    this.movingSpeed = 1000 + Math.random() * 500;
  }

  showPipe = function () {
    const newPipe = document.createElement("img");

    this.pipeId = Math.random() * 10;

    newPipe.id = this.pipeId;
    newPipe.src = "img/pipe.png";
    newPipe.width = this.width;
    newPipe.style.position = "fixed";

    newPipe.style.bottom = "0px";

    this.initialLeftPosition = Math.random() * 1500;

    newPipe.style.left = this.initialLeftPosition + "px";

    if (newPipe.id < 5) {
      newPipe.style.top = "0px";
      newPipe.style.transform = "rotate(180deg)";
    }

    this.el.appendChild(newPipe);
  };

  movePipes = function (distance) {
    this.initialLeftPosition -= distance / this.movingSpeed;
    document.getElementById(
      this.pipeId
    ).style.left = `${this.initialLeftPosition}px`;
  };
}

putket = [];
for (let i = 0; i < 10; i++) {
  putket[i] = new Pipe(Math.random() * 100, document.body);
  putket[i].showPipe();
}

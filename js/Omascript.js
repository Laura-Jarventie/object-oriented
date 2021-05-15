class Bird {
  /**
   *
   * @param {number} width decides the size of our bird
   * @param {DOMNode} el the place where we place the bird
   */
  constructor(width, el) {
    this.width = width;
    this.el = el;
    this.movingSpeed = 500 + Math.random() * 500;
    // constructor(legs, wings) {
    // this.legs = legs;
    //this.wings = wings;
  }

  fly = function () {
    console.log("flap flap");
    return "I can fly";
  };

  showYourself = function () {
    const newBird = document.createElement("img");
    //this.birdId = "bird" + Math.random() * 10;
    //newBird.id = "bird" + Math.random() * 10;
    newBird.id = this.birdId;
    newBird.src = "img/bird.png";
    newBird.width = this.width;
    newBird.style.position = "fixed";
    newBird.style.top = 100 + Math.random() * 100 + "px";
    this.initialLeftPosition = Math.random() * 500;
    newBird.style.left = this.initialLeftPosition + "px";
    this.el.appendChild(newBird);
    //newBird.style.top = this.el.appendChild(newBird);
    //console.log(this);
    //console.log(`Hi I have ${this.legs} legs and ${this.wings} wings`);
  };
  scrollSideway = function (distance) {
    this.initialLeftPosition += distance / this.movingSpeed;
    document.getElementById(
      this.birdId
    ).style.left = `${this.initialLeftPosition}px`;
  };
}

birds = [];
for (let i = 0; i < 50; i++) {
  birds[i] = new Bird(Math.random() * 500, document.body);
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

const bird1 = new Bird(Math.random() * 500, document.body);
console.log(bird1);
console.log(bird1.fly());

bird1.showYourself();

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
    bg.setAttribute("style", "z-index-1:");
    bg.style.top = "0";
    bg.style.left = "0";
    this.el.style.backgroundImage = `url(img/bg.png)`;
    bg.style.backgroundRepeatY = "no-repeat";
    bg.style.position = "fixed";
    bg.style.width = "100%";
    bg.style.height = "100%";

    this.el.appendChild(bg);
  };
}

const background = new Background(document.body);
background.init();

class Pipe {
  /**
   *
   * @param {number} width
   * @param {DOMNode} el
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

    newPipe.style.bottom = "434px";

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

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

  scrollSideway = function (distance) {
    this.initialLeftPosition += distance / this.movingSpeed;
    document.getElementById(this.birdId).style.left;
  };

  showYourself = function () {
    const newBird = document.createElement("img");
    this.birdId = "bird" + Math.random() * 10;
    newBird.id = "bird" + Math.random() * 10;
    newBird.src = "img/bird.png";
    newBird.width = this.width;
    newBird.style.position = "fixed";
    newBird.style.top = this.el.appendChild(newBird);
    //console.log(this);
    //console.log(`Hi I have ${this.legs} legs and ${this.wings} wings`);
  };
}

birds = [];
for (let i = 0; i < 50; i++) {
  birds[i] = new Bird(Math.random() * 500, document.body);
  birds[i].showYourself();
}

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

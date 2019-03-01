// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
  constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.height * this.width)
    );
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(int) {
    super(int);
    this.length = int;
    this.width = int;
    this.height = int;
  }
}

const cube = new CubeMaker(10);

console.log(cube.volume()); // 1000
console.log(cube.surfaceArea()); // 600

// Alternately, with new methods:

class CubeMakerTwo extends CuboidMaker {
  constructor(int) {
    super(int);
    this.edge = int;
  }
  volume() {
    return this.edge ** 3;
  }
  surfaceArea() {
    return this.edge ** 2 * 6;
  }
}

const cubeTwo = new CubeMakerTwo(15);

console.log(cubeTwo.volume()); // 3375
console.log(cubeTwo.surfaceArea()); // 1350

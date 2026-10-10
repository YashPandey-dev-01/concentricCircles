const sketch = require("./sketch");

function loop(world) {
  while (sketch.running()) {
    sketch.draw(world);
  }
}

function main() {
  const world = {
    HEIGHT: 1000,
    WIDTH: 1000,
    TITLE: "Concentric Circles",
    FPS: 100,
    cf: 0,
    numOfRings: 20,

    colorPalette: {
      ir: { r: 0, g: 80, b: 40, a: 255 },
      or: { r: 0, g: 191, b: 255, a: 255 },
      bg: { r: 22, g: 0, b: 43, a: 255 }
    }
  };

  sketch.setup(world);
  loop(world);
  sketch.teardown();
}

main();
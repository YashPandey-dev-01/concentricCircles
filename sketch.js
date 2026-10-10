const r = require("raylib");

function running() {
  return !r.WindowShouldClose();
}

function setup(world) {
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(world.WIDTH, world.HEIGHT, world.TITLE);
  r.SetTargetFPS(world.FPS)
}

function drawInnerRing(world, n) {
  const innerRadius = 30 * n + 10 + world.cf % world.WIDTH;
  const outerRadius = innerRadius + 20;
  const centre = {
    x: world.WIDTH / 2,
    y: world.HEIGHT / 2
  }

  r.DrawRing(centre, innerRadius, outerRadius, 0, 360, 200, world.colorPalette.or);
}

function drawOuterRing(world, n) {
  const innerRadius = world.HEIGHT - n * 30 - world.cf % world.WIDTH;
  const outerRadius = innerRadius + 20;
  const centre = {
    x: world.WIDTH / 2,
    y: world.HEIGHT / 2
  }

  r.DrawRing(centre, innerRadius, outerRadius, 0, 360, 200, world.colorPalette.ir);
}

function drawIllusion(world) {
  for (let i = 0; i < world.numOfRings; i++) {
    drawInnerRing(world, i);
    drawOuterRing(world, i);
  }
}

function draw(world) {
  r.BeginDrawing();
  r.ClearBackground(world.colorPalette.bg);

  drawIllusion(world);
  world.cf++;

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  draw,
  teardown,
};
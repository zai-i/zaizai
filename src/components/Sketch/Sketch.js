export default function sketch(p5) {
  let baseCount, baseSize, c, n, off, x, y, px, py;

  p5.setup = function () {
    p5.createCanvas(275, 275);
    p5.colorMode(p5.HSB, 100);

    p5.noFill();
    p5.strokeWeight(1);
    p5.frameRate(20);
    p5.init();
  };

  p5.draw = function () {
    p5.push();

    if (p5.mouseIsPressed) {
      p5.translate(p5.width / 2, p5.height / 2);

      x = p5.width / 2 - p5.mouseX;
      y = p5.height / 2 - p5.mouseY;
      px = p5.width / 2 - p5.pmouseX;
      py = p5.height / 2 - p5.pmouseY;
      c = p5.floor(p5.noise(n) * 4) * baseCount * 2;

      p5.push();
      const theta = 6.28318530717958647693 / c;

      for (var i = 0; i < c; i++) {
        p5.line(px, py, x, y);
        p5.line(px, -py, x, -y);
        p5.rotate(theta);
      }
      p5.pop();
    }
    n += off;
    p5.pop();
  };

  p5.mousePressed = function () {
    p5.stroke(p5.floor(p5.random(10)) * 10, 90, 90, 20);
    p5.strokeWeight(baseSize);
    baseSize = baseSize - 10;
  };

  p5.init = function () {
    p5.blendMode(p5.BLEND);
    n = p5.random(10);
    off = 0.03;
    baseCount = p5.floor(p5.random(3, 9));
    baseSize = 3;
  };
}

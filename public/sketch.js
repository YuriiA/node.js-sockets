let socket;

function setup() {
  createCanvas(960, 960);
  background(51);
  //   socket = io.connect("http://192.168.0.110:3000"); //multi-device
  socket = io.connect("localhost:3000"); // same pc
  socket.on("mouse", newDrawing);
}

function newDrawing(data) {
  noStroke();
  fill(255, 0, 100);
  ellipse(data.x, data.y, 10, 10);
}

function mouseDragged() {
  const data = {
    x: mouseX,
    y: mouseY,
  };
  socket.emit("mouse", data);
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 10, 10);
}

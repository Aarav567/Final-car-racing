var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1,car2, car1Img, car2,Img;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img = loadImage("assets/title.png");
  car2Img = loadImage("assets/title.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

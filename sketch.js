var canvas;
var contestantCount, database, quiz, question, contestant;
var gameState =0;

function setup(){
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  database = firebase.database();
  
}


function draw(){
  background("pink");

  quiz.getState();
  quiz.start();
}


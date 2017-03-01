function Ball(x,y) {
  this.position = {x: x, y: y};
  
  this.draw = function() {
    this.position.x++;
    this.position.y++;
    fill(random(255),random(255),random(255));
    noStroke();
    ellipse(this.position.x,this.position.y,200,200);
  }
}

var balls = [];
function mouseDragged() {
var ball = new Ball (mouseX,mouseY);
balls.push(ball);
}

function draw () {
 for(var i = 0; i < balls.length; i++){
   balls[i].draw();
 }
}

function setup(){
  resizeCanvas(1000,1000)
}

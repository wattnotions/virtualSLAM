

let skynet;
let dx, dy;
table_offset = 200;
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	background(255);
	
	
	drawTable();
	
	
	skynet = new Robot();
	
}


x = 100;
function draw() {
	background(255);
	drawTable();
	
	
	skynet.display();
	skynet.forward(1);
  
	
	
}

class Robot {
	
	
  constructor() {
    this.x = random(table_offset, windowWidth-table_offset);
    this.y = random(table_offset, windowHeight-table_offset);
		this.angle = random(0,360);
    this.width = 30;
		this.length = 10;
		
    this.speed = 1;
  }

  forward(speed){
		dx = cos(this.angle)*speed;
		dy = sin(this.angle)*speed;
		this.x = this.x+dx;
		this.y = this.y+dy;
	}

  display() {
		push()
		translate(this.x, this.y)
		rotate(this.angle);
    rect(0, 0, this.width, this.length);
		pop()
  }
}

function drawTable(){
	//draw table
	rectMode(CENTER);
	angleMode(DEGREES);
	stroke(0);
	strokeWeight(10);
	rect(windowWidth/2, windowHeight/2, windowWidth-table_offset, windowHeight-table_offset);
	
}




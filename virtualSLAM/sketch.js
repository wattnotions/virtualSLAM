

let skynet;
var bots = [];
table_offset = 200;
let start_func = 0;
let end_time = 0;
function setup() {
	
	createCanvas(windowWidth, windowHeight);
	background(255);
	
	
	drawTable();
	
	
	
	
}


x = 100;
function draw() {
	background(255);
	drawTable();
	
	for (var i = 0; i < bots.length; i ++ ) { // Whatever the length of that array, update and display all of the objects.
    bots[i].autopilot();
    bots[i].display();
  }

	

	
	
}

class Robot {
	
	
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
		this.angle = random(0,360);
    this.width = 30;
		this.length = 10;
		this.ir_val = 255;
    this.speed = 1;
		this.state = 0;
		this.dx = 0;
		this.dy = 0;
		
  }

  forward(speed = 1){
		this.dx = cos(this.angle)*speed;
		this.dy = sin(this.angle)*speed;
		this.x = this.x+this.dx;
		this.y = this.y+this.dy;
	}
	
	reverse(speed = 1){
		this.dx = cos(this.angle)*speed;
		this.dy = sin(this.angle)*speed;
		this.x = this.x-this.dx;
		this.y = this.y-this.dy;
	}
	
	autopilot(STATE){
		
		
		
		switch(this.state){
			case 0:
				
				if (this.ir_sensor() == 0) { this.forward(7);}
				else{
					this.setState(1);
				}
				break;
			  
			case 1:
				
				this.reverse(7);
				setTimeout(this.setState.bind(this,2), 300);
				
				break;
				
				
			case 2:
				
				this.turnLeft();
				setTimeout(this.setState.bind(this,0), 200);
				break;
				
			
		}
		
		
		
	}
	
	stop(){
		//do nothing
		
		
	}
	
	setState(state){
		
		this.state = state;
		
	}

  display() {
		push()
		translate(this.x, this.y)
		rotate(this.angle);
		strokeWeight(1);	
    rect(0, 0, this.width, this.length);
		pop()
		
  }
	
	ir_sensor(){
		this.ir_val = get(this.x, this.y)[0];
		
		if (this.ir_val <50){
			return 1; //dark line detected
		}
		else { return 0};
	}
	
	turnLeft(time_ms){
		
			this.angle += 3;
		
	}
	
}

function drawTable(){
	//draw table
	rectMode(CENTER);
	angleMode(DEGREES);
	noFill();
	stroke(0);
	strokeWeight(10);
	rect(windowWidth/2, windowHeight/2, windowWidth-table_offset, windowHeight-table_offset);
	
}

function mouseClicked() {
	
    // A new ball object
  var b = new Robot(mouseX,mouseY); // Make a new object at the mouse location.
  bots.push(b);
	
  return false;
}




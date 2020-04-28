

let skynet;
let dx, dy;
table_offset = 200;
let start_func = 0;
let end_time = 0;
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
	skynet.autopilot();
	
	
	
	//setTimeout(skynet.turnLeft(),0);
	//skynet.turnLeft();
	//skynet.forward(3);
//	skynet.ir_sensor();
  
	
	
}

class Robot {
	
	
  constructor() {
    this.x = random(table_offset, windowWidth-table_offset);
    this.y = random(table_offset, windowHeight-table_offset);
		this.angle = 90;
    this.width = 30;
		this.length = 10;
		this.ir_val = 255;
    this.speed = 1;
		
		this.state = 0;
		
  }

  forward(speed = 1){
		dx = cos(this.angle)*speed;
		dy = sin(this.angle)*speed;
		this.x = this.x+dx;
		this.y = this.y+dy;
	}
	
	reverse(speed = 1){
		dx = cos(this.angle)*speed;
		dy = sin(this.angle)*speed;
		this.x = this.x-dx;
		this.y = this.y-dy;
	}
	
	autopilot(STATE){
		
		
		
		switch(this.state){
			case 0:
				console.log("IN CASE 0");
				this.forward();
				if( this.ir_sensor() == 1) { this.setState(1)}
				break;
			case 1:
				console.log("IN CASE 1");
				stop();
				this.state = -1;
				setTimeout(this.setState.bind(this,2), 1000);
				break;
			  
			case 2:
				console.log("IN CASE 2");
				this.reverse();
				setTimeout(this.setState.bind(this,3), 1000);
				
				break;
				
				
			case 3:
				console.log("IN CASE 3");
				this.turnLeft();
				setTimeout(this.setState.bind(this,0), 1000);
				break;
				
			
		}
		
		
		
	}
	
	stop(){
		//do nothing
		
		let i;
		i+=1;
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
		
			this.angle += 1;
		
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
  
	start_func = 1;
	end_time = millis() + 2000;
	
  return false;
}




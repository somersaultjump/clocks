function pillars() {
	// Debugging
	// orbitControl();		
	// stroke(180);

	// noStroke();
	stroke(50);
	fill(40,40,250,200);
	

	if (hour() === 0 || 
		hour() === 6 ||
		hour() === 12 ||
		hour() === 18) {
		rotateZ(PI);
	} else if (hour() === 1 || 
		hour() === 7 ||
		hour() === 13 ||
		hour() === 19) {
		rotateZ(5*PI/6);
	} else if (hour() === 2 || 
		hour() === 8 ||
		hour() === 14 ||
		hour() === 20) {
		rotateZ(2*PI/3);
	} else if (hour() === 3 || 
		hour() === 9 ||
		hour() === 15 ||
		hour() === 21) {
		rotateZ(PI*1.5);
	} else if (hour() === 4 || 
		hour() === 10 ||
		hour() === 16 ||
		hour() === 22) {
		rotateZ(PI/1.5);
	} else if (hour() === 5 || 
		hour() === 11 ||
		hour() === 17 ||
		hour() === 23) {
		rotateZ((11*PI)/6);
	}

	/*
	PI = 6
	5*PI/6 = 5
	2*PI/3 = 4
	PI/2 = 3
	PI/3 = 2
	PI/6 = 1
	PI*2 = 12
	11*PI/6 = 11
	5*PI/3 = 10
	3*PI/2 = 9
	4*PI/3 = 8
	7*PI/6 =7

	*/

	console.log(hour());

	// rotateX(0);
	rotateY(millis()/2700);
	// rotateZ(0);

	// translate(0,0);
	// cylinder(12,180,6);

	for (var i = 0; i < 12; i++) {
		push();
		rotate(TWO_PI * i / 12);
		translate(0,180);
		rotateY(millis()/1800);
		cylinder(12,180,6);
		pop();
	}


}
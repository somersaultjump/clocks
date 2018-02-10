function pillars() {
	// Debugging
	// orbitControl();		
	// stroke(180);

	// noStroke();
	stroke(50);
	fill(40,40,250,200);
	

// event callback is a way better way to do the time.

	/*
	PI*2     = 12
	PI/6     = 1
	PI/3     = 2
	PI/2     = 3
	2*PI/3   = 4
	5*PI/6   = 5
	PI       = 6
	7*PI/6   = 7
	4*PI/3   = 8
	3*PI/2   = 9
	5*PI/3   = 10
	11*PI/6  = 11
	*/

switch(hour()) {
	case 0:
	case 12:
		rotateZ(PI*2);
		break;
	case 1:
	case 13:
		rotateZ(PI/6);
		break;
	case 2:
	case 14:
		rotateZ(PI/3);
		break;
	case 3:
	case 15:
		rotateZ(PI/2);
		break;
	case 4:
	case 16:
		rotateZ(2*PI/3);
		break;
	case 5:
	case 17:
		rotateZ(5*PI/6);
		break;
	case 6:
	case 18:
		rotateZ(PI);
		break;
	case 7:
	case 19:
		rotateZ(7*PI/6);
		break;
	case 8:
	case 20:
		rotateZ(4*PI/3);
		break;
	case 9:
	case 21:
		rotateZ(3*PI/2);
		break;
	case 10:
	case 22:
		rotateZ(5*PI/3);
		break;
	case 11:
	case 23:
		rotateZ(11*PI/6);
		break;
} 


	console.log(hour());

	// rotateX(0);
	rotateY(second()*60/360);
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
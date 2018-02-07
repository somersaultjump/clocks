function pillars() {
	// Debugging
	// orbitControl();		
	// stroke(180);

	// noStroke();
	stroke(50);
	fill(40,40,250,200);
	
	// rotateX(0);
	rotateY(millis()/1800);
	// rotateZ(0);

	// translate(0,0);
	// cylinder(12,180,6);

	// this.updateX = function(x) {
	// 	var rotX = x;
	// }


	for (var i = 0; i < 12; i++) {
		push();
		rotate(TWO_PI * i / 12);
		translate(0,180);
		rotateY(millis()/1800);
		cylinder(12,180,6);
		pop();
	}

}
function rotateTest() {

	// translate(width/2, height/2);
	for (var i = 0; i < 12; i++) {
		push();
		rotate(TWO_PI * i / 12);
		translate(0,180);
		cylinder(12,180,6);
		pop();
	}
}
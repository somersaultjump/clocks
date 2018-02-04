function psClock() {

	
	orbitControl();
	fill(80,80,250,200);
	noStroke();

	directionalLight(250,250,250,-width,height, -500);

	// normalMaterial(0,0,150);
	// ambientMaterial(80,80,250);
	// specularMaterial(80,80,250);

	rotateY(millis()/1000);
	cylinder(15,160,6);




}
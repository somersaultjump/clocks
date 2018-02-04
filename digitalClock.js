function digitalClock() {
	var hr = hour();
	var mn = (minute()<10?'0':'') + minute();
	var sc = (second()<10?'0':'') + second();

	fill(255);
	noStroke();
	textSize(32);
	textAlign(CENTER,CENTER);
	text(hr + ':' + mn + ':' + sc, width/2, height/4);
	// console.log(element.text.value.length);
}
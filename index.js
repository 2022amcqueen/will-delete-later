function setup() {
	createCanvas(600, 600, WEBGL)
}

function draw() {
	let rate = .01

	background(200)

	//normalMaterial()


	rotateX(frameCount * rate)
	rotateY(frameCount * rate)
	rotateZ(frameCount * rate)
	
	for(let x = 0; x < 10; x += 50) {
		for(let y = 0; y < 10; y += 50) {
			box(50, 50, 50)
			
			push()
				translate(x, y, 0)
			pop()
		}
	}

	//translate(width / 2, 0, height / 2)
}

var game = new Phaser.Game(800, 400, Phaser.AUTO, 'quantitybar', { preload: preload, create: create, update: update });

function preload() {
	game.load.image("track", "assets/quantitybar/horizontal/track.png");
	game.load.spritesheet('bar', 'assets/quantitybar/horizontal/bar.png', 260, 32);

	game.load.image("vtrack", "assets/quantitybar/vertical/track.png");
	game.load.spritesheet('vbar', 'assets/quantitybar/vertical/bar.png', 32, 260);

	game.load.image("add", "assets/quantitybar/add.png");
	game.load.image("subtract", "assets/quantitybar/subtract.png");
}

var healthbar,
	healthbarText,
	vhealthbar,
	vhealthbarText,
	rhealthbar,
	rhealthbarText,
	rvhealthbar,
	rvhealthbarText,
	decreaseHealth,
	increaseHealth,
	vdecreaseHealth,
	vincreaseHealth,
	rdecreaseHealth,
	rincreaseHealth,
	rvdecreaseHealth,
	rvincreaseHealth;

function create() {

	// Create a quantitybar starting at 50.
	healthbar = new uiWidgets.QuantityBar(
		game,
		{"x": 50, "y": 10},
		{"startValue": 50, maxValue: 100},
		false,
		false,
		"track",
		"bar",
		{'duration': 400, 'ease': Phaser.Easing.Quadratic.Out}
	);
	
	healthbarText = game.add.text(50, 50, healthbar.valueRange.minValue, {
        font: "65px Arial",
        fill: "#ff0044",
        align: "center"
    });

	var lessHealth = game.add.button(150, 50, 'subtract', decreaseHealth, this);
	var moreHealth = game.add.button(200, 50, 'add', increaseHealth, this);

	// Create a reverse quantitybar starting at 50.
	rhealthbar = new uiWidgets.QuantityBar(
		game,
		{"x": 400, "y": 10},
		{"startValue": 30, maxValue: 100},
		false,
		true,
		"track",
		"bar",
		{'duration': 400, 'ease': Phaser.Easing.Quadratic.Out}
	);
	
	rhealthbarText = game.add.text(350, 50, healthbar.valueRange.minValue, {
        font: "65px Arial",
        fill: "#ff0044",
        align: "center"
    });

	var rlessHealth = game.add.button(450, 50, 'subtract', rdecreaseHealth, this);
	var rmoreHealth = game.add.button(500, 50, 'add', rincreaseHealth, this);
	
	// Create a vertical quantitybar starting at 50.
	vhealthbar = new uiWidgets.QuantityBar(
		game,
		{"x": 50, "y": 130},
		{"startValue": 32, maxValue: 100},
		true,
		false,
		"vtrack",
		"vbar",
		{'duration': 400, 'ease': Phaser.Easing.Quadratic.Out}
	);

	vhealthbarText = game.add.text(150, 150, vhealthbar.valueRange.minValue, {
        font: "65px Arial",
        fill: "#ff0044",
        align: "center"
    });

	var vlessHealth = game.add.button(150, 250, 'subtract', vdecreaseHealth, this);
	var vmoreHealth = game.add.button(200, 250, 'add', vincreaseHealth, this);
	
	// Create a reverse vertical quantitybar starting at 50.
	rvhealthbar = new uiWidgets.QuantityBar(
		game,
		{"x": 250, "y": 130},
		{"startValue": 30, maxValue: 100},
		true,
		true,
		"vtrack",
		"vbar",
		{'duration': 400, 'ease': Phaser.Easing.Quadratic.Out}
	);

	rvhealthbarText = game.add.text(250, 150, rvhealthbar.valueRange.minValue, {
        font: "65px Arial",
        fill: "#ff0044",
        align: "center"
    });

	var vlessHealth = game.add.button(250, 250, 'subtract', rvdecreaseHealth, this);
	var vmoreHealth = game.add.button(300, 250, 'add', rvincreaseHealth, this);
	
}

function update() {
	healthbarText.setText(healthbar.valueRange.getCurrentValue());
	vhealthbarText.setText(vhealthbar.valueRange.getCurrentValue());
	rhealthbarText.setText(rhealthbar.valueRange.getCurrentValue());
	rvhealthbarText.setText(rvhealthbar.valueRange.getCurrentValue());
}

function increaseHealth() {
	healthbar.adjustValue(10);
}

function decreaseHealth() {
	healthbar.adjustValue(-10);
}

function vincreaseHealth() {
	vhealthbar.adjustValue(1);
}

function vdecreaseHealth() {
	vhealthbar.adjustValue(-1);
}

function rincreaseHealth() {
	rhealthbar.adjustValue(10);
}

function rdecreaseHealth() {
	rhealthbar.adjustValue(-10);
}

function rvincreaseHealth() {
	rvhealthbar.adjustValue(10);
}

function rvdecreaseHealth() {
	rvhealthbar.adjustValue(-10);
}

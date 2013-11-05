(function () {
	var dualShock = require('./../lib/dualShock.js');

	var dualShock3 = dualShock();

	//for a client implementation we do not need this, this is only to test the inputs.
	var controllerConfiguration = require('./../controllerConfigurations/dualShock3.js');

	dualShock3.on('left:move', function(data) {
		console.log('left Moved');
		console.log(data);
	});
	dualShock3.on('right:move', function(data) {
		console.log('right Moved');
		console.log(data);
	});
	dualShock3.on('connected', function(data) {
		console.log('connected');
	});

	dualShock3.on('error', function (data) {
		console.log(data);
	});

	pressed = function (data) {
		console.log(data + ": pressed");
	};
	released = function (data) {
		console.log(data + ": released");
	};
	analog = function (data) {
		console.log(data + ": analog");
	};
	//subscribe to all the buttons:
	for (var button in controllerConfiguration.buttons) {
		this.controller.on(button + ":pressed", pressed);
		this.controller.on(button + ":release", released);
		this.controller.on(button+":analog", analog);
	}

	//once everything is ready we call connect()
	dualShock3.connect();
}());

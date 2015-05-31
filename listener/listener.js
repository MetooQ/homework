function Notice() {
	this.listener = {};
	this.on = function (str, fn) {
		var arr = this.listener[str];
		if (!arr) {
			arr = this.listener[str] = [];
		}
		arr.push(fn);
	}
	
	this.send = function (str) {
		var arr = this.listener[str];
		for(var i = 0; i < arr.length; i++){
			arr[i]();
		}
	}
}

var notice = new Notice();

var a = function () {
	console.log(1);
};

function b() {
	console.log(2);
}

notice.on("a", b);   
notice.on('a', a);
notice.on("a", function () {   
    console.log(3);   
}); 

notice.send("a");   
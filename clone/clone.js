function clone(a) {
	var b;
	var type = Object.prototype.toString.call(a).slice(8, -1);
	switch (type) {
		case 'Null':
		case 'Undefined':
		case 'String':
		case 'Number':
		case 'Boolean':
		case 'Function':
			b = a;
			break;
		case 'Array':
			b = arrClone(a);
			break;
		case 'Object':
			if (isPlainObj(a)) {
				b = objClone(a);
			} else {
				alert("not a plain object");
			}
			break;
		case 'Date':
			b = new Date(a);
			break;
		case 'RegExp':
			b = new RegExp(a);
			break;
		default:
			alert("can't clone");
	}

	return b;
}


function arrClone(a) {
	//	var b = a.slice(0);
	//	
	//	//另一种方法
	//	//b = a.concat();

	var b = [];
	for (var i = 0; i < a.length; i++) {
		b[i] = clone(a[i]);
	}
	return b;
}

function objClone(a) {
	var b = {};
	for (var key in a) {
		if (a.hasOwnProperty(key)) {
			b[key] = clone(a[key]);
		}
	}
	return b;
}

function isPlainObj(obj) {
	if (typeof obj !== 'object' || obj.nodeType || obj === obj.window) {
		return false;
	}
	if (obj.constructor && !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
		return false;
	}
	return true;
}


//测试用例
var a = {
	test: [{test:'aaa'}, 'aaa', function a(){}, null, 3]
}

var b = clone(a);

a.test[1] = 'bbb';
a.test[0].test = 'bbb';

console.log(a);
console.log(b);
//{ test: [ { test: 'bbb' }, 'bbb', [Function: a], null, 3 ] }
//{ test: [ { test: 'aaa' }, 'aaa', [Function: a], null, 3 ] }

function anchor(url) {
	var index = url.indexOf("#") + 1;
	var str = url.substr(index);
	var arr = str.split("/");
	
	var name = arr[0];
	var args = [];
	for(var i=1; i<arr.length; i++){
		args[i-1] = arr[i];
	}
	if(typeof name === 'function'){
		name.apply(null,args);
	}else{
		alert(name + "is not a function~");
	}
}

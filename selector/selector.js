function $(str){
	var arr = [];	
	if(str.indexOf("#") == 0){
		var id = str.substr(1);
		arr[0] = document.getElementById(id);
	}else{
		var classArr = str.split(" ");
		var className = [];
		for (var i = 0; i < classArr.length; i++){
			className[i] = classArr[i].substr[1];			
		}
		arr = document.getElementsByClassName(className.join(" "));		
	}
	return arr;
	
}
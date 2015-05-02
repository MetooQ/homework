function addClass(id, str) {

	var addArr = str.split(" ");

	if (id.classList) {
		for (var i = 0; i < addArr.length; i++) {
			id.classList.add(addArr[i]);
		}
	} else {
		var className = id.className;
		var space = [" ", " "];
		className = space.join(className);
		for (var i = 0; i < addArr.length; i++) {
			addArr[i] = space.join(addArr[i]);
			if (className.indexOf(addArr[i]) == -1) {
				className.concat(addArr[i]);
			}
		}
		id.className = className;
	}

}


function removeClass(id, str) {
	var removeArr = str.split(" ");

	if (id.classList) {
		for (var i = 0; i < removeArr.length; i++) {
			id.classList.remove(removeArr[i]);
		}
	} else {
		var className = id.className;

		for (var i = 0; i < removeArr.length; i++) {
			className.replace(removeArr[i], "");
		}

		id.className = className;
	}

}
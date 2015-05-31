$(".btn").click(function () {
	if($(this).data('expand')){
		$(".drop-down").hide();
		$(this).data('expand', false);
	}else{
		$(".drop-down").show();
		$(this).data('expand', true);
	}
});




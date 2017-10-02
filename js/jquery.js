

$(document).ready(function() {
	$(function() {
    $(".brand-item").hover(
    	function() {
        	$(this).addClass("brand-hover");
    	},
    	function() {
    		$(this).removeClass("brand-hover");
    	});
	});

	$(function() {
		var currentYear = (new Date()).getFullYear();
		$(".date-copyright").text(currentYear)
	});
});

;
(function($) {
	var moreOptionBtn = $('.more-option');
	var secondForm = $('.second-form');
	var serchic = $('.serch-ic');
	var moresearch = $('.more-search');

	moreOptionBtn.on("click", function(e) {

		if ($(e.target).text() === "– More option") {
			console.log("мм");
			$(e.target).text("+ More option");
		} else {
			console.log("неа");
			$(e.target).text("– More option");
		}

		secondForm.slideToggle(200);

	});

	serchic.on("click", function(e) {

		moresearch.slideToggle(200);

	});



})(jQuery);
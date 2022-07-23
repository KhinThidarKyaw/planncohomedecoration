$(document).ready(function(){
	// Start Header

	// Start nav bar
	// for bugger
	$(".navbuttons").click(function(){
		$(this).toggleClass("crossxs");
	});

	// for nav
		$(window).scroll(function(){
			let getscrolltop = $(this).scrollTop();
			// console.log(getscrolltop);

			if(getscrolltop >= 200){
				$(".navbar").addClass("navmenus");
			}else{
				$(".navbar").removeClass("navmenus");
			}
		});

	// End nav bar
	// End Header

	// Start Property
	$(".properylists").click(function(){
		// for active item
		$(this).addClass("activeitems").siblings().removeClass("activeitems");

		// for filter
		let getattrvalue = $(this).attr("data-filter");
		// console.log(getattrvalue);

		if(getattrvalue === "all"){
			$(".filters").show("slide",500);
		}else{
			$(".filters").hide();
			$(".filters").not("."+getattrvalue).hide("slide",500);
			$(".filters").filter("."+getattrvalue).show("slide",500);
		}
	});

	// for image overlay or lightbox2
	lightbox.option({
		showImageNumberLabel:false
	});

	// End Property

	// Start Adv Section
	$(window).scroll(function(){
		const getscrolltop = $(this).scrollTop();

		if(getscrolltop >= 900){
			$(".advimages").addClass("fromlefts");
			$(".advtexts").addClass("fromrights");
		}else{
			$(".advimages").removeClass("fromlefts");
			$(".advtexts").removeClass("fromrights");
		}
	});
	// End Adv Section
});
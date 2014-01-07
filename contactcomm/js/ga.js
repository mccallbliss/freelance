$(document).ready(function(){

	<!-- // VARIABLES -->

	var navs = ['about','towers','contact'];

	var obj = $( "#tower_list li" );
	var towers = $.makeArray( obj );

	<!-- // NAVIGATIONAL HOVER --> 

	$(".box").hover(function(){
		$(this).animate({  
			'background-position-x': '-215px',
  			'background-position-y': '0',
		}, 300).css({'color':'black'})}, function(){
		$(this).animate({
			'background-position-x': '0',
  			'background-position-y': '0',
		}, 300).css({'color':'white'});
	});

	<!-- // LOGO HOVER -->

	$("#header img").hover(function(){
		$(this).animate({
			'opacity':'.6'
		}, 300)}, function(){
		$(this).animate({
			'opacity':'1'
		}, 300);
	});

	<!-- // PAGE SCROLLING -->

	$("a[href='#header']").click(function() {
		// scroll user to top of page
		$('#main').show(1000);
  		$("html, body").animate({ scrollTop: 0 }, 1000);
  		// hide all sections after scrolling
  		hideAllSections();
  			return false;
	});

	$("a[href='#about']").click(function() {
		// reveal section of page
		$('#about').show(1000);
		if ($('#slides').hasClass("hidden")) {
			console.log("hidden");
		}
		// scroll to page section
  		$("html, body").animate({ scrollTop: $('#about').offset().top }, 1000);
  		$('#main').hide(1000);
  			return false;
	});

	$("a[href='#towers']").click(function() {
		// reveal section of page
		$('#towers').show(1000);
		// scroll to page section
  		$("html, body").animate({ scrollTop: $('#towers').offset().top }, 1000);
  		$('#main').hide(1000);
  			return false;
	});

	$("a[href='#contact']").click(function() {
		// reveal section of page
		$('#contact').show(1000);
		// scroll to page section
  		$("html, body").animate({ scrollTop: $('#contact').offset().top }, 1000);
  		$('#main').hide(1000);
  		  	return false;
	});

	function hideAllSections() {
		var curid;
		for (var i = 0; i < navs.length; i++) {
			curid = "#" + navs[i];
			$(curid).hide(1000);
		}
	}

	<!-- // TOWER DROP DOWNS -->

	$( "#tower_list li" ).each(function( index) {
		$(this).click(function(){
			var id = "#" + this.id + " .descrip";
			console.log(id);
		  	if ( $( id ).is( ":hidden" ) ) {
		    	$( id ).slideDown(1000);
		  	} else {
		    	$( id ).hide(1000);
		  	}
		});
	});

});
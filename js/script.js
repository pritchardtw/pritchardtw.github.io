$(document).ready(function(){
	console.log("Loaded Document");

	var $root = $('html, body');

    $("li.nav-item").mouseover(function(){
        $(this).stop().animate({right: '15px'}, 150);
    });
    $("li.nav-item").mouseleave(function(){
        $(this).stop().animate({right: '0px'}, 100);
    });

	$('a.nav-a').click(function(event){
		console.log("click called!");
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		console.log(sectionID);
		scrollToID('#' + sectionID, 750);
	});

	// scroll function
	function scrollToID(id, speed){
		console.log("Scroll to ID called");
		var targetOffset = $(id).offset().top;
		console.log(targetOffset);
		$root.animate({scrollTop:targetOffset}, speed);
	}
});

$( ".top_nav .overviewinfo" ).click(function(e) {
	e.preventDefault();
	if($(".top_nav").hasClass("top_nav_overinfo_opened")){
		$(".top_nav").removeClass("top_nav_overinfo_opened");
		$(".overvie_information_sec").removeClass("overvie_information_sec_active");
	}else{
		$(".top_nav").addClass("top_nav_overinfo_opened");
		$(".overvie_information_sec").addClass("overvie_information_sec_active")
		$(".left_menu").removeClass("left_menu_active");
		$(".top_nav").removeClass("left_menu_opened");
		$(".main_content_def").addClass("main_content_def_unactive");
	}
});



$( ".left_menu .logoplace" ).click(function(e) {
	e.preventDefault();
	if($(".top_nav").hasClass("left_menu_opened")){
		$(".top_nav").removeClass("left_menu_opened");
		$(".left_menu").removeClass("left_menu_active");
		$(".main_content_def").addClass("main_content_def_unactive");
	}else{
		$(".top_nav").addClass("left_menu_opened");
		$(".left_menu").addClass("left_menu_active");
		$(".top_nav").removeClass("top_nav_overinfo_opened");
		$(".overvie_information_sec").removeClass("overvie_information_sec_active");
		$(".main_content_def").removeClass("main_content_def_unactive");
	}
});
// $( ".left_menu_active .logoplace .xicon" ).click(function(e) {
// 	e.preventDefault();
// 	$(".top_nav").removeClass("left_menu_opened");
// 	$(".left_menu").removeClass("left_menu_active");
	
// 	if($(".top_nav").hasClass("left_menu_opened")){
// 		$(".top_nav").removeClass("left_menu_opened");
// 		$(".left_menu").removeClass("left_menu_active");
// 	}else{
// 		$(".top_nav").addClass("left_menu_opened");
// 		$(".left_menu").addClass("left_menu_active");
// 		$(".top_nav").removeClass("top_nav_overinfo_opened");
// 		$(".overvie_information_sec").removeClass("overvie_information_sec_active");
// 	}
// });

$( ".top_nav .hambmenu_phone" ).click(function(e) {
	e.preventDefault();
	if($(".top_nav").hasClass("left_menu_opened")){
		$(".top_nav").removeClass("left_menu_opened");
		$(".left_menu").removeClass("left_menu_active");
	}else{
		$(".top_nav").addClass("left_menu_opened");
		$(".left_menu").addClass("left_menu_active");
		$(".top_nav").removeClass("top_nav_overinfo_opened");
		$(".overvie_information_sec").removeClass("overvie_information_sec_active");
	}
});


$( ".customdropdown" ).click(function(e) {
	e.preventDefault();


	$(".top_nav").addClass("left_menu_opened");
	$(".left_menu").addClass("left_menu_active");
	$(".top_nav").removeClass("top_nav_overinfo_opened");
	$(".overvie_information_sec").removeClass("overvie_information_sec_active");
		$(".main_content_def").removeClass("main_content_def_unactive");


	$(".left_menu .main_menu .activeitem").removeClass("activeitem");
	$(this).parent().addClass("activeitem");
});




$( document ).ready(function() {
    if ($(window).width() < 991) {
       $(".left_menu").removeClass("left_menu_active");
       $(".top_nav").removeClass("left_menu_opened");
		$(".main_content_def").addClass("main_content_def_unactive");
    }
});








jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });
});


$( ".your_locations .placefortable tbody .bind_db" ).hover(
  function() {
    $(this).parent().parent().parent().addClass("onhoverbin");
  }, function() {
    $(this).parent().parent().parent().removeClass("onhoverbin");
  }
);
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});







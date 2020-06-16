$(".user_managment_profile .mainrow .right_side .not_cont .notifications .selectallnotification .selectallclick_notif input").click(function () {
   if($(this).is(":checked")){
    $(this).parent().parent().parent().find(".notification input").not(this).prop('checked', this.checked);
    $(".deleteallnoti").removeClass("deleteallnoti_de");
    $(this).parent().parent().parent().find(".notification .bind_db").removeClass("bind_db_disabled");
   }else{
    $(this).parent().parent().parent().find(".notification input").not(this).prop('checked', false);  
    $(".deleteallnoti").addClass("deleteallnoti_de");
    $(this).parent().parent().parent().find(".notification .bind_db").addClass("bind_db_disabled");
   }
});

$(".notifications .cont_notiff .notification .container_checkbox").click(function () {
    
    if($(this).find("input").is(":checked")){
      $(this).parent().parent().find(".bind_db").removeClass("bind_db_disabled");
    }else{
      $(this).parent().parent().find(".bind_db").addClass("bind_db_disabled");
    }


   var i = 0;
   var j = 0;
   var count = $(".notifications .cont_notiff .notification input").length;

   $(this).parent().parent().parent().find("input").each(function(m) {
        j++;
      if($(this).is(":checked")){
        i++;
      }else{
        i--;
      }

        if (m+1 === count) {
            if(j == i){
                $(this).parent().parent().parent().parent().parent().find(".selectallclick_notif input").not(this).prop('checked', this.checked); 
                $(".deleteallnoti").removeClass("deleteallnoti_de");
            }else{
                $(this).parent().parent().parent().parent().parent().find(".selectallclick_notif input").not(this).prop('checked', false);  
                $(".deleteallnoti").addClass("deleteallnoti_de");
            }
        }
   });
   
});





$(".overvie_information_sec .cont .insidecont .box_card").click(function (e) {
  e.preventDefault();
  if ($(window).width() < 991) {
    $(".top_nav").removeClass("top_nav_overinfo_opened");
    $(".overvie_information_sec").removeClass("overvie_information_sec_active");
  }
});





$(".bins_modal .selectallbin .selectallclick input").click(function () {
   if($(this).is(":checked")){
    $(this).parent().parent().parent().parent().parent().find(".checkboxes input").not(this).prop('checked', this.checked);
   }else{
    $(this).parent().parent().parent().parent().parent().find(".checkboxes input").not(this).prop('checked', false);  
   }
});

$(".bins_modal .checkboxes .container_checkbox").click(function () {
   var i = 0;
   var j = 0;
   var count = $(".bins_modal .checkboxes input").length;

   $(this).parent().find("input").each(function(m) {
        j++;
      if($(this).is(":checked")){
        i++;
      }else{
        i--;
      }

        if (m+1 === count) {
            if(j == i){
                $(this).parent().parent().parent().find(".selectallclick input").not(this).prop('checked', this.checked); 
            }else{
                $(this).parent().parent().parent().find(".selectallclick input").not(this).prop('checked', false);  
            }
        }
   });
   
});

$( ".dashboard .least_collections .body_part .rightside .btn_foricons" ).click(function(e) {
  e.preventDefault();
  if($(this).hasClass("activebtn")){
   
  }else{
    $(".btn_foricons").removeClass("activebtn");
    $(this).addClass("activebtn")
  }
});



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

$( ".dashboard .boxes_row .box" ).click(function(e) {
    e.preventDefault();
    $(this).parent().find(".activebox").removeClass("activebox");
    $(this).addClass("activebox");
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
    $(".clickable-row").click(function(event) {
        var cc = event.target.className;
        if (cc.indexOf("fordelpop") >= 0){
            // alert("2");
        }else{
            if(cc != "SPAN"){
                window.location = $(this).data("href");
            }    
        }
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








// for custom select
// Iterate over each select element
$('.custom_select select').each(function () {

    // Cache the number of options
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    // Hides the select element
    $this.addClass('s-hidden');

    // Wrap the select element in a div
    $this.wrap('<div class="select"></div>');

    // Insert a styled div to sit over the top of the hidden select element
    $this.after('<div class="styledSelect"></div>');

    // Cache the styled div
    var $styledSelect = $this.next('div.styledSelect');

    // Show the first select option in the styled div
    $styledSelect.text($this.children('option').eq(0).text());

    // Insert an unordered list after the styled div and also cache the list
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    // Insert a list item into the unordered list for each select option
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    // Cache the list items
    var $listItems = $list.children('li');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        /* alert($this.val()); Uncomment this for demonstration! */
    });

    // Hides the unordered list when clicking outside of it
    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


$( ".custom_select .styledSelect" ).click(function() {
	if($(this).hasClass("active")){
		$(this).removeClass("active");
	}
});










// loader
var cooldown = 200;
 for(let i = 0; i < $(".accordeon").children().length; i++){ 
    setTimeout(function(){
      $(`.accordeon>.slice:eq(${i})`).css("animation", "SliceHeight .3s  infinite linear");
    }, cooldown*i);
  }
/* jQuery connected */




$(window).on('load', function() {
    $(".preloader").addClass("preloader_disable");
});




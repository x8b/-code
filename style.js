
/**	1. PRELOADER + ANIMATION
 *****************************************************/
$(window).load(function() {
	  setTimeout(function() {
		  $('#prelaoder').addClass('animated fadeOut').fadeOut(2000);	
	  
		  setTimeout(function() {
			  $('#home-screen .content-block img.logo').addClass('animated fadeInDown');
			  
			  setTimeout(function() {
				  $('#home-screen .content-block h1').addClass('animated fadeInUp');	
				  
				  setTimeout(function() {
					  $('#home-screen .content-block p').addClass('animated fadeInUp');
					  
					  setTimeout(function() {
						  $('.arrow-wrap').addClass('animated fadeInUp');
					  
						  setTimeout(function() {
							  $('#canvas-container').addClass('animated fadeInUp');  
		  
							  setTimeout(function() {
								  activeOverlays = 1;
								  $('#canvas-container').css('opacity','1');  
								  $('.arrow-wrap').css('opacity','1');
								  $('#home-screen .content-block p').css('opacity','1');
								  $('#home-screen .content-block h1').css('opacity','1');
								  $('#home-screen .content-block img.logo').css('opacity','1');
								  
							  }, 1000); 
						  }, 500);
					  }, 500); 
				  }, 500);
			  }, 500);
		  }, 1000); 
	  }, 1000); 
  
});

$(document).ready( function(){

	var activeOverlays = 0;
	
	$(".overlay-content .social-icons li a").tooltip({
		container: 'body',
		delay: { "show": 100, "hide": 0 }
	});
	$(".overlay-content .social-icons li a").click(function(){
		$(this).tooltip('hide')
	});
	
});

/**	2. MOBIL DETECT
 *****************************************************/

(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|android|ipad|playbook|silk|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);	

   
/**3. BACKGROUND
 *****************************************************/
$(document).ready( function(){

$('#bg-image').backstretch([
"https://i.imgur.com/0GJzRsy.png "
, "https://i.imgur.com/bR6vnHw.png "
, "https://i.imgur.com/BHb6G12.png "
, "https://i.imgur.com/9G0gS5R.png "
, "https://i.imgur.com/dETnVjD.png "
, "https://i.imgur.com/5vwVKAl.png "
, "https://i.imgur.com/dv3HZSB.png "
, "https://i.imgur.com/xWpZBGu.png "
, "https://i.imgur.com/NRO4JdC.png "
, "https://i.imgur.com/hEdAimR.png "
, "https://i.imgur.com/RjFLoGk.png "
, "https://i.imgur.com/Uwr2jxQ.png "
, "https://i.imgur.com/A3nuaYo.png "
, "https://i.imgur.com/bLP5NMg.png "
, "https://i.imgur.com/TCSfIzV.png "


], {duration: 7000, fade: 500});

});

/**	4. CYCLE
 *****************************************************/
$(document).ready( function(){
	
	$('.slider').cycle({
		fx : 'scrollVert',
		timeout: 7000,
		delay: 1000,
		speed: 500,
		slides: '.slide'
	});
	
});


/**	5. OVERLAY
 *****************************************************/
$(document).ready( function(){
	
	
	//BASIC FUNCTIONS 
	function hideFrontContent() {
		$('.content-block .container').fadeOut('slow');
	}
		
	function showFrontContent() {
		$('.content-block .container').fadeIn('slow');
	}
	
	function hideOverlayContent() {
		$('.overlay .overlay-container').fadeOut('slow');
		$('.overlay .overlay-container').removeClass('fadeInUp');
		$('.overlay .overlay-container').addClass('fadeOutDown');
	}
		
	function showOverlayContent() {
		$('.overlay .overlay-container').fadeIn('slow');
		$('.overlay .overlay-container').removeClass('fadeOutDown');
		$('.overlay .overlay-container').addClass('fadeInUp');
	}
	
	function showCloseButton() {
		$('.close-overlay').fadeIn('slow');
		$('.close-overlay').removeClass('fadeOutUpBig');
		$('.close-overlay').addClass('fadeInDownBig');
	}
	
	function hideCloseButton() {
		$('.close-overlay').fadeOut('slow');
		$('.close-overlay').removeClass('fadeInDownBig');
		$('.close-overlay').addClass('fadeOutUpBig');
	}
	
	function showContactCloseButton() {
		$('.close-contact').fadeIn('slow');
		$('.close-contact').removeClass('fadeOutUpBig');
		$('.close-contact').addClass('fadeInDownBig');
	}
	
	function hideContactCloseButton() {
		$('.close-contact').fadeOut('slow');
		$('.close-contact').removeClass('fadeInDownBig');
		$('.close-contact').addClass('fadeOutUpBig');
	}
	
	function showOverlay() {
		$('.overlay').removeClass('hideOverlay');
		$('.overlay').addClass('showOverlay');
	}
	
	function hideOverlay() {
		$('.overlay').removeClass('showOverlay');
		$('.overlay').addClass('hideOverlay');
	}
	
	function showOverlayContact() {
		$('.overlay-contact').removeClass('hideOverlay');
		$('.overlay-contact').addClass('showOverlay');
	}
	
	function hideOverlayContact() {
		$('.overlay-contact').removeClass('showOverlay');
		$('.overlay-contact').addClass('hideOverlay');
	}

	function hideOverlayContactContent() {
		$('.overlay-contact .overlay-container').fadeOut('slow');
		$('.overlay-contact .overlay-container').removeClass('fadeInUp');
		$('.overlay-contact .overlay-container').addClass('fadeOutDown');
	}
		
	function showOverlayContactContent() {
		$('.overlay-contact .overlay-container').fadeIn('slow');
		$('.overlay-contact .overlay-container').removeClass('fadeOutDown');
		$('.overlay-contact .overlay-container').addClass('fadeInUp');
	}
	
	
   	//STATUS VARS
	var overlayStatus = 0;
	var overlayContactStatus = 0;
	var statusforGoTo = 0;
	
	
	//FUNCTION CONNECTING OVERLAY
	function openOverlay() {
		
		hideFrontContent();
		
			setTimeout(function() {	
			showOverlay();
			showCloseButton();
			
			  setTimeout(function() {
				showOverlayContent();
				
				  setTimeout(function() {
					  overlayStatus = 1;
					  statusforGoTo = 1;
	
				  
				  }, 800);
			  }, 400);
		   }, 400);
		  
	}

	function closeOverlay() {
		
		hideCloseButton();
		hideOverlayContent();
		
		  setTimeout(function() {	 
			hideOverlay();
			  
			  setTimeout(function() {
				  showFrontContent();
				  
				  setTimeout(function() {
					  activeOverlays = 1;
					  statusforGoTo = 0;
	
				  
				  }, 1000);
			  }, 400);
		  }, 600);
		  
	}
	
	//FUNCTION CONNECTING OVERLAY CONTACT
	function openOverlayContact() {
		
		hideCloseButton();
		hideOverlayContent();
		
			setTimeout(function() {
			showOverlayContact();
			showContactCloseButton();
			
				setTimeout(function() {
					showOverlayContactContent();
						  
					setTimeout(function() {
						overlayContactStatus = 1;
	  
					}, 1000);
				}, 400);
			}, 200);
		  
	}
	
	function closeOverlayContact() {
		
		hideContactCloseButton();
		hideOverlayContactContent();
		showCloseButton();	
			setTimeout(function() {	 
				hideOverlayContact();
				showOverlayContent();
								  
				  setTimeout(function() {
					  overlayStatus = 1;
					  statusforGoTo = 1;
	
				  
				  }, 1000); 	
			  }, 400);		
		  
	}
	
	
	
	
	//CALL FUNCTIONS OVERLAY
	$('.open-overlay').click(function() {
		
		openOverlay();
		  			  
	});	
	
	
	$('.close-overlay').click(function() {
		
		closeOverlay();
		  				  
	});
	

	$('.overlay').bind('mousewheel', function(e) {
		if(e.originalEvent.wheelDelta / -120 > 0) {
			//alert('down');
		} else {
			
				procesfinshedOverlay1();
				function procesfinshedOverlay1() {
				  if(overlayStatus == 1) {
					  closeOverlay();
					  overlayStatus = 0;
					  statusforGoTo = 0;
					  
				  }else {}
				}
		  	
		}

	});


	$('#front-page').bind('mousewheel', function(e) {
		if(e.originalEvent.wheelDelta / 120 > 0) {
			//alert('up');
		} else {
			
		    preloadprocessfinshed();
			function preloadprocessfinshed() {
			  if(activeOverlays == 1) {
				  openOverlay();
				  activeOverlays = 0;
				  
			  }else {}
			}
		  	
		}

	});
	
	
	
	//CALL FUNCTION OVERLAY CONTACT
	$('.open-contact').click(function() {
		
		 openOverlayContact();
		  				  
	});
	
	$('.close-contact').click(function() {
		
		closeOverlayContact();
		  				  
	});
	
	
	$('.overlay').bind('mousewheel', function(e) {
		if(e.originalEvent.wheelDelta / 120 > 0) {
			//alert('up');
		} else {
			
			processfinshedGoTo();
			function processfinshedGoTo() {
			  if(statusforGoTo == 1) {
				  openOverlayContact();
				  statusforGoTo = 0;
				  overlayStatus = 0;
				  
			  }else {}
			}
		  	
		}

	});
	
	$('.overlay-contact').bind('mousewheel', function(e) {
		if(e.originalEvent.wheelDelta / -120 > 0) {
			//alert('down');
		} else {
			
		  	procesfinshedOverlayContact1();
			function procesfinshedOverlayContact1() {
			  if(overlayContactStatus == 1) {
				  closeOverlayContact();
				  overlayContactStatus = 0;
				  
			  }else {}
			}
			
		}

	});

	
});

/**	6. AJAX SUBSCRIBE
 *****************************************************/
$(document).ready( function(){
	
	$('.subscribe-form').submit(function() {
		  var postdata = $('.subscribe-form').serialize();
		  $.ajax({
			  type: 'POST',
			  url: 'assets/subscribe.php',
			  data: postdata,
			  dataType: 'json',
			  success: function(json) {
				  if(json.valid == 0) {
					  $('.status-message').html(json.error);
					  $('.status-message').fadeIn('slow');
					  $('.status-message').css('margin-top','5px');
				  }
				  else {
					  $("input, textarea").val('');
					  $('.subscribe-form button').prop('disabled',true);
					  $('.status-message').html(json.message);
					  $('.status-message').fadeIn('slow');
					  $('.status-message').css('margin-top','5px');
				  }
			  }
			});
			return false;
		});
		
});


/**	7. AJAX CONTACT
 *****************************************************/
$(document).ready( function(){
	
	$('.contact-form form').submit(function() {
	
			$('.contact-form form .nameLabel').html('Name');
			$('.contact-form form .emailLabel').html('Email');
			$('.contact-form form .messageLabel').html('Message');
	
			var postdata = $('.contact-form form').serialize();
			$.ajax({
				type: 'POST',
				url: 'assets/sendmail.php',
				data: postdata,
				dataType: 'json',
				success: function(json) {
					if(json.nameMessage != '') {
						$('.contact-form form .nameLabel').append(' - <span class="status"> ' + json.nameMessage + '</span>');
					}
					if(json.emailMessage != '') {
						$('.contact-form form .emailLabel').append(' - <span class="status"> ' + json.emailMessage + '</span>');
					}
					if(json.messageMessage != '') {
						$('.contact-form form .messageLabel').append(' - <span class="status"> ' + json.messageMessage + '</span>');
					}
					if(json.nameMessage == '' && json.emailMessage == '' && json.messageMessage == '') {
							$('.contact-form .status-message-contact').addClass('animated fadeIn').html('EMAIL SENT SUCCESSFULLY.');
							$('input[type="text"],textarea').val('');
					}
				}
			});
			return false;
		});	
			
});
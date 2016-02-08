$(document).ready(function() {

//Validation
 $('#defaultForm').bootstrapValidator({
        message: 'Не правильно!',
        feedbackIcons: {
            valid: 'fa fa-check-square',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh'
        },
         fields: {
            phoneNumber: {
            	validators: {
            		notEmpty: {
                        message: 'Нельзя отправлять пустое поле!'
                    },
            		phone: {
            			message: 'Введите номер телефона Российской Федерации!',
            			country: 'RU'            			
            		}
            	}
            },
            username: {
                message: 'Не правильно!',
                validators: {
                    notEmpty: {
                        message: 'Нельзя отправлять пустое поле!'
                    },
                    stringLength: {
                        min: 3,
                        max: 30,
                        message: 'Имя должно состоять не менее чем из 3-x и не более чем из 30-ти букв!'
                    },
                     regexp: {
                        regexp: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/,
                        message: 'Введите пожалуйста только буквы !'
                    }
                }
            }
        }
    });


///При нажатии на кнопку передача даанных из родительского контейнера
$('.js-btn-b3').click(function(){
	var describe = $(this).parents(".block-3__tile").find('.block-3__total-price').text();
	$("input#describe").val(describe);
});


//При нажатии на гамбургер
	/*==========  Responsive Navigation  ==========*/
	$('.main-nav').children().clone().appendTo('.responsive-nav');
	$('.responsive-menu-open').on('click', function(event) {
		event.preventDefault();
		$('body').addClass('no-scroll');
		$('.responsive-menu').addClass('open');
		return false;
	});
	$('.responsive-menu-close').on('click', function(event) {
		event.preventDefault();
		$('body').removeClass('no-scroll');
		$('.responsive-menu').removeClass('open');
		return false;
	});
	 $('.responsive-nav li a').on('click', function(event) {
		$('body').removeClass('no-scroll');
		$('.responsive-menu').removeClass('open');		
	});

 // Плавная прокрутка при переходе по якорю
 $('a[href*=#]').bind("click", function(e){
  var anchor = $(this);
  var name = anchor.attr('href').replace(new RegExp("#",'gi'), '');
  $('html, body').stop().animate({
    scrollTop: $('a[name='+name+']').offset().top-40
  }, 1000);
  e.preventDefault();
  return false;
});	 

//Прилипающее меню
var start_pos=$('#stick_menu').offset().top;
 $(window).scroll(function(){
  if ($(window).scrollTop()>=start_pos) {
      if ($('#stick_menu').hasClass()==false) $('#stick_menu').addClass('to_top');
  }
  else $('#stick_menu').removeClass('to_top');
 });


//Слайдер
$(function(){

			var p=$('#content').responsiveSlides({

				height:545,						// slides conteiner height
				background:'#fff',				// background color and color of overlayer to fadeout on init
				autoStart:true,					// boolean autostart
				startDelay:0,					// start whit delay
				effectInterval:5000,			// time to swap photo
				effectTransition:1000,			// time effect
				pagination:[
					{
						active:false,			// activate pagination
						inner:false,				// pagination inside or aouside slides conteiner
						position:'B_L', 		/* 
													pagination align:
														T_L = top left
														T_C = top center
														T_R = top right
											
														B_L = bottom left
														B_C = bottom center
														B_R = bottom right
												*/
						margin:10, 				// pagination margin
						dotStyle:'', 			// dot pagination class style
						dotStyleHover:'', 		// dot pagination class hover style
						dotStyleDisable:''		// dot pagination class disable style
					}
				]
			});

		});


// Счетчик номер 1
$(function(){	
	var note = $('note'),
		ts = new Date(2012, 0, 1),
		newYear = true;	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;}		
	$('#countdown-1').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){			
			var message = "";			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}			
			note.html(message);
		}
	});	
});

//Счетчик номер 2
$(function(){
	var note = $('note'),
		ts = new Date(2012, 0, 1),
		newYear = true;	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;}		
	$('#countdown-2').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){			
			var message = "";			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}			
			note.html(message);
		}
	});	
});

//Счетчик номер 3
$(function(){
	var note = $('note'),
		ts = new Date(2012, 0, 1),
		newYear = true;	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 10*24*60*60*1000;
		newYear = false;}		
	$('#countdown-3').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){			
			var message = "";			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";			
			if(newYear){
				message += "left until the new year!";
			}
			else {
				message += "left to 10 days from now!";
			}			
			note.html(message);
		}
	});	
});




  
});






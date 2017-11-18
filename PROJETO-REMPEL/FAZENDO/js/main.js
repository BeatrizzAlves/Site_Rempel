$(document).ready(function(){
  
  var classActive = 'active';

 
  $('.artistas .artistas_lista a').first().addClass(classActive);
  $('.portifolio .mudar').first().addClass(classActive);
  $('.artistas .artistas_lista img').first().addClass('art-border');

  $('.artistas .artistas_lista a').click(function(e){
    e.preventDefault();
    var itemId = $(this).attr('href');

    $('.artistas .artistas_lista a, .portifolio .mudar').removeClass(classActive);
    $('.artistas .artistas_lista img').removeClass('art-border');
    $(this).addClass(classActive);
    $(this).find('img').addClass('art-border');
    $(itemId).addClass(classActive);

  });
 });

$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 5000,          // Integer: Time between slide transitions, in milliseconds
});

$(".rslides_portifolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false
});


$(window).scroll(function(){
  var windowTop = $(this).scrollTop();
  $('.anime').each(function(){
    if(windowTop > $(this).offset().top - 400){
      $(this).addClass('anime-init');
    } else{
      $(this).removeClass('anime-init');
    }
  });
});

$(document).ready(function(){
  var windowTop = $(this).scrollTop();
  $('.anim').each(function(){
    if(windowTop > $(this).offset().top - 500){
      $(this).addClass('anim-init');
    } else{
      $(this).removeClass('anim-init');
    }
  });
});

$(document).ready(function(){
  var windowTop = $(this).scrollTop();
  $('.homes').each(function(){
    if(windowTop > $(this).offset().top - 500){
      $(this).addClass('homes-init');
    } else{
      $(this).removeClass('homes-init');
    }
  });
});


Visibility.onVisible(function(){
	setTimeout(function () {
		$(".introducao h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao blockquote").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".introducao .btn").addClass("animated fadeInDown");
	}, 1200);
	setTimeout(function () {
		$(".animar").addClass("animated fadeInDown");
	}, 1600);

	setTimeout(function () {
		$(".introducao-interna h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao-interna p").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".animar-interno").addClass("animated fadeInDown");
	}, 1200);
});

// Formulario

$('.formphp').on('submit', function() {
	var emailContato = "hardnx@gmail.com"; // Escreva aqui o seu e-mail

	var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
	
	that.find('[name]').each(function(index, value) {
		var that = $(this),
				name = that.attr('name'),
				value = that.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
		
			if( $('[name="leaveblank"]').val().length != 0 ) {
				$('.formphp').html("<div id='form-erro'></div>");
				$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-erro');
				});
			} else {
			
				$('.formphp').html("<div id='form-send'></div>");
				$('#form-send').html("<span>Mensagem enviada!</span><p>Em breve eu entro em contato com você. Abraços.</p>")
				.hide()
				.fadeIn(1500, function() {
				$('#form-send');
				});
			};
		},
		error: function(response) {
			$('.formphp').html("<div id='form-erro'></div>");
			$('#form-erro').html("<span>Falha no envio!</span><p>Você pode tentar novamente, ou enviar direto para o e-mail " + emailContato + " </p>")
			.hide()
			.fadeIn(1500, function() {
			$('#form-erro');  
		});
		}
	});
	
	return false;
});





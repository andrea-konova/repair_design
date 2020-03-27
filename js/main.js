
// modal__dialog jquery
$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

});  

// thanks__dialog jquery
$(document).ready(function () {
  

});  

// up-arrow jquery
$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  // скрипт для плавного перехода по якорным ссылкам
  jQuery(function ($) {
    $('a[href*="#"]').on('click.smoothscroll', function (e) {
      var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
      if (theHref && location.href.replace(/#.*/, '') != theHref) return;
      var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
      if (!$target.length) return;
      e.preventDefault();
      $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 500, 'swing', function () {
        window.location.hash = hash;
      });
    });
  });

});

// swiper-slider
$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var nextBtn = $('.swiper-button-next');
  var prevBtn = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  nextBtn.css('left', prevBtn.width() + 10 + bullets.width() + 10)
  bullets.css('left', prevBtn.width() + 10)

  new WOW().init();

});

// Валидация форм
// modal__form
var modal = $('.modal');
var thanks = $('.thanks'),
  thanksClose = $('.thanks__close');

thanksClose.on('click', function () {
  thanks.toggleClass('thanks--visible');
});
$.validator.methods.email = function (value, element) {
  return this.optional(element) || /[a-z]+@[a-z]+.[a-z]+/.test(value);
};
$('.modal__form').validate({
  errorElement: "em",
  errorClass: "invalid",
  rules: {
    // строчное правило {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
      minlength: 17
    },
    policyCheckbox: "required",
    // правило-объект (блок)
    userEmail: {
      required: true,
      email: true
    }
  },
  // правило сообщение
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длиннее 15 букв"
    },
    userPhone: {
      required: "Заполните поле",
      minlength: "Некорректный номер"
    },
    policyCheckbox: "Cогласитесь с политикой",
    userEmail: {
      required: "Заполните поле",
      email: "Некорректный email"
    },
  },
  // для работы checkbox
  errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
      return element.next('label').append(error);
    }
    error.insertAfter($(element));
  },
  
  // отправка формы через ajax 
  submitHandler: function (form) {
    $.ajax({
      type: "POST",
      url: "./send.php",
      data: $(form).serialize(),
      success: function (response) {
        $(form)[0].reset();
        modal.removeClass('modal--visible');
        thanks.addClass('thanks--visible');
      },
      error: function (response) {
        console.error('Ошибка запроса ' + response);
      }
    });
  }
});
// end modal__form

// control__form
$('.control__form').validate({
  errorElement: "em",
  errorClass: "invalid",
  rules: {
    // строчное правило {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    policyCheckbox: "required",
    userPhone: {
      required: true,
      minlength: 17
    },
  },
  // правило сообщение
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длиннее 15 букв"
    },
    policyCheckbox: "Cогласитесь с политикой",
    userPhone: {
      required: "Заполните поле",
      minlength: "Некорректный номер"
    },
  },
  // для работы checkbox
  errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
      return element.next('label').append(error);
    }
    error.insertAfter($(element));
  },
  // отправка формы через ajax 
  submitHandler: function (form) {
    $.ajax({
      type: "POST",
      url: "./send.php",
      data: $(form).serialize(),
      success: function (response) {
        $(form)[0].reset();
        thanks.addClass('thanks--visible');
      },
      error: function (response) {
        console.error('Ошибка запроса ' + response);
      }
    });
  }
});
// end control__form

// footer__form
$('.footer__form').validate({
  errorElement: "em",
  errorClass: "invalid",
  rules: {
    // строчное правило {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
      minlength: 17
    },
    userQuestion: {
      required: true,
      minlength: 10
    },
    policyCheckbox: "required",
    // правило-объект (блок)
    userEmail: {
      required: true,
      email: true
    }
  },
  // правило сообщение
  messages: {
    userName: {
      required: "Заполните поле",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длиннее 15 букв"
    },
    userPhone: {
      required: "Заполните поле",
      minlength: "Некорректный номер"
    },
    policyCheckbox: "Cогласитесь с политикой",
    userQuestion: {
      required: "Заполните поле",
      minlength: "Не короче 10 символов",
    },
    userEmail: {
      required: "Заполните поле",
      email: "Некорректный email"
    }
  },
  // для работы checkbox
  errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
      return element.next('label').append(error);
    }
    error.insertAfter($(element));
  },
  // отправка формы через ajax 
  submitHandler: function (form) {
    $.ajax({
      type: "POST",
      url: "./send.php",
      data: $(form).serialize(),
      success: function (response) {
        $(form)[0].reset();
        thanks.addClass('thanks--visible');
      },
      error: function (response) {
        console.error('Ошибка запроса ' + response);
      }
    });
  }
});
// end footer__form

// Маска для телефона
$('[type=tel]').mask('+7(000) 000-00-00', { placeholder: "+7 (___) ___-__-__" });

var player;
$('.video__play').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'TXpdkK6lDmk',
    events: {
      'onReady': videoPlay
    }
  });
})

function videoPlay(event) {
  event.target.playVideo();
}

// Создание яндекс карт
var design = $('.design');
var designTop = design.offset().top;
$(window).bind('scroll', function () {
  var windowTop = $(this).scrollTop();
  if (windowTop > designTop) {
    $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4d94309aa54d49b539355686315859df3292a3dbf4770ba29837bcc28dc2a9b7&amp;width=100%25&amp;height=100%&amp;lang=ru_UA&amp;scroll=false"></script>')
    $(window).unbind('scroll')
  }
});
  

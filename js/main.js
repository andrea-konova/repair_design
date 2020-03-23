/* document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

}); */

/* $('.modal').on('click', function (e) {
  if (e.target == this) $('.modal__dialog').fadeOut('fast');
}) */

// $(document).click(function (e) { 
//   var elem = $('.modal'); 
//   if (e.target != elem[0] && !elem.has(e.target).length) { elem.hide(); } }) 

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
  var thanks = $('.thanks'),
      thanksBtn = $('.thanks__close');

  thanksBtn.on('click', function () {
    thanks.toggleClass('thanks--visible');
  });

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
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        alert('Сообщение отправленно, наш менеждер свяжется с вами в течении 15 минут');
        $(form)[0].reset();
        modal.removeClass('modal--visible');
        thanks.toggleClass('thanks--visible');
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
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        alert('Сообщение отправленно, наш менеждер свяжется с вами в течении 15 минут');
        $(form)[0].reset();

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
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        alert('Сообщение отправленно, наш менеждер свяжется с вами в течении 15 минут');
        $(form)[0].reset();

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

// Создание яндекс карт
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [47.244729, 39.723187],
    zoom: 12,
    controls: ["typeSelector", "zoomControl"]
  }, {
    searchControlProvider: 'yandex#search'
  }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Наш офис',
      balloonContent: 'Заходи, если чё'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/location-pin.png',
      // Размеры метки.
      iconImageSize: [32, 32],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    });

  myMap.geoObjects
    .add(myPlacemark);
  myMap.behaviors
    .disable("scrollZoom");
});

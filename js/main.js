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
// control__form
$('.control__form').validate ({
  errorClass: "invalid",
  rules: { 
    // строчное правило {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required"
  },
  // правило сообщение
  messages: {
    userName: {
      required: "Заполните поле 'Имя'",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длиннее 15 букв"
    },
    userPhone: "Заполните поле 'Телефон'"
  }
});
// end control__form

// modal__form
$('.modal__form').validate({
  errorClass: "invalid",
  rules: {
    // строчное правило {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required",
    // правило-объект (блок)
    userEmail: {
      required: true,
      email: true
    }
  },
  // правило сообщение
  messages: {
    userName: {
      required: "Заполните поле 'Имя'",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длиннее 15 букв"
    },
    userPhone: "Заполните поле 'Телефон'",
    userEmail: {
      required: "Заполните поле 'Email'",
      email: "Введите корректный emailВведите корректный email"
    }
  }
});
// end modal__form

// footer__form
$('.footer__form').validate({
  errorClass: "invalid",
  rules: {
    // строчное правило {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required",
    userQuestion: "required",
    // правило-объект (блок)
    userEmail: {
      required: true,
      email: true
    }
  },
  // правило сообщение
  messages: {
    userName: {
      required: "Заполните поле 'Имя'",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длиннее 15 букв"
    },
    userPhone: "Заполните поле 'Телефон'",
    userQuestion: "Заполните поле 'Вопрос'",
    userEmail: {
      required: "Заполните поле Email",
      email: "Введите корректный emailВведите корректный email"
    }
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
  map.behaviors
    .disable("scrollZoom");
});

// ! function (a) {
//   a.fn.viewportChecker = function (b) {
//     var c = {
//       classToAdd: "visible",
//       classToRemove: "invisible",
//       offset: 100,
//       repeat: !1,
//       invertBottomOffset: !0,
//       callbackFunction: function (a, b) {},
//       scrollHorizontal: !1
//     };
//     a.extend(c, b);
//     var d = this,
//       e = {
//         height: a(window).height(),
//         width: a(window).width()
//       },
//       f = -1 != navigator.userAgent.toLowerCase().indexOf("webkit") ? "body" : "html";
//     return this.checkElements = function () {
//       var b, g;
//       c.scrollHorizontal ? (b = a(f).scrollLeft(), g = b + e.width) : (b = a(f).scrollTop(), g = b + e.height), d.each(function () {
//         var d = a(this),
//           f = {},
//           h = {};
//         if (d.data("vp-add-class") && (h.classToAdd = d.data("vp-add-class")), d.data("vp-remove-class") && (h.classToRemove = d.data("vp-remove-class")), d.data("vp-offset") && (h.offset = d.data("vp-offset")), d.data("vp-repeat") && (h.repeat = d.data("vp-repeat")), d.data("vp-scrollHorizontal") && (h.scrollHorizontal = d.data("vp-scrollHorizontal")), d.data("vp-invertBottomOffset") && (h.scrollHorizontal = d.data("vp-invertBottomOffset")), a.extend(f, c), a.extend(f, h), !d.hasClass(f.classToAdd) || f.repeat) {
//           String(f.offset).indexOf("%") > 0 && (f.offset = parseInt(f.offset) / 100 * e.height);
//           var i = f.scrollHorizontal ? Math.round(d.offset().left) + f.offset : Math.round(d.offset().top) + f.offset,
//             j = f.scrollHorizontal ? i + d.width() : i + d.height();
//           f.invertBottomOffset && (j -= 2 * f.offset), g > i && j > b ? (d.removeClass(f.classToRemove), d.addClass(f.classToAdd), f.callbackFunction(d, "add")) : d.hasClass(f.classToAdd) && f.repeat && (d.removeClass(f.classToAdd), f.callbackFunction(d, "remove"))
//         }
//       })
//     }, a(document).bind("touchmove MSPointerMove pointermove", this.checkElements), a(window).bind("load scroll touchmove", this.checkElements), a(window).resize(function (b) {
//       e = {
//         height: a(window).height(),
//         width: a(window).width()
//       }, d.checkElements()
//     }), this.checkElements(), this
//   }
// }(jQuery);

// jQuery(document).ready(function () {
//   jQuery('.elementanm').addClass("hidden").viewportChecker({
//     classToAdd: 'visible animated slideLeft',
//     offset: 100
//   });
// });
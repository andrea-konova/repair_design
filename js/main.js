document.addEventListener("DOMContentLoaded", function(event) {
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

});

/* document.addEventListener('keypress', function (e) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  if (e.keyCode === 27) document.getElementById('modal').hidden = 1;
  
}); */

/* $(document).click(function (e) {
  var elem = $('.modal'); 
   if (e.target != elem[0] && !elem.has(e.target).length) { elem.hide();
   } 
  }) */
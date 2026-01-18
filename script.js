$(document).ready(function () {
  let $menu = $('#mobile_menu');
  let $icon = $('#mobile_btn i');

  $('#mobile_btn').on('click', function () {
    if (!$menu.hasClass('show')) {
      $menu.removeClass('hide').addClass('show').css('display', 'flex');
      $icon.removeClass('fa-bars').addClass('fa-x');
    } else {
      $menu.removeClass('show').addClass('hide');
      $icon.removeClass('fa-x').addClass('fa-bars');

      // Espera a animação terminar pra esconder de vez
      setTimeout(() => {
        $menu.css('display', 'none');
      }, 400); // igual ao tempo do slideUp
    }
  });
});

  const headers = document.querySelectorAll(".service-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".icon");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.textContent = "+";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.textContent = "–";
      }
    });
  });



  const images = document.querySelectorAll(".gallery-item img");
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("galleryModalImg");
  const closeBtn = document.querySelector(".gallery-modal .close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.add("active");
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("active");
  });







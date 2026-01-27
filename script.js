$(document).ready(function () {
  let $menu = $('#mobile_menu');
  let $icon = $('#mobile_btn i');

  $('#mobile_btn').on('click', function () {
    if (!$menu.hasClass('show')) {
      
      $menu.removeClass('hide').addClass('show').css('display', 'flex');
      $icon.removeClass('fa-bars').addClass('fa-x');
      $('body').addClass('no-scroll'); // 🔒 trava scroll
    } else {
      
      $menu.removeClass('show').addClass('hide');
      $icon.removeClass('fa-x').addClass('fa-bars');
      $('body').removeClass('no-scroll'); // 🔓 libera scroll

      setTimeout(() => {
        $menu.css('display', 'none');
      }, 400);
    }
  });

  $('#mobile_nav_list a').on('click', function () {
    $menu.removeClass('show').addClass('hide');
    $icon.removeClass('fa-x').addClass('fa-bars');
    $('body').removeClass('no-scroll');

    setTimeout(() => {
      $menu.css('display', 'none');
    }, 400);
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

  document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.reviews-track');
  const cards = document.querySelectorAll('.review-card');
  const originalCardsCount = cards.length; 
  const cardWidth = cards[0].offsetWidth + 24; 

  // Duplica os cards para criar o efeito de loop infinito
  track.innerHTML += track.innerHTML;

  // Atualiza a lista de cards após duplicar 
  const allCards = document.querySelectorAll('.review-card');

  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  // Função para mover para a direita
  rightArrow.addEventListener('click', () => {
    track.scrollBy({ left: cardWidth, behavior: 'smooth' });

    // Após a animação, verifica se passou do meio e reseta suavemente
    setTimeout(() => {
      if (track.scrollLeft >= cardWidth * originalCardsCount) {
        track.style.scrollBehavior = 'auto';
        track.scrollLeft -= cardWidth * originalCardsCount;
        track.style.scrollBehavior = 'smooth';
      }
    }, 300);
  });

  // Função para mover
  leftArrow.addEventListener('click', () => {
    track.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    setTimeout(() => {
      if (track.scrollLeft <= 0) {
        track.style.scrollBehavior = 'auto';
        track.scrollLeft += cardWidth * originalCardsCount;
        track.style.scrollBehavior = 'smooth';
      }
    }, 300); 
  });
});


  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#nav_list a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });


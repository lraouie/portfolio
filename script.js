document.addEventListener("DOMContentLoaded", function () {
  // 3D Carousel setup
  const carousel = document.getElementById('carousel');
  const items = document.querySelectorAll('.carousel-item');
  const itemCount = items.length;
  const rotateAmount = 360 / itemCount;
  let angle = 0;

  items.forEach((item, i) => {
    const rotation = i * rotateAmount;
    item.style.transform = `rotateY(${rotation}deg) translateZ(500px)`;
  });

  window.rotateCarousel = function (direction) {
    angle += direction * rotateAmount;
    carousel.style.transform = `rotateY(${angle}deg)`;
  };

  // Scroll animation
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));

  // ✅ Title click logic
  const titles = document.querySelectorAll('.project-titles h1');

  // Title 1 elements
  const video = document.getElementById('projectVideo');
  const description = document.getElementById('projectDescription');
  const techBox = document.getElementById('techBox');

  // Title 2 (Website) elements
  const webVideo = document.getElementById('webVideo');
  const webTech = document.getElementById('webTech');
  const webDesc = document.getElementById('webDesc');


  // Title 3 (Ticket) elements
  const ticketVideo = document.getElementById('ticketVideo');
  const ticketTech = document.getElementById('ticketTech');
  const ticketDesc = document.getElementById('ticketDesc');


  // Title 4 (Lovato) elements
  const lovatoVideo = document.getElementById('lovatoVideo');
  const lovatoTech = document.getElementById('lovatoTech');
  const lovatoDesc = document.getElementById('lovatoDesc');


  // Title 5 (API) elements
  const apiVideo = document.getElementById('apiVideo');
  const apiTech = document.getElementById('apiTech');
  const apiDesc = document.getElementById('apiDesc');


  function hideAll() {
    video && (video.style.display = 'none');
    description && (description.style.display = 'none');
    techBox && (techBox.style.display = 'none');

    webVideo && (webVideo.style.display = 'none');
    webTech && (webTech.style.display = 'none');
    webDesc && (webDesc.style.display = 'none');
  
    ticketVideo && (ticketVideo.style.display = 'none');
    ticketTech && (ticketTech.style.display = 'none');
    ticketDesc && (ticketDesc.style.display = 'none');

    lovatoVideo && (lovatoVideo.style.display = 'none');
    lovatoTech && (lovatoTech.style.display = 'none');
    lovatoDesc && (lovatoDesc.style.display = 'none');
  
    apiVideo && (apiVideo.style.display = 'none');
    apiTech && (apiTech.style.display = 'none');
    apiDesc && (apiDesc.style.display = 'none');

  }

  function showTitle1() {
    video && (video.style.display = 'block');
    description && (description.style.display = 'block');
    techBox && (techBox.style.display = 'block');
  }

   function showWeb() {
    webVideo.style.display = 'block';
    webTech.style.display = 'block';
    webDesc.style.display = 'block';

  }

    function showticket() {
    ticketVideo.style.display = 'block';
    ticketTech.style.display = 'block';
    ticketDesc.style.display = 'block';

  }


  function showLovato() {
    lovatoVideo.style.display = 'block';
    lovatoTech.style.display = 'block';
    lovatoDesc.style.display = 'block';

  }

    function showApi() {
    apiVideo.style.display = 'block';
    apiTech.style.display = 'block';
    apiDesc.style.display = 'block';

  }

  if (titles.length > 0) {
    // Show Title 1 content on load
    titles[0].classList.add('active');
    hideAll();
    showTitle1();
  }

  titles.forEach((title, index) => {
    title.addEventListener('click', () => {
      titles.forEach(t => t.classList.remove('active'));
      title.classList.add('active');
      hideAll();

      if (index === 0) {
        showTitle1();
      } 
      else if (index === 1) {
        showWeb();
      }
      else if (index === 2) {
        showticket();
      }
      else if (index === 3) {
        showLovato();
      }
      else if (index === 4) {
        showApi();
      }
    });
  });
});

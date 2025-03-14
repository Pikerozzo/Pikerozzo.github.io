//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


// Close the navbar when a link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        let navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});


const galleryCarousel = document.querySelector('#gallery #carouselExampleIndicators');
galleryCarousel.addEventListener('slide.bs.carousel', function (e) {
  const activeImg = document.querySelector('#gallery #carouselExampleIndicators .carousel-inner .carousel-item.active');
  
  let currentElement = activeImg;
  
  for (let i = 0; i < 3; i++) {
    if (currentElement) {
      currentElement = currentElement.nextElementSibling;
      if (currentElement.hasChildNodes()) {
        if (currentElement.childNodes[0].loading == "lazy") {
          currentElement.childNodes[0].loading = "eager";
        }
      }
    } else {
      break;
    }
  }
});
  

// add elements to the gallery
const gallery = document.querySelector("#carouselExampleIndicators");
const indicators = document.querySelector("#carouselExampleIndicators .carousel-indicators");


let galleryPath = "./imgs/gallery/"
galleryPath = "./imgs/gallery_webp/"

const inner = document.createElement("div");
// inner.class = "carousel-inner";
inner.classList.add("carousel-inner");

for (var i = 1; i < 55; i++) {

  const item = document.createElement("div");
  // item.class = "carousel-item";
  item.classList.add("carousel-item");
  if (i == 1) {
    item.classList.add("active");
  }
  const img = document.createElement("img");
  img.class = "d-block w-100";
  // img.src = "./imgs/gallery/" + i + ".jpg";
  img.src = galleryPath + i + ".webp";
  img.alt = "Image " + i;
  // if (i > 2 && i < 54) {
  if (i > 3) {
    // img.loading = "eager";
    img.loading = "lazy";
  }
  
  item.appendChild(img);
  inner.appendChild(item);


  const btn = document.createElement("button");
  btn.type = "button";
  btn.dataset.bsTarget = "#carouselExampleIndicators";
  btn.dataset.bsSlideTo = i-1;
  btn.ariaLabel = "Slide " + i;
  if (i == 1) {
    btn.classList.add("active");
    btn.ariaCurrent = "true";
  }
  indicators.appendChild(btn);
}
indicators.style.visibility = "hidden";
gallery.appendChild(inner);



$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
		

$(function() {
  $('.boxes').on('click', function() {
    if (this.classList.contains('slick-current')) {
      
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');   
    }
  });		
});





const eventsGallery = document.querySelector("#eventCarousel");
for (var i = 1; i <= 11; i++) {
  const div = document.createElement("div");
  div.classList.add("boxes");
  const img = document.createElement("img");
  // img.src = "./imgs/gallery/events/" + i + ".jpg";
  img.src = galleryPath + "events/" + i + ".webp";
  img.alt = "Event " + i;
  // if (i > 2 && i < 11) {
  //   img.loading = "lazy";
  // }
  div.appendChild(img);
  eventsGallery.appendChild(div);
}







$(document).ready(function(){
  $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 500,
        // slidesToShow: 4,
        // slidesToScroll: 4,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,

variableWidth: true,
focusOnSelect: true,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
});
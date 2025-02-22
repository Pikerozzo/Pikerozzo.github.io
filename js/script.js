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



// document.ready(function () {
//     var maxChars = 520
//     var ellipsis = "..."
//     $(".article").each(function () {
//       var text = $(this).find(".text.full").text()
//       var html = $(this).find(".text.full").html()
//       if (text.length > maxChars) {
//         var shortHtml =
//           html.substring(0, maxChars - 3) +
//           "<span class='ellipsis'>" +
//           ellipsis +
//           "</span>"
//         $(this).find(".text.short").html(shortHtml)
//       }
//     })
//     $(".read-more").click(function () {
//       var readMoreText = "readmore"
//       var readLessText = "readless"
//       var $shortElem = $(this).parent().find(".text.short")
//       var $fullElem = $(this).parent().find(".text.full")
  
//       if ($shortElem.is(":visible")) {
//         $shortElem.hide()
//         $fullElem.show()
//         $(this).text(readLessText)
//       } else {
//         $shortElem.show()
//         $fullElem.hide()
//         $(this).text(readMoreText)
//       }
//     })
//   }
// )
  

// add elements to the gallery
const gallery = document.querySelector("#carouselExampleIndicators .carousel-inner");
const indicators = document.querySelector("#carouselExampleIndicators .carousel-indicators");




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
  img.src = "./imgs/gallery/" + i + ".jpg";
  img.alt = "Image " + i;
  // if (i > 2 && i < 54) {
  //   // img.loading = "eager";
  //   img.loading = "lazy";
  // }
  // link.textContent = translations[lang]['contacts_first_website_link'];
  // myfirstWebsite.textContent = translations[lang]['contacts_first_website'];
  
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



// document.querySelector('.multiple-items').addEventListener('click', function () {
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
		

// document.querySelectorAll('.pop').forEach(pop => {
//   pop.addEventListener('click', function () {
//     console.log(this.querySelector('img').src);
//     document.querySelector('.imagepreview').src = this.querySelector('img').src;
//     // $('#imagemodal').modal('show');
//     // document.querySelector('#imagemodal').modal('show');
//     const modal = document.querySelector('#imagemodal');
//     // modal.classList.add('show');
//     modal.modal('show');

//   });
// });

// $(function() {
//   $('.pop').on('click', function() {
//     $('.imagepreview').attr('src', $(this).find('img').attr('src'));
//     $('#imagemodal').modal('show');   
//   });		
// });
$(function() {
  $('.boxes').on('click', function() {
    if (this.classList.contains('slick-current')) {
      
      console.log('EXPANDING');
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');   
    }
  });		
});





// const eventsGallery = document.querySelector("#eventCarousel .multiple-items");
// for (var i = 1; i < 11; i++) {
//   const ext_div = document.createElement("div");
//   const int_div = document.createElement("div");
//   int_div.classList.add("pop");
//   int_div.type = "button";
//   const img = document.createElement("img");
//   img.src = "./imgs/gallery/events/" + i + ".jpg";
//   img.alt = "Event " + i;
//   int_div.appendChild(img);
//   ext_div.appendChild(int_div);
//   eventsGallery.appendChild(ext_div);
// }







$(document).ready(function(){
  $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerMode: true,

variableWidth: true,
//   align: true,
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
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});





// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.getElementById("carouselExampleIndicators");
  
//   carousel.addEventListener("slide.bs.carousel", function (event) {
//       let nextSlide = event.relatedTarget; // Get the next slide element
//       let img = nextSlide.querySelector("img");

//       if (img && img.loading === "lazy") {
//           // Force preload before sliding
//           img.loading = "eager"; 
//           img.src = img.src; // Re-trigger the image load
//       }
//   });
// });

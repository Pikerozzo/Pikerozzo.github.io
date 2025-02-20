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



document.ready(function () {
    var maxChars = 520
    var ellipsis = "..."
    $(".article").each(function () {
      var text = $(this).find(".text.full").text()
      var html = $(this).find(".text.full").html()
      if (text.length > maxChars) {
        var shortHtml =
          html.substring(0, maxChars - 3) +
          "<span class='ellipsis'>" +
          ellipsis +
          "</span>"
        $(this).find(".text.short").html(shortHtml)
      }
    })
    $(".read-more").click(function () {
      var readMoreText = "readmore"
      var readLessText = "readless"
      var $shortElem = $(this).parent().find(".text.short")
      var $fullElem = $(this).parent().find(".text.full")
  
      if ($shortElem.is(":visible")) {
        $shortElem.hide()
        $fullElem.show()
        $(this).text(readLessText)
      } else {
        $shortElem.show()
        $fullElem.hide()
        $(this).text(readMoreText)
      }
    })
  })
  
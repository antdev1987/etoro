
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var xx = document.getElementsByClassName("mySlidess");

  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {

    x[i].style.display = "none"
    // xx[i].style.display = "none"

  }

  for (i = 0; i < xx.length; i++) {

    // x[i].style.display = "none"
    xx[i].style.display = "none"

  }



  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" platform-carouse-icon-hover", "");
  }
  x[slideIndex-1].style.display = "block";  
  xx[slideIndex-1].style.display = "block"; 
  
  dots[slideIndex-1].className += " platform-carouse-icon-hover";
}


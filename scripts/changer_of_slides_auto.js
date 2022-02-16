

var slideIndex = 0;

carousel_MNIST();
function carousel_MNIST(){
  var i;
  var current_name="Mnist";
  //We will add more projects via another variables
  var x = document.getElementsByClassName("Mnist");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1;}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel_MNIST, 1500); // Change image every 1.5 seconds
}